import express from "express";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {medico} from "../controller/medico.js"

const proxymedico = express();
proxymedico.use((req, res, next)=>{
    try{
        let data = plainToClass(medico, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err){
        res.status(err.status).send(err);
    }
})
export default proxymedico;