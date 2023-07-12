import express from "express";

const app = express();
app.set("port", 5510);
app.use(express.json());

export default app;