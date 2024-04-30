import e from "express";
import userController from "../controllers/user.controller.js";

const router = e.Router();

router.get("/", userController.getAll);

router.post("/", userController.create);

router.get("/:id", (req, res) => {
  res.json({ msg: "show" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "update" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "destroy" });
});

router.post("/login", userController.login);

export default router;
