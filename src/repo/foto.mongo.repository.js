import { UserModel } from "../model/foto.mongo.js";

export class FotoMongoRepository {
    async getAll () {
        return await UserModel.find()
    }

    async getById(id) {
        return await UserModel.findById(id);
    }

    async create(FotoData) {
        const foto = new UserModel(FotoData);
        return await foto.save();
    }

    async update(id, updateData) {
        return await UserModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

    async delete(id) {
        const result = await UserModel.findByIdAndDelete(id).exec();
        return result != null;
    }
}