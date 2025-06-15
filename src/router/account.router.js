import { Router } from "express";
import { AccountController } from "../controller/account.controller.js";

const accountRouter = Router()


accountRouter.get("/getAll", AccountController.getAll)
accountRouter.post("/crearUsuario", AccountController.createOne)
accountRouter.put("/modificarMail", AccountController.modifyMail)
accountRouter.delete("borrarCuenta", AccountController.deleteByMail)
