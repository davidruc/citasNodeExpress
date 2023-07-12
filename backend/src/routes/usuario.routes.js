import { Router } from "express";
import proxyUsuario from "../middleware/middlewareusuario.js"
import mysql from "mysql2";

let con = undefined;
const routesUsuario = Router();

routesUsuario.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesUsuario.get("/", proxyUsuario, (req,res)=>{
    con.query("SELECT * FROM usuario ORDER BY usu_nombre", (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las citas:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routesUsuario; 