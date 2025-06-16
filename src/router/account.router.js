import { Router } from "express";
import { AccountMongoController } from "../controller/account.mongo.controller.js";

const accountRouter = Router()

accountRouter.get("/getAll", AccountMongoController.getAll)
accountRouter.post("/crearUsuario", AccountMongoController.createOne)
accountRouter.put("/modificarMail", AccountMongoController.modifyMail)
accountRouter.delete("borrarCuenta", AccountMongoController.deleteByMail)

export { accountRouter }
