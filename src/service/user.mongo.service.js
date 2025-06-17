import { UserMongoRepository } from '../repo/user.mongo.repository.js'
import { UserJsonService } from '../service/user.json.service.js'


export const UserMongoService = {
    getAll: async () => {
        return await UserJsonService.getAll()
    },
    searchById: async (id) => {
      
    },
    createOne: async (cuenta) => {
        const mongoUser = await UserMongoRepository.create(cuenta)
        const backUp =  await UserJsonService.createOne(cuenta)

    },
    modifyOne: async (id, dataActualizada) => {

    },
    deleteById: async (id) => {
        return await UserJsonService.deleteOne(id)
    },
}