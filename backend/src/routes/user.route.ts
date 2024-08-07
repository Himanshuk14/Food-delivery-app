import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { jwtCheck } from "../middlewares/auth.middleware";
const router = Router();

router.route("/register").post(jwtCheck, registerUser);

export default router;
