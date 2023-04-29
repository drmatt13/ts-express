import fs from "fs";
import sharp from "sharp";

const images = fs.readdirSync("./src/images/src");

const generate = async () => {
  for (let i=0; i<images.length; i++) {
    sharp(`./src/images/src/${images[i]}`)
      .jpeg({ quality: 80 })
      .resize({ width: 250, height: 250, fit: "cover", position: "center" })
      .toFile(`./src/images/thumbnails/${images[i].split(".")[0]}.jpg`);
    console.log(`Image ${i+1} of ${images.length} processed`);
  }
}

generate();