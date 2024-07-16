import { Router } from "express";
import { helloWorld } from "../controller/hello.controller.js";

const router = Router();

router.get("/", helloWorld);

export {router}