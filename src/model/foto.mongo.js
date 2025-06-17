import mongoose from "mongoose";

const fotoSchema = new mongoose.Schema(
    {
        idSupabase: { type: String, required: true, maxlength: 100 },
        titulo: { type: String, required: true, maxlength: 100, unique: true },
        descripcion: { type: String, required: true, maxlength: 100, unique: true },
        fecha: { type: String, required: true, maxlength: 100, unique: true },
    },
    { collection: "foto" },
);

export const FotoModel = mongoose.model("Foto", fotoSchema);