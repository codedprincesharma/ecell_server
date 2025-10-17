import express from "express";
import {
  createOrderController,
  verifyPaymentController,
} from "../controllers/payment.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-order", authMiddleware, createOrderController);
router.post("/verify-payment", authMiddleware, verifyPaymentController);

export default router;
