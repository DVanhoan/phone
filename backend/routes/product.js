import express from "express";
import { create, update, getAll, deleteProduct } from "../controller/productController.js"

const router = express.Router();

router.post("/create", create);
router.get("/getAll", getAll);
router.put("/update", update);
router.delete("/deleteProduct", deleteProduct);

export default router;