import userModel from "../models/user.model.js";
import { comparePassword } from "../services/hasher.service.js";
import { generateToken } from "../services/jwt.service.js";

const authController = {};

authController.login = async (req, res) => {
  const { email, password } = req?.body;
  if (!(email && password))
    return res.status(404).json({ error: "No se recibieron las credenciales" });
  try {
    const user = await userModel.findOne({ email, is_active: true });
    if (!user) return res.status(404).json({ error: "Credenciales incorrectas" });
    const validPassword = await comparePassword(
      password.toString(),
      user.password
    );
    if (validPassword) {
      const token = generateToken(user);
      const userObject = { ...user.toObject() };
      delete userObject.password;
      delete userObject.__v;
      res.json({ token, user: userObject });
    } else res.status(404).json({ error: "Credenciales invalidas" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default authController;
