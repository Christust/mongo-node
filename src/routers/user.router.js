import e from "express";
import userController from "../controllers/user.controller.js";

const router = e.Router();

router.get("/", userController.index);

router.post("/", userController.create);

router.get("/:id", userController.show);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

export default router;
