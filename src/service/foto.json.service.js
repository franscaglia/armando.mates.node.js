import { Foto } from '../../model/foto.js'
import { FotoJsonRepository } from '../repo/foto.json.repository.js'

export const FotoJsonService = {
    getAll: async () => {
        const fotosJson = await FotoRepository.getAll()
        if(!fotosJson){ return null }
        return fotosJson
    },
    modifyOne: async (id, data) => {
        
    },
    deleteOne: async (id) => {
        
    }
}