import express from "express";

// controllers
import { getHandler } from "../controllers/default";

// middleware
import requestLogger from "../middleware/requestLogger";

// create an express router
const router = express.Router();

// GET "/" for the default router route "/"
// uses the requestLogger middleware to log the request method and path upon requests
// uses the getHandler controller to generate and send an ejs template as a response
router.get("/", requestLogger, getHandler);

export default router;
