import { register } from "../controller/auth.controller.js";
import { Router } from "express";

const router = Router();

router.post("/register", register);

export { router };