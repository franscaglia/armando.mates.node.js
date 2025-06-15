import { Router } from "express";
import { FotoController } from "../controller/foto.controller.js";

const fotoRouter = Router()

fotoRouter.get("/all", FotoController.getAll)
fotoRouter.get("/foto/:id", FotoController.searchById)
fotoRouter.post("/agregarFoto", FotoController.createOne)
fotoRouter.put("/modificarFoto", FotoController.modifyOne)
fotoRouter.delete("/borrarFoto", FotoController.deleteOne)

export { fotoRouter}
