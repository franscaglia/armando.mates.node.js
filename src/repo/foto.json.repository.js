import { JsonHandler } from '../utils/json.handler.js'
import { config } from '../config/config.js'

const { DB_PATH_FOTO } = config;

export const FotoJsonRepository = {
    getAll: async () => {
        const fotos = await JsonHandler.read(DB_PATH_FOTO)
        if(!fotos) { return null}
        return fotos
    },
    createOne: async (foto) => {
        const fotos = await FotoJsonRepository.getAll()
        fotos.push(foto)
        try{
            await JsonHandler.write(DB_PATH_FOTO, fotos)
            return true
        }catch(error){
            return null
        }
    },
    saveAll: async(fotos) => {
        await JsonHandler.write(DB_PATH_FOTO, fotos)
        return true
    }
}