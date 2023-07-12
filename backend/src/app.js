import express from "express";
import citasRoutes from "./routes/cita.routes.js"

const app = express();
app.set("port", 5510);
app.use(express.json());

app.use("/api/citas", citasRoutes);




export default app;