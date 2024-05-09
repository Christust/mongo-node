import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";

const status = ["pending", "in_process", "finished", "canceled"];


const maintenanceRequestSchema = new mongoose.Schema({
  description: { type: String, required: true },
  feedback: String,
  status: { type: String, enum: status, required: true },
  cancel_note: String,
  user_id: { type: mongoose.Types.ObjectId, required: true },
  maintenance_type_id: { type: mongoose.Types.ObjectId, required: true },
  ...baseSchema
}, { timestamps: true });

const maintenanceRequestModel = mongoose.model("MaintenanceRequest", maintenanceRequestSchema);

export default maintenanceRequestModel;
