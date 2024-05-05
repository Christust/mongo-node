import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, index: true, required: true, unique: true },
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
