import { JsonHandler } from '../utils/json.handler.js'

export const FotoJsonRepository = {
    getAll: async () => {
        const fotos = await JsonHandler.read()
        if(!fotos) { return null}
        return fotos
    },
    searchById: async (id) => {
        const fotos = await JsonHandler.read();
		if (!fotos) return null;
		const foto = fotos.find((foto) => foto.id === id);
		if (!foto) return null;
		return foto;
    },
    createOne: async (foto) => {
        const fotos = await FotoRepository.getAll()
        fotos.push(foto)
        try{
            await JsonHandler.write(fotos)
            return true
        }catch(error){
            return null
        }
    },
    modifyOne: async (data) => {
        
    },
    deleteById: async (id) => {
        
    }
}