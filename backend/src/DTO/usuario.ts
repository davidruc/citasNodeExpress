import {Expose, Type, Transform} from "class-transformer";

export class usuario{
    @Expose({name: "usu_id"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    usu_id: number;
    @Expose({name: "usu_nombre"})
    @Type(()=> String)
    usu_nombre: String;
    @Expose({name: "usu_segdo_nombre"})
    @Type(()=> String)
    usu_segdo_nombre: String;
    @Expose({name: "usu_primer_apellido_usuar"})
    @Type(()=> String)
    usu_primer_apellido_usuar: String;
    @Expose({name: "usu_segdo_apellido_usuar"})
    @Type(()=> String)
    usu_segdo_apellido_usuar: String;
    @Expose({name: "usu_telefono"})
    @Type(()=> String)
    usu_telefono: String;
    @Expose({name: "usu_direccion"})
    @Type(()=> String)
    usu_direccion: String;
    @Expose({name: "usu_email"})
    @Type(()=> String)
    usu_email: String;
    @Expose({name: "usu_tipodoc"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    usu_tipodoc: number;
    @Expose({name: "usu_genero"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    cit_datosUsuario: number;
    @Expose({name: "usu_acudiente"})
    @Transform(({ value })=> parseInt(value), {toClassOnly: true})
    usu_acudiente: number;
    
    constructor(
        identificacion: number,
        nombre: String,
        segundo_nombre: String,
        apellido: String,
        segundo_apellido: String,
        telefono: String,
        email: String,
        tipo_documento: number,
        datos_usuario: number,
        acudiente: number
    ){
        this.usu_id = identificacion;
        this.usu_nombre = nombre;
        this.usu_segdo_nombre = segundo_nombre;
        this.usu_primer_apellido_usuar = apellido;
        this.usu_segdo_apellido_usuar = segundo_apellido;
        this.usu_telefono = telefono;
        this.usu_email = email;
        this.usu_tipodoc = tipo_documento;
        this.cit_datosUsuario = datos_usuario;
        this.usu_acudiente = acudiente;
    }   
}