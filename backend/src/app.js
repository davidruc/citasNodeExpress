import express from "express";
import rt from "./routes/cita.routes.routes.js";
import routesUsuario from "./routes/usuario.routes.js";
import routerMedico from "./routes/medico.routes.js";
import routeCitaXpaciente from "./routes/cita_paciente.routes.js";
import routeCitasMedico from "./routes/citas_medico.routes.js";
import routeCitasDelPaciente from "./routes/citas_del_paciente.routes.js";
import routeCitasPorDia from "./routes/cita_x_dia.routes.js";
import routesConsultorioDoctores from "./routes/consultorios.routes.js";
import routeNoCitaXmedico from "./routes/No_cita_medico.routes.js";
import routeConsultorioPaciente from "./routes/paciente_consultorio.routes.js";
import routeCitaAtendidaGenero from "./routes/Ct_a_genero.routes.js";
import routeCitaRechazadas from "./routes/citasRechazadas.routes.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/citas", rt);
app.use("/api/usuarios", routesUsuario);
app.use("/api/medico", routerMedico);
app.use("/api/ProximaCitaPaciente", routeCitaXpaciente);
app.use("/api/citasMedico", routeCitasMedico);
app.use("/api/citasPaciente", routeCitasDelPaciente);
app.use("/api/citasXfecha", routeCitasPorDia);
app.use("/api/consultorios", routesConsultorioDoctores);
app.use("/api/numeroCitas", routeNoCitaXmedico);
app.use("/api/consultorioCita", routeConsultorioPaciente);
app.use("/api/atendidaXGenero", routeCitaAtendidaGenero); 
app.use("/api/citasCanceladas", routeCitaRechazadas);


const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


export default app;