import { connection } from "../db/connect.js";
import { appMiddlewareEmpleadoData, appMiddlewareEmpleadoNoValid } from "../middleware/middlewareEmpleado.js";
import { Router } from "express";
const appEmpleado = Router();

// "Asistente"
// {http://127.10.10.10:5000/empleados/cargo/"cargo"} = Endpoint del punto 14
appEmpleado.get('/cargo/:cargo', appMiddlewareEmpleadoNoValid, async(req,res)=>{
    let cargo_param = String(req.params.cargo); 
    connection.query(/*SQL*/`
    SELECT *
    FROM Empleado e
    WHERE ${cargo_param} = e.Cargo; `,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/empleados/vendedores} = Endpoint del punto 7
appEmpleado.get('/vendedores', appMiddlewareEmpleadoNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT *
    FROM Empleado e
    WHERE e.Cargo = "Vendedor"; `,(err,data,fields)=>{
        res.send(data)
    })
})


export default appEmpleado;
