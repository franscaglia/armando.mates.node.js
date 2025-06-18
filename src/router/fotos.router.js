import { Router } from "express";
import { FotoMongoController } from "../controller/foto.mongo.controller.js";
import { tokenAuth } from "../middle/auth.jwt.js";
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const fotoRouter = Router()

fotoRouter.get("/all",FotoMongoController.getAll)
fotoRouter.get("/foto/:id", FotoMongoController.searchById)
fotoRouter.post("/agregarFoto", upload.single("file"), FotoMongoController.createOne)
fotoRouter.put("/modificarFoto/:id", FotoMongoController.modifyOne)
fotoRouter.delete("/borrarFoto/:id", FotoMongoController.deleteOne)

export { fotoRouter}
