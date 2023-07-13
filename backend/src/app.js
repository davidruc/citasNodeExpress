import express from "express";
import rt from "./routes/cita.routes.js";
import routesUsuario from "./routes/usuario.routes.js";
import routerMedico from "./routes/medico.routes.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/citas", rt);
app.use("/api/usuarios", routesUsuario);
app.use("/api/medico", routerMedico);

const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


export default app;