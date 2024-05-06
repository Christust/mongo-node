import mongoose from "mongoose";
import { baseSchema } from "./base.model";
const units = ["units", "liters", "meters"];

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  brand: String,
  barcode: String,
  unit: { type: String, enum: units, required: true },
  consumable: {type: Boolean, required: false, default: false},
  ...baseSchema
});

const itemModel = mongoose.model("Item", itemSchema);

export default itemModel;