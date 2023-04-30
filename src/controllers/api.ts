import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

// get directory paths
const imagesToConvertPath = path.join(__dirname, "..", "public", "images");
const imageOutputPath = path.join(__dirname, "..", "public", "thumbnails");

// get images from src/images
const images = fs.readdirSync(imagesToConvertPath);

// GET "/api"
// generate thumbnails
// return { message, success }
export const getHandler = (req: Request, res: Response) => {
  if (!fs.existsSync(imageOutputPath)) {
    fs.mkdirSync(imageOutputPath);
  }
  for (let i = 0; i < images.length; i++) {
    sharp(path.join(imagesToConvertPath, images[i]))
      .jpeg({ quality: 80 })
      .resize({ width: 250, height: 250, fit: "cover", position: "center" })
      .toFile(path.join(imageOutputPath, `${images[i].split(".")[0]}.jpg`));
    console.log(`Image ${i + 1} of ${images.length} processed`);
  }
  res.status(200).json({
    message: "Thumbnails successfully generated!",
    success: true,
  });
};

// POST "/api"
// update dummy database
// return { message, success }
export const postHandler = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Dummy database updated successfully!",
    success: true,
  });
};
