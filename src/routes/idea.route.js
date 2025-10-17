import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createIdea } from './../controller/idea.controller.js';


const router = express.Router()

router.post('/submitIdea', authMiddleware, createIdea)


export default router
