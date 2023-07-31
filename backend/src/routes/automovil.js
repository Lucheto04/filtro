import { connection } from "../db/connect.js";
import { appMiddlewareAutomovilData, appMiddlewareAutomovilNoValid } from "../middleware/middlewareAutomovil.js";
import { Router } from "express";
const appAutomovil = Router();

// {http://127.10.10.10:5000/automoviles/disponibles} = Endpoint del punto 3
appAutomovil.get('/disponibles', appMiddlewareAutomovilNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT a.ID_Automovil as "id", a.Marca, a.Modelo, a.Tipo
    FROM Automovil a; `,(err,data,fields)=>{
        res.send(data)
    })
})


// {http://127.10.10.10:5000/automoviles/sucursal/:id} = Endpoint del punto 8
appAutomovil.get('/sucursal/:id', appMiddlewareAutomovilNoValid, async(req,res)=>{
    let id_params = Number(req.params.id) ;
    connection.query(/*SQL*/`
    SELECT a.Tipo, a.Marca, a.Modelo, sa.Cantidad_Disponible as "Cantidad"
    FROM Sucursal_Automovil sa
    JOIN Sucursal s ON sa.ID_Sucursal = s.ID_Sucursal
    JOIN Automovil a ON sa.ID_Automovil = a.ID_Automovil
    WHERE ${id_params} = s.ID_Sucursal; `,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/automoviles/orden} = Endpoint del punto 16
appAutomovil.get('/orden', appMiddlewareAutomovilNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT *
    FROM Automovil a
    ORDER BY a.Marca, a.Modelo; `,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/automoviles/capacidad-mayor} = Endpoint del punto 11
/* mayores a 5 solo hay de 7 por lo que la busqueda sera especifica al numero 7 */
appAutomovil.get('/capacidad-mayor', appMiddlewareAutomovilNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT *
    FROM Automovil a
    WHERE 7 = a.Capacidad; `,(err,data,fields)=>{
        res.send(data)
    })
})



export default appAutomovil;