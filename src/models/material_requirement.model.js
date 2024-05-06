import mongoose from "mongoose";
import { baseSchema } from "./base.model"; 

const materialRequirementSchema = new mongoose.Schema({
  item_id: {type: mongoose.Types.ObjectId, required: true },
  store_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
});

const materialRequirementModel = mongoose.model("MaterialRequirement", materialRequirementSchema);

export default materialRequirementModel;
