import { Request, Response, NextFunction } from "express";

import colors from "colors";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    colors.cyan.bold("THIS IS MIDDLEWARE"),
    colors.red.bold("->"),
    colors.green.bold(
      `${req.method} ${req.path} ${req.ip} ${req.get("User-Agent")}`
    )
  );
  next();
};

export default requestLogger;
