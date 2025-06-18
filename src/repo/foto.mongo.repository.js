import { FotoModel } from "../model/foto.mongo.js";

export class FotoMongoRepository {
    async getAll () {
        return await FotoModel.find()
    }

    async getById(id) {
        return await FotoModel.findById(id);
    }

    async create(FotoData) {
        const foto = new FotoModel(FotoData);
        return await foto.save();
    }

    async update(id, updateData) {
        return await FotoModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

    async delete(id) {
        return await FotoModel.findByIdAndDelete(id).exec();
    }
}