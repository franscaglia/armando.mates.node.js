import mongoose from "mongoose";
import { config } from "../config/config.js";

class MongoConnection {
	constructor() {
		this.connection = null;
	}

	async connect() {
		if (this.connection) {
			return this.connection;
		}

		try {
			await mongoose.connect(config.MONGO_URI, {
				dbName: "armandoMates",
			});
			this.connection = mongoose.connection;
			console.log(" -- conexion establecida con Armando Mates");

			return this.connection;
		} catch (e) {
			console.error(" -- no se puedo conectar a Armando Mates");
			throw e;
		}
	}
}

const mongoConnectionInstance = new MongoConnection();
export default mongoConnectionInstance;
