import  express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {storageCliente } from "../controllerTS/storageCliente.js";
import { validate } from "class-validator";
const appMiddlewareClienteData = express();
const appMiddlewareClienteNoValid = express();

appMiddlewareClienteData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageCliente, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data)
        next();
    } catch (error) {
        res.status(error.status).json(error);
    }
})


appMiddlewareClienteNoValid.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageCliente, json, { excludeExtraneousValues: true })
        await validate(data);
        req.body = data;
        next()
    } catch (error) {
        res.status(error.status).json(error);
    }
})

export {
    appMiddlewareClienteData,
    appMiddlewareClienteNoValid 
}