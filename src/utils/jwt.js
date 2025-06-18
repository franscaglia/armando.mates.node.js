import jwt from "jsonwebtoken"
import { config } from "../config/config.js"

const { JWT_KEY, JWT_CONFIG } = config

export const userToken = (userData) => {
	return jwt.sign(userData, JWT_KEY, JWT_CONFIG)
};
