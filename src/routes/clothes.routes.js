import { Router } from "express";
import { createClothes, deleteClothes, getClothes, getClothesById, updateClothes} from "../controllers/clothes.controller.js";

const clothesRoutes = Router();

clothesRoutes.get("/", getClothes);

clothesRoutes.get("/:id", getClothesById);

clothesRoutes.post("/", createClothes);

clothesRoutes.put("/:id", updateClothes);

clothesRoutes.delete("/:id", deleteClothes);

export default clothesRoutes;