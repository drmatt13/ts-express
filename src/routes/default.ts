import express from "express";

// route handlers
import { getHandler } from "../controllers/default";

// middleware
import requestLogger from "../middleware/requestLogger";

// create an express router
const router = express.Router();

router.get("/", requestLogger, getHandler);
//                ^ middleware   ^ controller

export default router;
