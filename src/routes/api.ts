import express from "express";

// controllers
import { getHandler, postHandler } from "../controllers/api";

// create an express router
const router = express.Router();

router.get("/", getHandler).post("/", postHandler);

export default router;
