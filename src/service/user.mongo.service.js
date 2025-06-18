import { UserMongoRepository } from '../repo/user.mongo.repository.js'
import { UserJsonService } from '../service/user.json.service.js'
import { userToken } from '../utils/jwt.js'
import { config } from '../config/config.js'

const userRepo = new UserMongoRepository()

export const UserMongoService = {
    login: async (data) => {
        try{
            const { nombre, password } = data
            const { ADMIN, ADMIN_PASS } = config
            const esValido = (( ADMIN === nombre ) && ( ADMIN_PASS === password ))
            if(!esValido) { return null }
            return userToken({ nombre, rol: "admin" })
        }catch(error){
            throw new Error(" -- error en el login")
        }
    },
    getAll: async () => {
        try{    
            const users = await userRepo.getAll()
            if(!users){ throw new Error(" -- no se encontraron usuarios")}
            return users
        }catch(error){
            throw new Error(" -- error buscando en mongo")
        }
    },
    searchById: async (id) => {
       try{
            const mongoRes = await userRepo.getById(id)
            if(!mongoRes) { throw new Error(`-- no se encontraron usuarios con ese ID`)}
            return mongoRes
       }catch(error){
            throw new Error(" -- error al buscar por id")
       } 
    },
    createOne: async (cuenta) => {
        try{
            const mongoUser = await userRepo.create(cuenta) 
            if(!mongoUser) { throw new Error(`-- no se pudo crear ususario`) }
            const backUp = await UserJsonService.createOne(mongoUser._id, cuenta)
            return mongoUser
        }catch(error){
            throw new Error(`-- error al crear usuario`)
        }
    },
    modifyOne: async (id, dataActualizada) => {
        try{
            const mongoRes = await userRepo.update(id, dataActualizada)
            if(!mongoRes) { throw new Error(`-- no se pudo modificar email`) }
            console.log(mongoRes)
            return mongoRes
        }catch(error){
            throw new Error(`-- error no se pudo modificar email`)
        }
    },
    deleteById: async (id) => {
        try{
            const mongoRes = await userRepo.delete(id)
            if(!mongoRes) { throw new Error(" -- no se puedo eliminar por id")}
            const backUp = await UserJsonService.deleteOne(mongoRes._id.toString())
            return mongoRes
        }catch(error){
            throw new Error(" -- error no se puedo eliminar por id")
        }
    },
}