import { Router } from "express";
import { FotoController } from "../controller/foto.controller.js";
import { upload } from "../middle/multer.js";

const fotoRouter = Router()

fotoRouter.get("/all", FotoController.getAll)
fotoRouter.get("/adminAll", FotoController.getAdminAll)
fotoRouter.get("/foto/:id", FotoController.searchById)
fotoRouter.post("/agregarFoto", upload.single('foto'), FotoController.createOne)
fotoRouter.put("/modificarFoto", FotoController.modifyOne)
fotoRouter.delete("/borrarFoto", FotoController.deleteOne)

export { fotoRouter}
