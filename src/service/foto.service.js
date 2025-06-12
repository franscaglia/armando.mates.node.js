import { Foto } from '../model/foto.js'
import { FotoRepository } from '../repo/foto.repository.js'

export const FotoService = {
     getAll: async () => {
        const fotos = await FotoRepository.getAll()
        if(!fotos){ return null }
        return fotos
    },
     getAdminAll: async () => {
        
    },
    searchById: async (id) => {
        const foto = await FotoRepository.searchById(id)
        if(!foto) { return null }
        return foto
    },
    createOne: async (data) => {
        const foto = { ...data }
        const fotoModel = new Foto(foto.id, foto.filename, foto.titulo, foto.descripcion, new Date)
        const fotoRes = await FotoRepository.createOne(fotoModel)
        if(!foto) { return null }
        return fotoRes
    },
    modifyOne: async (id, data) => {
        
    },
    deleteOne: async (id) => {
        
    }
}