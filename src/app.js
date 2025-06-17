import express from "express"
import { config } from "./config/config.js"
import { fotoRouter } from "./router/fotos.router.js"
import { accountRouter } from "./router/account.router.js"
import mongoConectionInstance from "./db/mongo.connection.js"

await mongoConectionInstance.connect()

const app = express()
app.use(express.json())

app.use("/fotos", fotoRouter)
app.use("/account", accountRouter)

app.listen(config.PORT, () => {
    console.log(` -- Armando Mates corriendo en la direccion : http://${config.HOST}:${config.PORT}/ `)
})


