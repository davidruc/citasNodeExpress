import { Router } from "express";
import {proxyCita} from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeCitaRechazadas = Router();

routeCitaRechazadas.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeCitaRechazadas.get("/:fecha?", proxyCita, (req,res)=>{
    let sql = (req.params.fecha)
    ? [`SELECT
    cita.cit_codigo AS "codigo_cita",
    cita.cit_fecha AS "fecha",
    usuario.usu_id AS "id_usuario",
    usuario.usu_nombre AS "nombre_usuario",
    medico.med_nombreCompleto AS "medico"
    FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
    WHERE cit_estadoCita = 3 AND MONTH(cit_fecha) = MONTH(?)`, req.params.fecha]
    : [`SELECT
    cita.cit_codigo AS "codigo_cita",
    cita.cit_fecha AS "fecha",
    usuario.usu_id AS "id_usuario",
    usuario.usu_nombre AS "nombre_usuario",
    medico.med_nombreCompleto AS "medico"
    FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional`]
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las citas:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
  
})

export default routeCitaRechazadas; 