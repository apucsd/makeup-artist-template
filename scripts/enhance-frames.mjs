import sharp from "sharp";
import fs from "fs";
import path from "path";

const framesDir = path.resolve("public/hero-frames");
const files = fs.readdirSync(framesDir).filter((file) => file.endsWith(".jpg"));

console.log(`Found ${files.length} frames in ${framesDir}. Starting batch enhancement...`);

async function processFrames() {
  let count = 0;
  for (const file of files) {
    const filePath = path.join(framesDir, file);
    const tempPath = path.join(framesDir, `temp_${file}`);

    try {
      await sharp(filePath)
        // High-quality Lanczos3 sharpening and contrast enhancement
        .modulate({
          brightness: 1.03,
          saturation: 1.1,
        })
        .sharpen({
          sigma: 1.2,
          m1: 1.0,
          m2: 2.0,
        })
        .jpeg({
          quality: 95,
          chromaSubsampling: "4:4:4",
          mozjpeg: true,
        })
        .toFile(tempPath);

      // Overwrite original with enhanced version
      fs.renameSync(tempPath, filePath);
      count++;
      if (count % 20 === 0 || count === files.length) {
        console.log(`Enhanced ${count}/${files.length} frames...`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
  console.log(`✅ Successfully enhanced all ${count} image frames to 100% high quality!`);
}

processFrames();
