import express from "express";
import { registerController, loginController, getProfileController, logoutController } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router()


router.post('/register', registerController)
router.post('/login', loginController)
router.post('/logout', loginController)
router.get('/profile', authMiddleware, getProfileController)










export default router