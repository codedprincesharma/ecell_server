// routes/register.route.js
import express from "express";
import {
  registerStudentController,
  getAllStudentsController,
  getSingleStudentController
} from "../controller/register.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// POST /api/v1/register
router.post("/", authMiddleware, registerStudentController);

// GET all students
router.get("/", authMiddleware, getAllStudentsController);

// GET single student by ID
router.get("/:id", authMiddleware, getSingleStudentController);

export default router;
