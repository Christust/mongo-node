import mongoose from "mongoose";
import { baseSchema } from "./base.model.js"; 

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
}, { timestamps: true });

const stateModel = mongoose.model("State", stateSchema);

export default stateModel;
