import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";

const itemRequirementSchema = new mongoose.Schema({
  item_id: { type: mongoose.Types.ObjectId, required: true },
  material_requirement_id: { type: mongoose.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  ...baseSchema
});

const itemRequirementModel = mongoose.model("ItemRequirement", itemRequirementSchema);

export default itemRequirementModel;
