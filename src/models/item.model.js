import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";
const units = ["units", "liters", "meters"];

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  brand: String,
  barcode: String,
  unit: { type: String, enum: units, required: true },
  consumable: {type: Boolean, required: false, default: false},
  ...baseSchema
}, { timestamps: true });

const itemModel = mongoose.model("Item", itemSchema);

export default itemModel;
