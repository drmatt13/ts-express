import express from "express";

// controllers
import { getData, postToDB } from "../controllers/api";

const router = express.Router();

router.get("/", getData);
router.post("/", postToDB);

export default router;
