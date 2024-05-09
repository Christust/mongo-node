import mongoose from "mongoose";
import { baseSchema } from "./base.model.js"; 

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  branch_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
}, { timestamps: true });

const storeModel = mongoose.model("Store", storeSchema);

export default storeModel;
