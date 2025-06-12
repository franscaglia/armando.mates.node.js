import fs from "node:fs/promises";
import { config } from "../config/config.js";

const { DB_PATH } = config;

export const JsonHandler = {
	async read() {
		try {
			const data = await fs.readFile(DB_PATH, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			console.log(" -- error leyendo en reposiotrio", error);
		}
	},
	async write(data) {
		try {
			const stringData = JSON.stringify(data, null, 2);
			await fs.writeFile(DB_PATH, stringData, { encoding: "utf8" });
		} catch (error) {
			console.log(" -- error escribiendo en repositorio", error);
		}
	},
};
