import  express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { storageEmpleado } from '../controllerTS/storageEmpleado.js'
import { validate } from "class-validator";
const appMiddlewareEmpleadoData = express();
const appMiddlewareEmpleadoNoValid = express();

appMiddlewareEmpleadoData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageEmpleado, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data)
        next();
    } catch (error) {
        res.status(error.status).json(error);
    }
})


appMiddlewareEmpleadoNoValid.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageEmpleado, json, { excludeExtraneousValues: true })
        await validate(data);
        req.body = data;
        next()
    } catch (error) {
        res.status(error.status).json(error);
    }
})

export {
    appMiddlewareEmpleadoData,
    appMiddlewareEmpleadoNoValid 
}