import { UserJson } from '../model/user.json.js'
import { UserJsonRepository } from '../repo/user.json.repository.js'

export const FotoJsonService = {
    getAll: async () => {
        const usersJson = await UserJsonRepository.getAll()
        if(!usersJson){ return null }
        return usersJson
    },
    createOne: async (data) => {
        try{
            const user = { ...data }
            const userModel = new UserJson(user.titulo, user.autor, user.anio)
            const userRes = await UserJsonRepository.createOne(userModel)
            if(!user) { return null }
            return userRes
        }catch(error){
            throw error
        }
    },
    deleteOne: async (id) => {
        try{
            const users = await UserJsonRepository.getAll()
            const encontrado = users.find((user) => user.id === Number(id))
            if(!encontrado) { throw new Error(` -- error al querer eliminar user id : ${id}`) }
            const usersModify = users.filter((user) => user.id !== Number(id))
            await UserJsonRepository.saveAll(usersModify)
            return encontrado
        }catch(error){
            throw error
        }   
    }
}