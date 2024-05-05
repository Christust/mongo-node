import { config } from "dotenv";
import jwt from 'jsonwebtoken'

config();

const JWT_SECRET = process.env.JWT_SECRET || "default-secret"

export const generateToken = (user) => {
    console.log(JWT_SECRET);
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1hr' })
}

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ error: 'No authorizado' })
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error: ', err);
            return res.status(403).json({ msg: 'Error en la authenticación' })
        }
        // console.log(decoded.id);
        next()
    })
}