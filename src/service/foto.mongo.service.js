import { FotoJsonService } from './foto.json.service.js'
import { FotoMongoRepository } from '../repo/foto.mongo.repository.js'

const fotoRepo = new FotoMongoRepository()

export const FotoMongoService = {
    getAll: async() => {
        try{    
            const fotos = await fotoRepo.getAll()
            if(!fotos){ throw new Error(" -- no se encontraron fotos")}
            return fotos
        }catch(error){
            throw new Error(" -- error buscando en mongo")
        }
    },
    searchById: async(id) => {
        try{
            const mongoRes = await fotoRepo.getById(id)
            if(!mongoRes) { throw new Error(`-- no se encontraron fotos con ese ID`)}
            return mongoRes
       }catch(error){
            throw new Error(" -- error al buscar por id")
       } 
    },
    createOne: async(foto) => {
        try{
            const fotoSupabase = {
                ...foto,
                idSupabase: 12
            }
            const mongoFoto = await fotoRepo.create(fotoSupabase) 
            if(!mongoFoto) { throw new Error(`-- no se pudo crear la foto`) }
            const backUp = await FotoJsonService.createOne(mongoFoto._id, 15, foto)
            return mongoFoto
        }catch(error){
            throw new Error(`-- error al crear foto`)
        }
    },
    modifyOne: async(id, dataActualizada) => {
        try{
            const mongoRes = await fotoRepo.update(id, dataActualizada)
            if(!mongoRes) { throw new Error(`-- no se pudo modificar descripcion`) }
            return mongoRes
        }catch(error){
            throw new Error(`-- error no se pudo modificar descripcion`)
        }
    },
    deleteOne: async(id) => {
        try{
            const mongoRes = await fotoRepo.delete(id)
            if(!mongoRes) { throw new Error(" -- no se puedo eliminar por id")}
            const backUp = await FotoJsonService.deleteOne(mongoRes._id.toString())
            return mongoRes
        }catch(error){
            throw new Error(" -- error no se puedo eliminar por id")
        }
    },

}