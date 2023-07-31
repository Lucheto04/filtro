import { connection } from "../db/connect.js";
import { appMiddlewareAlquilerData, appMiddlewareAlquilerNoValid } from "../middleware/middlewareAlquiler.js";
import { Router } from "express";
const appAlquileres = Router();


// {http://127.10.10.10:5000/alquileres/activos} = Endpoint del punto 4
appAlquileres.get('/activos', appMiddlewareAlquilerNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT a.ID_Alquiler as "id", c.Nombre as "Nombre", c.Apellido as "Apellido", c.Telefono as "Telefono", a.Fecha_Inicio as "Empezo", a.Fecha_Fin as "Termina"
    FROM Alquiler a
    JOIN Cliente c ON a.ID_Cliente = c.ID_Cliente 
    WHERE a.Estado = "Activo"; `,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/alquileres/fecha_especifica} = Endpoint del punto 12 
appAlquileres.get('/fecha_especifica', appMiddlewareAlquilerNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT * 
    FROM Alquiler a
    WHERE "2023-07-05" = a.Fecha_Inicio`,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/alquileres/:id} = Endpoint del punto 6
appAlquileres.get('/:id', appMiddlewareAlquilerNoValid, async(req,res)=>{
    let id_params = Number(req.params.id) ;
    connection.query(/*SQL*/`
    SELECT a.ID_Alquiler as "id", c.Nombre as "Nombre", c.Apellido as "Apellido", c.Telefono as "Telefono", a.Fecha_Inicio as "Empezo", a.Fecha_Fin as "Termina" 
    FROM Alquiler a
    JOIN Cliente c ON a.ID_Cliente = c.ID_Cliente
    WHERE ${id_params} = a.ID_Alquiler; `,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/alquileres/costo_total/:id} = Endpoint del punto 9
appAlquileres.get('/costo_total/:id', appMiddlewareAlquilerNoValid, async(req,res)=>{
    let id_params = Number(req.params.id) ;
    connection.query(/*SQL*/`
    SELECT a.ID_Alquiler as "id", a.Costo_Total
    FROM Alquiler a
    WHERE ${id_params} = a.ID_Alquiler; `,(err,data,fields)=>{
        res.send(data)
    })
})


// {http://127.10.10.10:5000/alquileres/costo_total/:id} = Endpoint del punto 18
// !!! PENDIENTE DE CORREGIR 
appAlquileres.get('/total', appMiddlewareAlquilerNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT *
    FROM Alquiler; `,(err,data,fields)=>{
        res.send(data)
    })
})


export default appAlquileres;