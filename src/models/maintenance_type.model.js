import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";

const maintenanceTypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  ...baseSchema
});

const maintenanceTypeModel = mongoose.model("MaintenanceType", maintenanceTypeSchema);

export default maintenanceTypeModel;
