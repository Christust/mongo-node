import e from "express";
import authController from "../controllers/auth.controller.js";

const router = e.Router();

router.post("/", authController.login);

export default router;
