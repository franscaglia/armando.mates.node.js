import { FotoMongoService } from '../service/foto.mongo.service.js'


export const FotoMongoController = {
    getAll: async (req, res) => {
        const fotos  = await FotoMongoService.getAll()
        if(!fotos){
            return res.status(404).json({
                message: " -- no se encontraron fotos"
            })
        }
        return res.status(200).json({
            message:" -- carga exitosa",
            payload: { fotos }
        })
        
    },

    searchById: async (req, res) => {
        const { id } = req.params
        const foto = await FotoMongoService.searchById(id)
        if(!foto){
            return res.status(404).json({
                message: ` -- no se encontraron fotos ${id}`
            })
        }
        return res.status(200).json({
            message:" -- carga exitosa",
            payload: foto
        })
    },
    createOne: async (req, res) => {
        const { foto } = req.body
        const fotoRes = await FotoMongoService.createOne(foto)

        if(!req.file || !fotoRes){
            return res.status(400).json({ error: " -- no se subio ningun archibo"})
        }
        res.status(200).json({
            message: "Imagen subida correctamente",
            nombreArchivo: req.file.filename,
        })
    },
    modifyOne: async (req, res) => {
        try {
			const { id } = req.params;
			const dataActualizada = req.body;
			const imagenActualizada = await FotoMongoService.modifyOne(id, dataActualizada);
			if (!imagenActualizada) {
				return res.status(404).json({ error: "imagen no encontrada" });
			}
			res.status(200).json({ user: imagenActualizada });
		} catch (error) {
			res.status(500).json({ error: "Error al actualizar la imagen" });
            throw error;
		}
    },
    deleteOne: async (req, res) => {
        try {
			const { id } = req.params;
			const imagenEliminada = await FotoMongoService.deleteOne(id);
			if (!imagenEliminada) {
				return res.status(404).json({ error: "imagen no encontrada" });
			}
			res.status(200).json({ message: "imagen eliminada correctamente" });
		} catch (error) {
			res.status(500).json({ error: "Error al eliminar la imagen" });
            throw error;
		}
    }
}