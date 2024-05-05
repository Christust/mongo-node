import e from "express";
import { authenticateToken } from "../services/jwt.service.js";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js"
const router = e.Router();

router.use("/users", authenticateToken, userRouter);
router.use("/auth", authRouter);

export default router;
