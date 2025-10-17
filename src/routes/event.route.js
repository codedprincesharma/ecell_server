import express from "express";
import upload from "../middleware/upload.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  createEventController,
  getAllEventsController,
  getSingleEventController
} from "../controllers/event.controller.js";

const router = express.Router();

// Create event (protected)
router.post("/createEvent", upload.single("banner"), authMiddleware, createEventController);

router.get("/", authMiddleware, getAllEventsController);

router.get("/:id", authMiddleware, getSingleEventController);

export default router;
