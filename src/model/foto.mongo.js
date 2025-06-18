import mongoose from "mongoose";

const fotoSchema = new mongoose.Schema(
    {
        idSupabase: { type: String, required: true, maxlength: 100 },
        titulo: { type: String, required: true, maxlength: 100},
        descripcion: { type: String, required: true, maxlength: 100}
    },
    { collection: "foto" },
);

export const FotoModel = mongoose.model("Foto", fotoSchema);