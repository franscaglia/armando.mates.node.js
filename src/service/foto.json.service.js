import { FotoJson } from '../model/foto.json.js'
import { FotoJsonRepository } from '../repo/foto.json.repository.js'

export const FotoJsonService = {
    getAll: async () => {
        const fotosJson = await FotoJsonRepository.getAll()
        if(!fotosJson){ return null }
        return fotosJson
    },
    createOne: async (data) => {
        try{
            const foto = { ...data }
            const fotoModel = new FotoJson(foto.idMongo, foto.idSupabase, 2, foto.titulo, foto.descripcion, foto.fecha)
            const fotoRes = await FotoJsonRepository.createOne(fotoModel)
            if(!foto) { return null }
            return fotoRes
        }catch(error){
            throw error
        }
    },
    deleteOne: async (id) => {
        try{
            const fotos = await FotoJsonRepository.getAll()
            const encontrado = fotos.find((foto) => foto.id === id.toString())
            if(!encontrado) { throw new Error(` -- error al querer eliminar foto id : ${id}`) }
            const fotosModify = fotos.filter((foto) => foto.id !== id.toString())
            await FotoJsonRepository.saveAll(fotosModify)
            return encontrado
        }catch(error){
            return null
        }   
    }
}