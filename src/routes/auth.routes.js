import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();

// POST  /api/auth/register
authRouter.post("/register",authController.register)


// GET  /api/auth/getMe
authRouter.get("/getMe",authController.getMe)

export default authRouter;