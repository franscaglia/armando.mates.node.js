import { Router } from "express";
import { FotoMongoController } from "../controller/foto.mongo.controller.js";

const fotoRouter = Router()

fotoRouter.get("/all", FotoMongoController.getAll)
fotoRouter.get("/foto/:id", FotoMongoController.searchById)
fotoRouter.post("/agregarFoto", FotoMongoController.createOne)
fotoRouter.put("/modificarFoto/:id", FotoMongoController.modifyOne)
fotoRouter.delete("/borrarFoto/:id", FotoMongoController.deleteOne)

export { fotoRouter}
