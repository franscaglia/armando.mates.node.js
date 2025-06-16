import express from "express"
import { config } from "./config/config.js"
import { fotoRouter } from "./router/fotos.router.js"
import { accountRouter } from "./router/account.router.js"

const app = express()
app.use(express.json())

app.use("/", fotoRouter)
app.use("/account", accountRouter)

app.listen(config.PORT, () => {
    console.log(` -- Armando Mates corriendo en la direccion : http://${config.HOST}:${config.PORT}/ `)
})


