import mongoose from "mongoose";
import { baseSchema } from "./base.model"; 

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country_id: {type: mongoose.Types.ObjectId, required: true },
  state_id: {type: mongoose.Types.ObjectId, required: true },
  city_id: {type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
});

const branchModel = mongoose.model("Branch", branchSchema);

export default branchModel;
