import { Router } from "express";
import { AccountController } from "../controller/account.controller.js";

const accountRouter = Router()

accountRouter.get("/getAll", AccountMongoController.getAll)
accountRouter.get("/cuenta/:id", AccountMongoController.searchById)
accountRouter.post("/crearUsuario", AccountMongoController.createOne)
accountRouter.put("/modificarMail/:id", AccountMongoController.modifyOne)
accountRouter.delete("borrarCuenta", AccountMongoController.deleteById)

export { accountRouter }
