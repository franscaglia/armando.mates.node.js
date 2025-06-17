import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT ?? 8080,
    HOST: process.env.HOST ?? "127.0.0.1",
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    MONGO_URI: process.env.MONGO_URI ?? "mongodb://fran:olivia1506@ac-pgljbdj-shard-00-00.svaw7hg.mongodb.net:27017,ac-pgljbdj-shard-00-01.svaw7hg.mongodb.net:27017,ac-pgljbdj-shard-00-02.svaw7hg.mongodb.net:27017/armandoMates?ssl=true&replicaSet=atlas-pgljbdj-shard-0&authSource=admin&retryWrites=true&w=majority",
    DB_PATH_FOTO: process.env.DB_PATH_FOTO ?? "./src/db/fotos.db.json",
    DB_PATH_USER: process.env.DB_PATH_USER ?? "./src/db/users.db.json"
}

