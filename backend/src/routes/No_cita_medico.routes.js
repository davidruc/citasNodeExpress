import { Router } from "express";
import {proxyCitaIdFecha} from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeNoCitaXmedico = Router();

routeNoCitaXmedico.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeNoCitaXmedico.get("/:id?/:fecha?", proxyCitaIdFecha, (req,res)=>{
    console.log(req.params);
    let sql = (req.params.id && req.params.fecha)
    ? [`SELECT 
    cita.cit_medico AS "matricula_medico", 
    cita.cit_fecha AS "fecha_consultas",
    medico.med_nombreCompleto AS "nombre_medico",
    COUNT(*) AS "total_citas"
    FROM cita 
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
    WHERE cit_fecha = ? AND cit_medico = ?
    GROUP BY cit_medico`, [req.params.fecha, req.params.id]]
    : [`SELECT 
      cita.cit_medico AS "matricula_medico", 
      medico.med_nombreCompleto AS "nombre_medico",
      COUNT(*) AS "total_citas"
      FROM cita 
      INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
      GROUP BY cit_medico`]
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las citas:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routeNoCitaXmedico; 