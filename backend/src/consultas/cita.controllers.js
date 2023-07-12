import getConnection from "../db/database.js";

const getCitasA = async(req, res)=>{
    try{
        const connection = await getConnection();
        const consult = await connection.query("SELECT * FROM cita ORDER BY cit_codigo");
        res.json(consult)
    } catch(err){
        res.status(500);
        res.send(err.message);
    }
}

export const ConsultasCitas = {
    getCitasA
}