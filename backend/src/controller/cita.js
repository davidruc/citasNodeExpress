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
import { IsInt, IsDate } from 'class-validator';
import 'reflect-metadata';
export class cita {
    constructor(id_cita, fecha, estado_cita, medico, usuario, fechaIngresada, idIngresada) {
        this.cit_codigo = id_cita;
        this.cit_fecha = fecha;
        this.cit_estadoCita = estado_cita;
        this.cit_medico = medico;
        this.cit_datosUsuario = usuario;
        this.fecha = fechaIngresada;
        this.id = idIngresada;
    }
}
__decorate([
    IsInt(),
    Expose({ name: "cit_codigo" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], cita.prototype, "cit_codigo", void 0);
__decorate([
    IsDate(),
    Expose({ name: "cit_fecha" }),
    Type(() => Date),
    __metadata("design:type", Date)
], cita.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: "cit_estadoCita" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], cita.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: "cit_medico" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], cita.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: "cit_datosUsuario" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], cita.prototype, "cit_datosUsuario", void 0);
__decorate([
    Expose({ name: "fecha" }),
    Transform(({ value }) => { if (/^\d{4}-\d{2}-\d{2}$/.test(value) || typeof value === "undefined")
        return (value);
    else
        throw { status: 400, message: `el parametro ingresado es invalido` }; }, { toClassOnly: true }),
    __metadata("design:type", Date)
], cita.prototype, "fecha", void 0);
__decorate([
    Expose({ name: "id" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) || typeof value == "undefined")
            return (value);
        else
            throw { status: 400, message: value };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], cita.prototype, "id", void 0);
