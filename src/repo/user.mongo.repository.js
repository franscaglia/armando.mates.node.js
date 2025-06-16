import { UserModel } from "../model/user.mongo.js";

export class UserMongoRepository {
    async getall () {
        return await UserModel.find()
    }
}