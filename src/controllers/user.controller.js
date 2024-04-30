import userModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../services/hasher.service.js";

const userController = {};

userController.getAll = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ users: users });
  } catch (error) {
    res.json({ error: error.message });
  }
};

userController.create = async (req, res) => {
  const { email, name, last_name, password } = req?.body;
  const hashedPassword = await hashPassword(password.toString());
  const user = new userModel({
    email,
    name,
    last_name,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save();
    res.json({ user: newUser });
  } catch (error) {
    res.json({ error: error.message });
  }
};

userController.login = async (req, res) => {
  const { email, password } = req?.body;
  try {
    const user = await userModel.findOne({ email });
    const validPassword = await comparePassword(
      password.toString(),
      user.password
    );
    res.json({ token: validPassword });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default userController;
