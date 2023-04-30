import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

// const nodeEnv = process.env.NODE_ENV || "development";
// const basePath = path.join(
//   __dirname,
//   nodeEnv === "production" ? "../images" : "../../src/images"
// );

// const srcImagesPath = path.join(basePath, "src");
// const thumbnailsPath = path.join(basePath, "thumbnails");
// const images = fs.readdirSync(srcImagesPath);

export const getHandler = (req: Request, res: Response) => {
  // for (let i = 0; i < images.length; i++) {
  //   sharp(path.join(srcImagesPath, images[i]))
  //     .jpeg({ quality: 80 })
  //     .resize({ width: 250, height: 250, fit: "cover", position: "center" })
  //     .toFile(path.join(thumbnailsPath, `${images[i].split(".")[0]}.jpg`));
  //   console.log(`Image ${i + 1} of ${images.length} processed`);
  // }
  res.status(200).json({
    message: "Thumbnails successfully generated!",
    success: true,
  });
};

// POST "/api"
// update dummy database
export const postHandler = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Dummy database updated successfully!",
    success: true,
  });
};
