import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, index: true, required: true, unique: true },
  name: String,
  last_name: String,
  password: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
