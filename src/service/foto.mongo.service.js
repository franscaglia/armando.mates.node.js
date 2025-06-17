import { FotoJsonService } from './foto.json.service.js'
import { FotoMongoRepository } from '../repo/foto.mongo.repository.js'

export const FotoMongoService = {
    getAll: async() => {
        return await FotoJsonService.getAll()
    },
    searchById: async() => {

    },
    createOne: async(foto) => {
        return await FotoJsonService.createOne(foto)
    },
    modifyOne: async() => {

    },
    deleteOne: async(id) => {
        return await FotoJsonService.deleteOne(id)
    },

}