import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config("../../");

export const connection = mysql.createPool(JSON.parse(process.env.MY_DATABASE))