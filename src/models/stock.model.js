import mongoose from "mongoose";
import { baseSchema } from "./base.model.js"; 

const stockSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  item_id: {type: mongoose.Types.ObjectId, required: true },
  store_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
}, { timestamps: true });

const stockModel = mongoose.model("Stock", stockSchema);

export default stockModel;
