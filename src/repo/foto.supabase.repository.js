import { config } from '../config/config.js'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY)

export const FotoSupaRepository = {
    getAll: async () => {
        const { data, error } = await supabase.storage
            .from('fran')
            .list('', {
                limit: 100,
                offset: 0,
                sortBy: { column: 'created_at', order: 'desc' }
            })
        if (error) {
            console.error(" -- error alobtenerfotos en Supabase:", error)
            throw error
        }
        return data
    },
    searchById: async (idSupabase) => {
        try {
            const { data, error } = await supabase
                .storage
                .from('fran')
                .createSignedUrl(idSupabase, 3600) // obtener objeto por una hora
            if (error) throw error
            return data.signedUrl
        } catch (error) {
            console.error("Error al buscar foto en Supabase:", error)
            throw error
        }
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
    deleteOne: async (idSupabase) => {
        const { data, error } = await supabase
            .storage
            .from('fran')
            .remove([idSupabase])
        if (error) {
            console.error("Error al eliminar foto en Supabase:", error)
            throw error
        }
        return data
    }
}