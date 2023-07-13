import { Router } from "express";
import proxymedico from "../middleware/middlewaremedico.js"
import mysql from "mysql2";

let con = undefined;
const routerMedico = Router();

routerMedico.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routerMedico.get("/:especialidad?", proxymedico, (req,res)=>{
    let sql = (req.params.especialidad)
        ? [`SELECT medico.med_nombreCompleto AS "medicos", medico.med_especialidad AS "fk_especialidad" , especialidad.esp_nombre AS "especialidad_medico" FROM medico  INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id WHERE especialidad.esp_nombre = ?`, req.params.especialidad]  
        : [`SELECT medico.med_nombreCompleto AS "medicos", medico.med_especialidad AS "fk_especialidad" , especialidad.esp_nombre AS "especialidad_medico" FROM medico  INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id`];
    console.log(req.params);
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las medicos:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routerMedico; 