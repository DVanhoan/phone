import express from "express";
import { protectRoute } from "../middleware/protectRoute.js"
import { login, signup, logout, getMe, updateUser, changePassword } from "../controller/userController.js"

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", protectRoute, logout);
router.post("/profile", protectRoute, getMe);
router.put("/update", protectRoute, updateUser)
router.post("/changePassword", protectRoute, changePassword)


export default router;
