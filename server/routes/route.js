import express from "express";
import { signUp } from "../controller/user.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("login");

export default router;
