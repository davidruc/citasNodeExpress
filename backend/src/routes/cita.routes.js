import { Router } from "express";
import {ConsultasCitas as controllers} from "../consultas/cita.controllers.js"
import proxyCita from "../middleware/middlewarecita.js"

const rt = Router();

rt.get("/", proxyCita, controllers.getCitasA);

export default rt; 