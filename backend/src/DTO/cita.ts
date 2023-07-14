import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate, IsDateString,  IsDefined, MinLength, MaxLength} from 'class-validator';
import 'reflect-metadata';

export class cita{
    @IsInt()
    @Expose({name: "cit_codigo"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    cit_codigo: number;
    @IsDate()
    @Expose({name: "cit_fecha"})
    @Type(()=> Date)
    cit_fecha: Date;
    @Expose({name: "cit_estadoCita"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    
    cit_estadoCita: number;
    @Expose({name: "cit_medico"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    cit_medico: number;
    @Expose({name: "cit_datosUsuario"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    cit_datosUsuario: number;

    @Expose({name: "fecha"})
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) ) return(value); else throw {status: 400, message:`el paramtro ingresado es invalido`};}, {toClassOnly:true})
    fecha: Date;

    constructor(
        id_cita: number,
        fecha: Date,
        estado_cita: number,
        medico: number,
        usuario: number,
        fechaIngresada: Date
    ){
        this.cit_codigo = id_cita;
        this.cit_fecha = fecha;
        this.cit_estadoCita = estado_cita;
        this.cit_medico = medico;
        this.cit_datosUsuario = usuario;
        this.fecha = fechaIngresada
    }   
}