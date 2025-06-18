import { UserMongoService } from '../service/user.mongo.service.js'


export const AccountMongoController = {
    login: async (req, res) => {
        try{
            const { nombre, password } = req.body
            const data = { nombre, password }
            const token = await UserMongoService.login(data)
            if(!token) { throw new Error(" -- error al validar las credenciales")}
            return res.status(200).json({
                message: " -- token generado con exito",
                token: token
             })
        }catch(error){
            throw new Error(" -- error al validar las credenciales")
        }
    },
    getAll: async (req, res) => {
        try{
            const cuentas  = await UserMongoService.getAll()
            if(!cuentas){
                return res.status(404).json({
                    message: " -- no se encontraron usuarios"
                })
            }
            return res.status(200).json({
                message:" -- Se econtraron usuarios",
                payload: { cuentas }
            })
        }catch(error){
            res.status(500).json({ error: " -- error al obtener los usuarios" });
        }
    },

    searchById: async (req, res) => {
        try{
            const id = req.params.id
            const cuenta = await UserMongoService.searchById(id)
            if(!cuenta){
                return res.status(404).json({
                    message: ` -- no se encontraron cuentas de id ${id}`
                })
            }
            return res.status(200).json({
                message:" -- Se encontro usuario",
                payload: cuenta
            })
        }catch(error){
            res.status(500).json({ error: " -- error al buscar por ID" });
        }
    },
    createOne: async (req, res) => {
        try{
            const cuenta = req.body
            const cuentaRes = await UserMongoService.createOne(cuenta)
            if(!cuentaRes){
                return res.status(400).json({ error: " -- error al crear usuario"})
            }
            res.status(200).json({
                message: " -- Se creo el usuario exitosamnente",
                payload: cuentaRes
            })
        }catch(error){
            res.status(500).json({ error: " -- error al crear la cuenta" });
        }
    },
    modifyOne: async (req, res) => {
        try {
            const id = req.params.id;
            const dataActualizada = req.body;
            const cuentaActualizada = await UserMongoService.modifyOne(id, dataActualizada);
            if (!cuentaActualizada || cuentaActualizada == null) {
                return res.status(404).json({ error: " -- cuenta no encontrada" });
            }
            res.status(200).json({
                message: "Usuario modificado correctamente",
                payload: cuentaActualizada 
            });
        } catch (error) {
            res.status(500).json({ error: " -- error al actualizar la cuenta" });
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params;
            const cuentaEliminada = await UserMongoService.deleteById(id);
            if (!cuentaEliminada || cuentaEliminada == null) {
                return res.status(404).json({ error: "cuenta no encontrada" });
            }
            res.status(200).json({
                message: "Cuenta eliminada correctamente",
                payload: cuentaEliminada
            });
        } catch (error) {
            res.status(500).json({ error: " -- error al eliminar la cuenta" });
        }
    }
} 