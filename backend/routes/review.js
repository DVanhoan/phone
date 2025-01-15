import express from "express";
import { create, getReviewsByProduct } from "../controller/reviewController.js"

const router = express.Router();

router.post("/create", create);
router.get("/review/:product_id", getReviewsByProduct);

export default router;