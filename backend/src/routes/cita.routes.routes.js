import { Router } from "express";
import proxyCita from "../middleware/middlewarecita.js"
import mysql from "mysql2";

let con = undefined;
const rt = Router();

rt.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

rt.get("/", proxyCita, (req,res)=>{
    con.query("SELECT * FROM cita ORDER BY cit_fecha ASC", (err, data, fil)=>{
        if (err) {
            console.error('Error al obtener los datos de las citas:', err.message);
            res.sendStatus(500);
          } else {
            res.json(data);
          }
    })
})

export default rt; 