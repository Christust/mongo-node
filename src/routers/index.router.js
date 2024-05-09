import e from "express";
import { authenticateToken } from "../services/jwt.service.js";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import cityRouter from "./city.router.js";
import countryRouter from "./country.router.js";
import itemRequestRouter from "./item_request.router.js";
import itemRequirementRouter from "./item_requirement.router.js";
import itemRouter from "./item.router.js";
import maintenanceReportRouter from "./maintenance_report.router.js";
import maintenanceRequestRouter from "./maintenance_request.router.js";
import maintenanceTypeRouter from "./maintenance_type.router.js";
import materialRequestRouter from "./material_request.router.js";
import materialRequirementRouter from "./material_requirement.router.js";
import stateRouter from "./state.router.js";
import stockRouter from "./stock.router.js";
import storeRouter from "./store.router.js";

const router = e.Router();

router.use("/auth", authRouter);
router.use("/users", authenticateToken, userRouter);
router.use("/cities", authenticateToken, cityRouter);
router.use("/countries", authenticateToken, countryRouter);
router.use("/item_requests", authenticateToken, itemRequestRouter);
router.use("/item_requirements", authenticateToken, itemRequirementRouter);
router.use("/items", authenticateToken, itemRouter);
router.use("/maintenance_reports", authenticateToken, maintenanceReportRouter);
router.use(
  "/maintenance_requirements",
  authenticateToken,
  maintenanceRequestRouter
);
router.use("/maintenance_types", authenticateToken, maintenanceTypeRouter);
router.use("/material_requests", authenticateToken, materialRequestRouter);
router.use(
  "/material_requirements",
  authenticateToken,
  materialRequirementRouter
);
router.use("/states", authenticateToken, stateRouter);
router.use("/stocks", authenticateToken, stockRouter);
router.use("/stores", authenticateToken, storeRouter);

export default router;
