import userModel from "../models/user.model.js";
import { comparePassword } from "../services/hasher.service.js";
import { generateToken } from "../services/jwt.service.js";

const authController = {};

authController.login = async (req, res) => {
    const { email, password } = req?.body;
    try {
        const user = await userModel.findOne({ email });
        const validPassword = await comparePassword(
            password.toString(),
            user.password
        );
        if (validPassword) {
            const token = generateToken(user)
            console.log(token);
            res.json({ token, user });
        } else res.status(404).json({ error: 'Credenciales invalidas' })
    } catch (error) {
        res.json({ error: error.message });
    }
};

export default authController;
