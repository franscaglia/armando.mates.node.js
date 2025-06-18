import { config } from '../config/config.js'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY)

export const FotoSupaRepository = {
    getAll: async () => {

    },
    searchById: async () => {

    },
    createOne: async (file) => {
        const nombreArchivo = `${Date.now()}_${file.originalname}`
        const { data, error } = await supabase.storage
            .from('fran')
            .upload(nombreArchivo, file.buffer, {contentType: file.mimetype})

        if (error) {
        console.error('Error al subir a Supabase:', error)
        throw error
        }
        return data.path
    },
    modiifyOne: async () => {

    },
    deleteOne: async () => {

    }
}