import express from "express";
import { protectRoute } from "../middleware/protectRoute.js"
import { createOrder, getOrders } from "../controller/orderController.js"

const router = express.Router();

router.post("/createOrder", protectRoute, createOrder);
router.get("/getOrders", protectRoute, getOrders);

export default router;