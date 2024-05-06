import userModel from "../models/user.model.js";
import { hashPassword } from "../services/hasher.service.js";

const userController = {};

userController.index = async (req, res) => {
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

userController.show = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userModel.findById(id)
    res.json({ user })
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

userController.update = async (req, res) => {
  const { id } = req?.params
  const { email, name, last_name, password } = req?.body;
  try {
    const user = await userModel.findById(id)
    user.updateOne()
    res.json({ user })
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

userController.delete = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userModel.findById(id)
    user.is_active = false
    user.save()
    res.json({ user })
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export default userController;
