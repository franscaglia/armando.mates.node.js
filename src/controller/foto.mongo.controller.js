import { FotoMongoService } from '../service/foto.mongo.service.js'


export const FotoMongoController = {
    getAll: async (req, res) => {
        try{
            const fotos  = await FotoMongoService.getAll()
            if(!fotos){
                return res.status(404).json({
                    message: " -- no se encontraron fotos"
                })
            }
            return res.status(200).json({
                message:" -- Se econtraron fotos",
                payload: { fotos }
            })
        }catch(error){
            res.status(500).json({ error: " -- error al obtener las fotos" });
        }
    },

    searchById: async (req, res) => {
        try{
            const id = req.params.id
            const foto = await FotoMongoService.searchById(id)
            if(!foto){
                return res.status(404).json({
                    message: ` -- no se encontraron fotos de id ${id}`
                })
            }
            return res.status(200).json({
                message:" -- Se encontro la foto",
                payload: foto
            })
        }catch(error){
            res.status(500).json({ error: " -- error al buscar por ID" });
        }
    },
    createOne: async (req, res) => {
        try{
            const foto = req.body            
            const fotoRes = await FotoMongoService.createOne(foto)
            if(!fotoRes){
                return res.status(400).json({ error: " -- error al crear la foto"})
            }
            res.status(200).json({
                message: " -- Se creo la foto exitosamnente",
                payload: fotoRes
            })
        }catch(error){
            res.status(500).json({ error: " -- error al crear la foto" });
        }
    },
    modifyOne: async (req, res) => {
        try {
            const id = req.params.id;
            const dataActualizada = req.body;
            const fotoActualizada = await FotoMongoService.modifyOne(id, dataActualizada);
            if (!fotoActualizada || fotoActualizada == null) {
                return res.status(404).json({ error: " -- foto no encontrada" });
            }
            res.status(200).json({
                message: "Foto modificada correctamente",
                payload: fotoActualizada 
            });
        } catch (error) {
            res.status(500).json({ error: " -- error al actualizar la foto" });
        }
    },
    deleteOne: async (req, res) => {
        try {
            const id = req.params.id;
            const fotoEliminada = await FotoMongoService.deleteOne(id);
            if (!fotoEliminada || fotoEliminada == null) {
                return res.status(404).json({ error: "foto no encontrada" });
            }
            res.status(200).json({
                message: "Foto eliminada correctamente",
                payload: fotoEliminada
            });
        } catch (error) {
            res.status(500).json({ error: " -- error al eliminar la foto" });
        }
    }
}