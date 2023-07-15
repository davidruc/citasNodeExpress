import { Router } from "express";
import {proxyById} from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeCitasMedico = Router();

routeCitasMedico.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeCitasMedico.get("/:id?", proxyById, (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT 
        cita.cit_codigo AS "codigo_cita",
        cita.cit_medico AS "matricula",
        medico.med_nombreCompleto AS "nombre_medico",
        cita.cit_datosUsuario AS "id_usuario",
        usuario.usu_nombre AS "nombre_paciente"
        FROM cita 
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
        WHERE cit_medico = ?;`, req.params.id]
        : [`SELECT 
        cita.cit_codigo AS "codigo_cita",
        cita.cit_medico AS "fk_medico_asignado",
        cita.cit_datosUsuario AS "fk_usuario",
        usuario.usu_nombre AS "nombre_usuario",
        medico.med_nombreCompleto AS "nombre_medico"
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

export default routeCitasMedico; 