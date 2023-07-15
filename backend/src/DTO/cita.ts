import {Expose, Type, Transform} from "class-transformer";
import {IsInt, IsDate, IsDateString,  IsDefined, MinLength, MaxLength, IsNumber} from 'class-validator';
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
    @Transform(({value})=> {if(/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value === "undefined") return(value); else throw {status: 400, message:`el parámetro ingresado para fecha no es válido, debe seguir la sintaxis AAAA-MM-DD`};}, {toClassOnly:true})
    fecha: Date;
    @Expose({name: "id"})
    @Transform(({value})=>{
        if(/^[0-9]+$/.test(value) || typeof value == "undefined") 
        return (value); else throw {status:400, message: "el dato de id ingresado es incorrecto, ingresa un número entero"}}, {toClassOnly: true})
    id: number;
    @Expose({name: "genero"})
    @Transform(({value})=>{
        if(/^[A-Z]+$/.test(value) || typeof value == "undefined") return (value); else throw {status: 400, message: "error en el ingreso del dato del género. El ingreso es de la abreviatura en mayúsculas. (revisar base de datos)"}
    }, {toClassOnly:true})
    genero: string;
    constructor(
        id_cita: number,
        fecha: Date,
        estado_cita: number,
        medico: number,
        usuario: number,
        fechaIngresada: Date,
        idIngresada: number,
        generoIngresado : string
    ){
        this.cit_codigo = id_cita;
        this.cit_fecha = fecha;
        this.cit_estadoCita = estado_cita;
        this.cit_medico = medico;
        this.cit_datosUsuario = usuario;
        this.fecha = fechaIngresada;
        this.id = idIngresada;
        this.genero = generoIngresado;
    }   
}