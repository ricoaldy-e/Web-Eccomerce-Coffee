// src/lib/jwt.js
import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET
if (!SECRET) throw new Error("JWT_SECRET is not set in .env")

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null
  }
}