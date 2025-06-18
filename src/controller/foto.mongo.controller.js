import { FotoMongoService } from '../service/foto.mongo.service.js'
import { FotoSupaService } from '../service/foto.supabase.service.js'

export const FotoMongoController = {
    getAll: async (req, res) => {
        try{
            const fotosMongo = await FotoMongoService.getAll()
            const fotosSupa = await FotoSupaService.getAll()
            if(!fotosMongo){
                return res.status(404).json({
                    message: " -- no se encontraron fotos"
                })
            }
            return res.status(200).json({
                message:" -- Se econtraron fotos",
                fotos: fotosSupa,
                payload: { fotosMongo }
            })
        }catch(error){
            res.status(500).json({ error: " -- error al obtener las fotosMongo" });
        }
    },

    searchById: async (req, res) => {
        try{
            const id = req.params.id
            const fotoMongo = await FotoMongoService.searchById(id)
            const fotoSupa = await FotoSupaService.searchById(fotoMongo.idSupabase)
            if(!fotoMongo){
                return res.status(404).json({
                    message: ` -- no se encontraron fotosMongo de id ${id}`
                })
            }
            return res.status(200).json({
                message:" -- Se encontro la foto",
                foto: fotoSupa,
                payload: fotoMongo
            })
        }catch(error){
            res.status(500).json({ error: " -- error al buscar por ID" });
        }
    },
    createOne: async (req, res) => {
        try{
            const file = req.file   
            const supaFoto = await FotoSupaService.createOne(file)
            
            const { titulo, descripcion } = req.body;

            const fotoMongo = { idSupabase: supaFoto, titulo, descripcion };
            const fotoRes = await FotoMongoService.createOne(fotoMongo)

            if(!fotoRes){
                return res.status(400).json({ error: " -- error al crear la fotoMongo"})
            }
            res.status(200).json({
                message: " -- Se creo la fotoMongo exitosamnente",
                payload: fotoRes
            })

        }catch(error){
            res.status(500).json({ error: " -- error al crear la fotoMongo" });
        }
    },
    modifyOne: async (req, res) => {
        try {
            const id = req.params.id;
            const dataActualizada = req.body;
            const fotoActualizada = await FotoMongoService.modifyOne(id, dataActualizada);
            if (!fotoActualizada || fotoActualizada == null) {
                return res.status(404).json({ error: " -- fotoMongo no encontrada" });
            }
            res.status(200).json({
                message: "Foto modificada correctamente",
                payload: fotoActualizada 
            });
        } catch (error) {
            res.status(500).json({ error: " -- error al actualizar la fotoMongo" });
        }
    },
    deleteOne: async (req, res) => {
        try {
            const id = req.params.id;
            const fotoEliminadaMongo = await FotoMongoService.deleteOne(id);
            const fotoEliminadaSupa = await FotoSupaService.deleteOne(fotoEliminadaMongo.idSupabase)
            if (!fotoEliminadaMongo || fotoEliminadaMongo == null) {
                return res.status(404).json({ error: "fotoMongo no encontrada" });
            }
            res.status(200).json({
                message: "Foto eliminada correctamente",
                fotoEliminada: fotoEliminadaSupa,
                payload: fotoEliminadaMongo
            });
        } catch (error) {
            res.status(500).json({ error: " -- error al eliminar la fotoMongo" });
        }
    }
}