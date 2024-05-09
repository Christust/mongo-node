import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";

const maintenanceReportSchema = new mongoose.Schema({
  description: { type: String, required: true },
  user_id: { type: mongoose.Types.ObjectId, required: true },
  maintenance_type_id: { type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
});

const maintenanceReportModel = mongoose.model("MaintenanceReport", maintenanceReportSchema);

export default maintenanceReportModel;
