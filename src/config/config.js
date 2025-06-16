import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT ?? 3001,
    HOST: process.env.HOST ?? "127.0.0.1",
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    MONGO_URI: process.env.MONGO_URI,
    DB_PATH_FOTO: process.env.DB_PATH_FOTO,
    DB_PATH_USER: process.env.DB_PATH_USER
}

