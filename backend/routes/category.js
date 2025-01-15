import express from "express";
import { create, getAll, update, deleteCategory } from "../controller/categoryController.js"

const router = express.Router();

router.post("/create", create);
router.get("/getAll", getAll);
router.put("/update", update);
router.delete("/deleteCategory", deleteCategory);

export default router;