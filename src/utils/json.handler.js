import fs from "node:fs/promises";

export const JsonHandler = {
	async read(DB_PATH) {
		try {
			const data = await fs.readFile(DB_PATH, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			console.log(" -- error leyendo en reposiotrio", error);
		}
	},
	async write(DB_PATH, data) {
		try {
			const stringData = JSON.stringify(data, null, 2);
			await fs.writeFile(DB_PATH, stringData, { encoding: "utf8" });
		} catch (error) {
			console.log(" -- error escribiendo en repositorio", error);
		}
	},
};
