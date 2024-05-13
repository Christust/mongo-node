import userModel from "../models/user.model.js";
import { hashPassword } from "../services/hasher.service.js";
import { config } from "dotenv";
import mongoose from "mongoose";

config()
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB })

const superadmin = await userModel.findOne({ email: process.env.SUPER_ADMIN_EMAIL })

if (!superadmin) {
    const hashedPassword = await hashPassword(process.env.SUPER_ADMIN_PASSWORD.toString());

    const user = new userModel({
        email: process.env.SUPER_ADMIN_EMAIL,
        name: process.env.SUPER_ADMIN_NAME,
        last_name: process.env.SUPER_ADMIN_LAST_NAME,
        user_type: 'superadmin',
        password: hashedPassword,
    });

    await user.save();
    console.log('Creado');
}
console.log('Ya existe');