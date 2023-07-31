import dotenv from 'dotenv';
import express from 'express';
import appJWT from './routes/JWT.js';
import appAlquileres from './routes/alquiler.js';
import appCliente from './routes/clientes.js';
import appAutomovil from './routes/automovil.js';
import appEmpleado from './routes/empleado.js';
import { validateJWT } from './middleware/middlewareJWT.js';
dotenv.config("../")
const app = express();


app.use(express.json());

/**
 * * Endpoint para generar el token de la tabla que vaya a usar:
 * ? despues del signo '=' debe colocar el nombre de la tabla que va a usar, puede confirmar las opciones que tiene revisando el SWITCH que esta en el archivo 'middlewareJWT.js' desde la línea 14.
 * @url {http://127.10.10.10:5000/token?tabla='tabla'}
 */
app.use('/token', appJWT);



app.use('/alquileres', validateJWT, appAlquileres)
app.use('/automoviles', validateJWT, appAutomovil)
app.use('/clientes', validateJWT, appCliente)
app.use('/empleados', validateJWT, appEmpleado)

const config = JSON.parse(process.env.MY_SERVER);
app.listen(config,  ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})