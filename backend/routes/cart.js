import express from "express";
import { protectRoute } from "../middleware/protectRoute.js"
import { getCart, addToCart } from "../controller/cartController.js"

const router = express.Router();

router.get("/getCart", protectRoute, getCart);
router.post("/addToCart", protectRoute, addToCart);

export default router;