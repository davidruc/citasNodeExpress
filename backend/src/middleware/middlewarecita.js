import express from "express";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {cita} from "../controller/cita.js"
import {validate} from 'class-validator'


const proxyCita = express();

proxyCita.use("/:fecha", async (req, res, next)=>{

    try{
        let data = plainToClass(cita, req.body, {excludeExtraneousValues: true});
        await validate(data);
   /*      console.log(data); */
        let data2 = plainToClass(cita, req.params, {excludeExtraneousValues: true});
        console.log(req.params);
        await validate(data2);
    /*     console.log(data2); */
        next();
    } catch (err){
        res.status(err.status).send(err);
    }
})
export default proxyCita;