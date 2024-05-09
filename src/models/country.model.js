import mongoose from "mongoose";
import { baseSchema } from "./base.model.js"; 

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  ...baseSchema
});

const countryModel = mongoose.model("Country", countrySchema);

export default countryModel;
