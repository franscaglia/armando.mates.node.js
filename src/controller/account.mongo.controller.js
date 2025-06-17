import { UserMongoService } from '../service/user.mongo.service.js'


export const AccountMongoController = {
    getAll: async (req, res) => {
        try{
            const Cuentas  = await UserMongoService.getAll()
            if(!Cuentas){
                return res.status(404).json({
                    message: " -- no se encontraron usuarios"
                })
            }
            return res.status(200).json({
                message:" -- Se econtraron usuarios : ",
                payload: { Cuentas }
            })
        }catch(error){
            res.status(500).json({ error: " -- error al obtener los usuarios" });
        }
    },

    searchById: async (req, res) => {
        try{
            const { id } = req.params
            const cuenta = await UserMongoService.searchById(id)
            if(!cuenta){
                return res.status(404).json({
                    message: ` -- no se encontraron cuentas de id ${id}`
                })
            }
            return res.status(200).json({
                message:" -- carga exitosa",
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
                return res.status(400).json({ error: " -- no se subio ningun archibo"})
            }
            res.status(200).json({
                message: "cuenta subida correctamente",
            })
        }catch(error){
            res.status(500).json({ error: " -- error al crear la cuenta" });
        }
    },
    modifyOne: async (req, res) => {
        try {
            const { id } = req.params;
            const dataActualizada = req.body;
            const cuentaActualizada = await UserMongoService.modifyOne(id, dataActualizada);
            if (!cuentaActualizada) {
                return res.status(404).json({ error: "cuenta no encontrada" });
            }
            res.status(200).json({ user: cuentaActualizada });
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
            res.status(200).json({ message: "cuenta eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: " -- error al eliminar la cuenta" });
        }
    }
} 