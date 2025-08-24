import { Router } from "express";
import {getDashboardMetrics} from "../controllers/dashboardControllers";

const router = Router();
router.get("/", getDashboardMetrics); // http://localhost:8000/dashboard 

export default router;