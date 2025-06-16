import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, maxlength: 100 },
		email: { type: String, required: true, maxlength: 100, unique: true },
        password: { type: String, required: true, maxlength: 100, unique: true },
	},
	{ collection: "user" },
);

export const UserModel = mongoose.model("User", userSchema);