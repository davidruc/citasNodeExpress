import express from "express";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {cita} from "../controller/cita.js"
import {validate} from 'class-validator'


const proxyCita = express();

proxyCita.use("/:fecha" , async (req, res, next)=>{
    try{
        let data = plainToClass(cita, req.body, {excludeExtraneousValues: true});
        await validate(data);
        console.log("en fecha");
        let data2 = plainToClass(cita, req.params, {excludeExtraneousValues: true});
        await validate(data2);
        next();
    } catch (err){
        res.status(err.status).send(err);
    }
})

const proxyById = express();
proxyById.use("/:id" , async (req, res, next)=>{
    try{
        let data = plainToClass(cita, req.body, {excludeExtraneousValues: true});
        await validate(data);
        let data2 = plainToClass(cita, req.params, {excludeExtraneousValues: true});
        await validate(data2);
        next();
    } catch (err){
        res.status(err.status).send(err);
    }
})
 
export {proxyCita, proxyById}