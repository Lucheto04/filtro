import { connection } from "../db/connect.js";
import { appMiddlewareClienteData, appMiddlewareClienteNoValid } from "../middleware/middlewareClientes.js";
import { Router } from "express";
const appCliente = Router();

// {http://127.10.10.10:5000/clientes/especifico/:'id'} = Endpoint del punto 20
appCliente.get('/especifico/:id', appMiddlewareClienteNoValid, async(req,res)=>{
    let id_params = Number(req.params.id);
    console.log(id_params);
    connection.query(/*SQL*/`
    SELECT c.ID_Cliente as "id", c.Nombre, c.Apellido, c.Direccion, c.Telefono, c.Email
    FROM Cliente c
    JOIN Reserva r ON r.ID_Cliente = c.ID_Cliente
    WHERE ${id_params} = r.ID_Reserva`,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/clientes/todos} = Endpoint del punto 2
appCliente.get('/todos', appMiddlewareClienteNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT c.ID_Cliente as "id", c.Nombre, c.Apellido, c.DNI, c.Telefono
    FROM Cliente c; `,(err,data,fields)=>{
        res.send(data)
    })
})

// {http://127.10.10.10:5000/clientes/pendientes} = Endpoint del punto 5
appCliente.get('/pendientes', appMiddlewareClienteNoValid, async(req,res)=>{
    connection.query(/*SQL*/`
    SELECT r.ID_Reserva as "id", c.Nombre as "Nombre", c.Apellido as "Apellido",  a.Marca, a.Modelo, a.Tipo ,c.Telefono as "Telefono", r.Fecha_Inicio as "Empezo", r.Fecha_Fin as "Termina"
    FROM Reserva r
    JOIN Cliente c ON r.ID_Cliente = c.ID_Cliente 
    JOIN Automovil a ON r.ID_Automovil = a.ID_Automovil
    WHERE r.Estado = "Pendiente"; `,(err,data,fields)=>{
        res.send(data)
    })
})

//12345678
// {http://127.10.10.10:5000/clientes/:'DNI'} = Endpoint del punto 10
appCliente.get('/:DNI', appMiddlewareClienteNoValid, async(req,res)=>{
    let DNI_params = req.params.DNI;
    connection.query(/*SQL*/`
    SELECT * 
    FROM Cliente c 
    WHERE ${DNI_params} = c.DNI; `,(err,data,fields)=>{
        res.send(data)
    })
})






export default appCliente;