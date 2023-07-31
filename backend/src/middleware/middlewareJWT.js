import dotenv from 'dotenv';
import { SignJWT, jwtVerify } from 'jose';
import express from 'express';
import 'reflect-metadata';
import {plainToClass, classToPlain } from 'class-transformer';
import { storageAlquiler } from '../controllerTS/storageAlquiler.js';
import { storageCliente } from '../controllerTS/storageCliente.js';
import { storageAutomovil } from '../controllerTS/storageAutomovil.js'
import { storageEmpleado } from '../controllerTS/storageEmpleado.js';
const tokenJWT = express();
const validateJWT = express();
dotenv.config('../../');

tokenJWT.use(async(req,res,next)=>{
    let valida;
    let inst;
    switch (req.query.tabla) {
        case 'alquileres':
            inst = plainToClass(storageAlquiler, {}, { ignoreDecorators: true })
            valida = '/alquileres';
            break;
        case 'clientes':
            inst = plainToClass(storageCliente, {}, { ignoreDecorators: true })
            valida = '/clientes';
            break;
        case 'automoviles':
            inst = plainToClass(storageAutomovil, {}, { ignoreDecorators: true })
            valida = '/automoviles';
            break;
        case 'empleados':
            inst = plainToClass(storageEmpleado, {}, { ignoreDecorators: true })
            valida = '/empleados';
            break;
        default:
            res.json({status: 406, message: "No se puede generar el token"});
            break;
    }
    let interfaceData = classToPlain(inst);
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({interfaceData, createdBy:`${valida}`});
    const jwt = await jwtconstructor
    .setProtectedHeader({alg:"HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("30m")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    req.data = jwt;
    next();
})

validateJWT.use(async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.json({status: 401, message: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        const { createdBy } = jwtData.payload
        if (createdBy != req.baseUrl)res.send("Estas usando el token de otra tabla, tienes que crear el token de la tabla que quieres usar")
        req.data = jwtData.payload;
        next();
    } catch (error) {
        res.json({status: 401, message: "Token caducado"});
    }
})
export {
    tokenJWT,
    validateJWT
};