import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		nombre: { type: String, required: true, maxlength: 100 },
		email: { type: String, required: true, maxlength: 100},
        password: { type: String, required: true, maxlength: 100 },
	},
	{ collection: "user" },
);

export const UserModel = mongoose.model("User", userSchema);