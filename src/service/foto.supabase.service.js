import { FotoSupaRepository } from "../repo/foto.supabase.repository.js"

export const FotoSupaService = {
    getAll: async () => {

    },
    searchById: async () => {

    },
    createOne: async (file) => {
        const fotoRes = await FotoSupaRepository.createOne(file)
        return fotoRes
    },
    modiifyOne: async () => {

    },
    deleteOne: async () => {

    }
}