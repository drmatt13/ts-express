import express from "express";

// controllers
import { getController } from "../controllers/default";

const router = express.Router();

router.get("/", getController);

export default router;
