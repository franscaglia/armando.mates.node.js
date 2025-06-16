import { UserMongoService } from '../service/user.mongo.service.js'


export const AccountMongoController = {
    getAll: async (req, res) => {
        const Cuentas  = await UserMongoService.getAll()
        if(!Cuentas){
            return res.status(404).json({
                message: " -- no se encontraron cuentas"
            })
        }
        return res.status(200).json({
            message:" -- carga exitosa",
            payload: { Cuentas }
        })
        
    },

    searchById: async (req, res) => {
        const { id } = req.params
        const cuenta = await UserMongoService.searchById(id)
        if(!cuenta){
            return res.status(404).json({
                message: ` -- no se encontraron cuentas ${id}`
            })
        }
        return res.status(200).json({
            message:" -- carga exitosa",
            payload: cuenta
        })
    },
    createOne: async (req, res) => {
        const { cuenta } = req.body
        const cuentaRes = await UserMongoService.createOne(cuenta)

        if(!req.file || !cuentaRes){
            return res.status(400).json({ error: " -- no se subio ningun archibo"})
        }
        res.status(200).json({
            message: "cuenta subida correctamente",
            nombreArchivo: req.file.filename,
        })
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
            res.status(500).json({ error: "Error al actualizar la cuenta" });
            throw error;
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params;
            const cuentaEliminada = await FotoMongoService.deleteOne(id);
            if (!cuentaEliminada) {
                return res.status(404).json({ error: "cuenta no encontrada" });
            }
            res.status(200).json({ message: "cuenta eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la cuenta" });
            throw error;
        }
    }
} 