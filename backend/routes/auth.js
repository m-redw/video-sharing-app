import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signup);

// GOOGLE AUTH
router.post("/google", signup);

export default router;
