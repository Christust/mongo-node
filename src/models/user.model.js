import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";

const user_types = ["superadmin", "admin", "common"];

const userSchema = new mongoose.Schema({
  email: { type: String, index: true, required: true, unique: true },
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  user_type: { type: String, enum: user_types, required: true },
  ...baseSchema
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
