// create getData, postToDB functions in src\controllers\api.ts:
import { Request, Response } from "express";

// GET "/api"
// send json data
export const getData = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello world!",
    success: true,
  });
};

// POST "/api"
// update database
export const postToDB = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Database updated successfully!",
    success: true,
  });
};
