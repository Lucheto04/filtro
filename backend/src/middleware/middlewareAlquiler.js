import  express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { storageAlquiler } from "../controllerTS/storageAlquiler.js";
import { validate } from "class-validator";
const appMiddlewareAlquilerData = express();
const appMiddlewareAlquilerNoValid = express();

appMiddlewareAlquilerData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageAlquiler, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data)
        next();
    } catch (error) {
        res.status(error.status).json(error);
    }
})


appMiddlewareAlquilerNoValid.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageAlquiler, json, { excludeExtraneousValues: true })
        await validate(data);
        req.body = data;
        next()
    } catch (error) {
        res.status(error.status).json(error);
    }
})

export {
    appMiddlewareAlquilerData,
    appMiddlewareAlquilerNoValid 
}