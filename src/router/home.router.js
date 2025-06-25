import { Router } from "express";

const homeRouter = Router()

homeRouter.get("", (req, res) => {
    return res.status(200).json({
        message: "Bienvenido a la API de Armando Mates. Funcionando en node.js y Render",
    })
})

export { homeRouter}