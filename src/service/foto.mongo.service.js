import { FotoJsonService } from './foto.json.service.js'
import { FotoMongoRepository } from '../repo/foto.mongo.repository.js'
import { FotoSupaRepository } from '../repo/foto.supabase.repository.js'

const fotoRepo = new FotoMongoRepository()

export const FotoMongoService = {
    getAll: async() => {
        try{    
            const fotosSupa = FotoSupaRepository.getAll()
            const fotosMongo = await fotoRepo.getAll()
            if(!fotosMongo){ throw new Error(" -- no se encontraron fotos")}
            return fotosMongo
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
            const mongoFoto = await fotoRepo.create(foto) 
            if(!mongoFoto) { throw new Error(`-- no se pudo crear la foto en mongo`) }
            const backUp = await FotoJsonService.createOne(mongoFoto._id, foto)
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