// create a default controller for the default route
import { Request, Response } from "express";

// GET "/"
// send static html file
// src/html/homepage/index.html
export const getController = (req: Request, res: Response) => {
  res.sendFile("src/html/homepage/index.html", { root: "./" });
};
