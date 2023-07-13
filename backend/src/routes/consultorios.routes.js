import { Router } from "express";
import proxymedico from "../middleware/middlewaremedico.js"
import mysql from "mysql2";

let con = undefined;
const routesConsultorioDoctores = Router();

routesConsultorioDoctores.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routesConsultorioDoctores.get("/", proxymedico, (req,res)=>{
    con.query(`SELECT 
                medico.med_nroMatriculaProsional AS "matricula_medica",
                medico.med_nombreCompleto AS "nombre",
                especialidad.esp_nombre AS "especialidad",
                medico.med_consultorio AS "numero_consultorio",
                consultorio.cons_nombre AS "nombre_consultorio"
                FROM medico
                INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
                INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id
    `, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de los consultorios:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routesConsultorioDoctores; 