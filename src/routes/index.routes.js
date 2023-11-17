import { Router } from "express";
import clothesRoutes from "./clothes.routes.js";

const rotas = Router();

rotas.use("/clothes", clothesRoutes);

rotas.get("/", (req, res) =>{
    return res.status(200).send({message: "Servidor ok!"});
});

export default rotas;