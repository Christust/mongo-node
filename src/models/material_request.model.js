import mongoose from "mongoose";
import { baseSchema } from "./base.model.js"; 

const materialRequestSchema = new mongoose.Schema({
  item_id: {type: mongoose.Types.ObjectId, required: true },
  store_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
});

const materialRequestModel = mongoose.model("MaterialRequest", materialRequestSchema);

export default materialRequestModel;
