import { JsonHandler } from '../utils/json.handler.js'
import { config } from '../config/config.js'

const { DB_PATH_USER } = config;

export const UserJsonRepository = {
    getAll: async () => {
        const users = await JsonHandler.read(DB_PATH_USER)
        if(!users) { return null}
        return users
    },
    createOne: async (user) => {
        const users = await UserJsonRepository.getAll()
        users.push(user)
        try{
            await JsonHandler.write(DB_PATH_USER, users)
            return true
        }catch(error){
            return null
        }
    },
    saveAll: async(users) => {
        await JsonHandler.write(DB_PATH_USER, users)
        return true
    }
}