import { Router } from "express";
import { AccountMongoController } from "../controller/account.mongo.controller.js";

const accountRouter = Router()

accountRouter.get("/getAll", AccountMongoController.getAll)
accountRouter.get("/usuario/:id", AccountMongoController.searchById)
accountRouter.post("/crearUsuario", AccountMongoController.createOne)
accountRouter.put("/modificarMail/:id", AccountMongoController.modifyOne)
accountRouter.delete("/borrarCuenta/:id", AccountMongoController.deleteById)

export { accountRouter }
