import {Expose, Type, Transform} from "class-transformer";
import { MaxLength, MinLength } from "class-validator";

export class medico{
    @Expose({name: "med_nroMatriculaProsional"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    med_nroMatriculaProsional: number;
    @Expose({name: "med_nombreCompleto"})
    @Type(()=> String)
    med_nombreCompleto: String;
    @Expose({name: "med_consultorio"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
     med_consultorio: number;
    @Expose({name: "med_especialidad"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    med_especialidad: number;
    @Expose({name: "especialidad"})
    @Transform(({ value })=> {
        if( typeof value == "undefined" || /^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ]+$/.test(value) ) return value;
        else throw {status: 400, message : `La especialidad incumple los parámetros acordados`}
    }, {toClassOnly:true})
    especialidad: string;
    
    constructor(
        matricula_medico: number,
        nombre_medico: String,
        fk_consultorio: number,
        fk_especialidad: number,
        especialidadIngresada: string
    ){
        this.med_nroMatriculaProsional = matricula_medico;
        this.med_nombreCompleto = nombre_medico;
        this.med_consultorio = fk_consultorio;
        this.med_especialidad = fk_especialidad;
        this.especialidad = especialidadIngresada;
    }   
}