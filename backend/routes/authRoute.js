import express, { response } from "express";
import { login, signup, logout, getMe } from "../controller/userController.js"

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/profile", getMe);


export default router;
