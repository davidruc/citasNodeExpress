import { Router } from "express";
import {proxyCita} from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const routeCitaAtendidaGenero = Router();

routeCitaAtendidaGenero.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

routeCitaAtendidaGenero.get("/:genero", proxyCita, (req,res)=>{
    console.log(req.params);
    let sql = (req.params.genero)
    ? [`SELECT 
    cita.cit_codigo AS "codigo_cita",
    cita.cit_estadoCita AS "estado_cita",
    usuario.usu_id AS "identificacion_usuario",
    usuario.usu_nombre AS "nombre_usuario",
    genero.gen_nombre AS "genero"
    FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN genero ON usuario.usu_genero = genero.gen_id
    WHERE cit_estadoCita = 4 AND genero.gen_abreviatura = ?;
    `, req.params.genero]
    : [`SELECT 
    cita.cit_codigo AS "codigo_cita",
    cita.cit_estadoCita AS "estado_cita",
    usuario.usu_id AS "identificacion_usuario",
    usuario.usu_nombre AS "nombre_usuario",
    genero.gen_nombre AS "genero"
    FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN genero ON usuario.usu_genero = genero.gen_id
    `]
    con.query(...sql, (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las citas:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default routeCitaAtendidaGenero; 