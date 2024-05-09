import mongoose from "mongoose";
import { baseSchema } from "./base.model.js";

const itemRequestSchema = new mongoose.Schema({
  item_id: { type: mongoose.Types.ObjectId, required: true },
  material_request_id: { type: mongoose.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  amount_returned: { type: Number, required: false, default: 0 },
  ...baseSchema
});

const itemRequestModel = mongoose.model("ItemRequest", itemRequestSchema);

export default itemRequestModel;
