import userModel from "../models/user.model.js";
import { hashPassword } from "../services/hasher.service.js";

const userController = {};

userController.index = async (req, res) => {
  try {
    const users = await userModel.find({}, { password: 0, __v: 0 });
    res.json({ users: users });
  } catch (error) {
    res.json({ error: error.message });
  }
};

userController.create = async (req, res) => {
  const { email, name, last_name, password, user_type } = req?.body;
  if (!(email && name && last_name && password && user_type))
    return res
      .status(404)
      .json({ error: "No se recibieron los parametros requeridos" });
  const hashedPassword = await hashPassword(password.toString());
  const user = new userModel({
    email,
    name,
    last_name,
    user_type,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save();
    const userObject = { ...newUser.toObject() };
    delete userObject.password;
    delete userObject.__v;
    res.json({ user: userObject });
  } catch (error) {
    res.json({ error: error.message });
  }
};

userController.show = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(404)
      .json({ error: "No se recibieron los parametros requeridos" });
  try {
    const user = await userModel.findById(id, { password: 0, __v: 0 });
    res.json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

userController.update = async (req, res) => {
  const { id } = req?.params;
  const { email, name, last_name, user_type } = req?.body;
  if (!(id && email && name && last_name && user_type))
    return res
      .status(404)
      .json({ error: "No se recibieron los parametros requeridos" });
  try {
    console.log(id);
    console.log({ email, name, last_name, user_type });
    const user = await userModel
      .updateOne({ _id: id }, { email, name, last_name, user_type })
      .exec();
    res.json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

userController.delete = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(404)
      .json({ error: "No se recibieron los parametros requeridos" });
  try {
    const user = await userModel.findById(id);
    user.is_active = false;
    user.save();
    res.json({ msg: "Usuario eliminado" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default userController;
