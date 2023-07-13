import { Router } from "express";
import proxyCita from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeConsultorioPaciente = Router();

routeConsultorioPaciente.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeConsultorioPaciente.get("/:id", proxyCita, (req,res)=>{
    let sql = (req.params.id)
    ? [`SELECT
    cita.cit_codigo AS "codigo_cita",
    usuario.usu_id AS "id_usuario",
    usuario.usu_nombre AS "nombre_usuario",
    medico.med_nombreCompleto AS "medico",
    consultorio.cons_nombre AS "consultorio"
    FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
    INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
    WHERE usuario.usu_id = ?`, req.params.id]
    : [`SELECT
    cita.cit_codigo AS "codigo_cita",
    usuario.usu_id AS "id_usuario",
    usuario.usu_nombre AS "nombre_usuario",
    medico.med_nombreCompleto AS "medico",
    consultorio.cons_nombre AS "consultorio"
    FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
    INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo`]
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las citas:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routeConsultorioPaciente; 