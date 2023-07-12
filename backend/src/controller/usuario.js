var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class usuario {
    constructor(identificacion, nombre, segundo_nombre, apellido, segundo_apellido, telefono, email, tipo_documento, datos_usuario, acudiente) {
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
__decorate([
    Expose({ name: "usu_id" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: "usu_nombre" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: "usu_segdo_nombre" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: "usu_primer_apellido_usuar" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: "usu_segdo_apellido_usuar" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: "usu_telefono" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: "usu_direccion" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: "usu_email" }),
    Type(() => String),
    __metadata("design:type", String)
], usuario.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: "usu_tipodoc" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: "usu_genero" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "cit_datosUsuario", void 0);
__decorate([
    Expose({ name: "usu_acudiente" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "usu_acudiente", void 0);
