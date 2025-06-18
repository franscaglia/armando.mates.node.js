import { UserModel } from "../model/user.mongo.js";

export class UserMongoRepository {
    async getAll () {
        return await UserModel.find()
    }

    async getById(id) {
        return await UserModel.findById(id);
    }

    async create(UserData) {
        const user = new UserModel(UserData);
        return await user.save();
    }

    async update(id, updateData) {
        return await UserModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

    async delete(id) {
        return await UserModel.findByIdAndDelete(id).exec();
    }
}