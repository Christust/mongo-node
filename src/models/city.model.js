import mongoose from "mongoose";
import { baseSchema } from "./base.model.js"; 

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  state_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
});

const cityModel = mongoose.model("City", citySchema);

export default cityModel;
