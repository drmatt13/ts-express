import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

// get directory paths
const imagesPath = path.join(__dirname, "..", "images");

// get images from src/images
const images = fs.readdirSync(`${imagesPath}/src`);

export const getHandler = (req: Request, res: Response) => {
  // create thumbnails directory if it doesn't exist
  if (!fs.existsSync(`${imagesPath}/thumbnails`)) {
    fs.mkdirSync(`${imagesPath}/thumbnails`);
  }
  for (let i = 0; i < images.length; i++) {
    sharp(path.join(`${imagesPath}/src`, images[i]))
      .jpeg({ quality: 80 })
      .resize({ width: 250, height: 250, fit: "cover", position: "center" })
      .toFile(
        path.join(`${imagesPath}/thumbnails`, `${images[i].split(".")[0]}.jpg`)
      );
    console.log(`Image ${i + 1} of ${images.length} processed`);
  }
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
