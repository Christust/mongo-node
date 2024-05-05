import mongoose from "mongoose";

const units = ["units", "liters", "meters"];

const productSchema = new mongoose.Schema({
  title: { type: String, index: true, required: true, unique: true },
  description: { type: String, required: true },
  barcode: String,
  unit: { type: String, enum: units, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
