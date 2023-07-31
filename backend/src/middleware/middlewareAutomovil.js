import  express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { storageAutomovil } from "../controllerTS/storageAutomovil.js";
import { validate } from "class-validator";
const appMiddlewareAutomovilData = express();
const appMiddlewareAutomovilNoValid = express();


appMiddlewareAutomovilData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageAutomovil, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data)
        next();
    } catch (error) {
        res.status(error.status).json(error);
    }
})


appMiddlewareAutomovilNoValid.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageAutomovil, json, { excludeExtraneousValues: true })
        await validate(data);
        req.body = data;
        next()
    } catch (error) {
        res.status(error.status).json(error);
    }
})

export {
    appMiddlewareAutomovilData,
    appMiddlewareAutomovilNoValid 
}