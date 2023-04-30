import { Request, Response } from "express";

// data
import linksArray from "../data/links";

// GET "/"
// send ejs template as a response from the views/pages/homepage/index.ejs file
// pass in the linksArray data to the ejs template
export const getHandler = (req: Request, res: Response) => {
  res.render("pages/homepage/index", { linksArray });
  // res.json({ message: "Hello World!", path: path.join(__dirname) });
};
