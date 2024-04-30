import e from "express";
import userRouter from "./user.router.js";

const router = e.Router();

router.use("/users", userRouter);

export default router;
