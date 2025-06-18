import { FotoSupaRepository } from "../repo/foto.supabase.repository.js"

export const FotoSupaService = {
    getAll: async () => {
        try{
            const fotosSupa = await FotoSupaRepository.getAll()
            if(!fotosSupa) { throw new Error(" -- no se encontraron fotos en supabase")}
            return fotosSupa
        }catch(error){
            throw new Error(" -- error buscando en supabase")
        }
    },
    searchById: async (idSupabase) => {
        try{
            const fotoSupa = await FotoSupaRepository.searchById(idSupabase)
            if(!fotoSupa) { throw new Error(" -- no se encontro la foto en supabase") }
            return fotoSupa
        }catch(error){
            throw new Error(" -- error buscando foto en supabase")
        }
    },
    createOne: async (file) => {
        try{
            const fotoRes = await FotoSupaRepository.createOne(file)
            if(!fotoRes) { throw new Error(`-- no se pudo crear la foto en supabase`) }
            return fotoRes
        }catch(error){
            throw new Error(`-- no se pudo crear la foto en supabase`)
        }
    },
    deleteOne: async (idSupabase) => {
        try{
            const fotoEliminada = await FotoSupaRepository.deleteOne(idSupabase)
            if(!fotoEliminada) { throw new Error(`-- no se pudo eliminar la foto en supabase`) }
            return fotoEliminada
        }catch(error){
            throw new Error(`-- no se pudo eliminar la foto en supabase`)
        }
    }
}