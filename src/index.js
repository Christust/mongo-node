import e from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import router from "./routers/index.router.js";

config();

const PORT = process.env.PORT || 3000;

const app = e();

app.use(e.json());

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB });

app.use("/", router);

app.listen(PORT, () => {
  console.log("Escuchando el puerto ", PORT);
});
