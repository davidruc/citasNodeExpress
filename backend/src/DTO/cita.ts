import {Expose, Type, Transform} from "class-transformer";

export class cita{
    @Expose({name: "cit_codigo"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    cit_codigo: number;
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
    
    constructor(
        id_cita: number,
        fecha: Date,
        estado_cita: number,
        medico: number,
        usuario: number
    ){
        this.cit_codigo = id_cita;
        this.cit_fecha = fecha;
        this.cit_estadoCita = estado_cita;
        this.cit_medico = medico;
        this.cit_datosUsuario = usuario;
    }   
}