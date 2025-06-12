export const config = {
    PORT: process.env.PORT ?? 3001,
    HOST: process.env.HOST ?? "127.0.0.1",
    DB_PATH: "./src//db/fotos.db.json",
    UPLOADS: "./uploads/"
}