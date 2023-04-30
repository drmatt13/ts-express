import express from "express";

// route handlers
import { getHandler, postHandler } from "../controllers/api";

// create an express router
const router = express.Router();

//  you can chain multiple methods to a single route by using router.route()
router.get("/", getHandler).post("/", postHandler);
// .put("/", putHandler).delete("/", deleteHandler).patch("/", patchHandler);

export default router;
