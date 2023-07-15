import express from "express";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {medico} from "../controller/medico.js";
import {validate} from 'class-validator';

const proxymedico = express();
proxymedico.use("/:especialidad" , async (req, res, next)=>{
    try{
        let data = plainToClass(medico, req.body, {excludeExtraneousValues: true});
        await validate(data);
        next();
    } catch (err){
        res.status(err.status).send(err);
    }
})
export default proxymedico;