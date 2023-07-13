import { Router } from "express";
import proxyCita from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeCitaXpaciente = Router();

routeCitaXpaciente.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeCitaXpaciente.get("/:id?", proxyCita, (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT 
        cita.cit_codigo AS "codigo_cita",
        cita.cit_fecha AS "fecha_cita",
        cita.cit_datosUsuario AS "datos_usuario",
        usuario.usu_id AS "fk_usuario",
        usuario.usu_nombre AS "nombre_paciente"
        FROM cita
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        WHERE usu_id = ? ORDER BY cita.cit_fecha LIMIT 1`, req.params.id]
        : [`SELECT 
        cita.cit_codigo AS "codigo_cita",
        cita.cit_fecha AS "fecha_cita",
        cita.cit_datosUsuario AS "datos_usuario",
        usuario.usu_id AS "fk_usuario",
        usuario.usu_nombre AS "nombre_paciente"
        FROM cita
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        ORDER BY cita.cit_fecha`]
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routeCitaXpaciente; 