import { Router } from "express";
import proxyCita from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeCitasPorDia = Router();

routeCitasPorDia.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeCitasPorDia.get("/:fecha?", proxyCita, (req,res)=>{
    let sql = (req.params.fecha)
        ? [`SELECT 
        cita.cit_codigo AS "codigo_cita",
        cita.cit_fecha AS "fecha",
        cita.cit_estadoCita AS "estado_cita",
        cita.cit_medico AS "matricula_medico",
        medico.med_nombreCompleto AS "medico",
        usuario.usu_nombre AS "nombre_usuario",
        usuario.usu_primer_apellido_usuar AS "apellido_usuario"
        FROM cita
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
         WHERE cita.cit_fecha = ?;`, req.params.fecha]
        : [`SELECT 
        cita.cit_codigo AS "codigo_cita",
        cita.cit_fecha AS "fecha",
        cita.cit_estadoCita AS "estado_cita",
        cita.cit_medico AS "matricula_medico",
        medico.med_nombreCompleto AS "medico",
        usuario.usu_nombre AS "nombre_usuario",
        usuario.usu_primer_apellido_usuar AS "apellido_usuario"
        FROM cita
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional`]
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routeCitasPorDia; 