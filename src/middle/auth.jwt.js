import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const tokenAuth = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) return res.status(401).json({ error: "No token" });

	try {
		req.user = jwt.verify(token, config.JWT_KEY);
		next();
	} catch {
		res.status(403).json({ error: "Token inválido" });
	}
};