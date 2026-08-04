import ffmpeg from "ffmpeg-static";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const videoPath = path.resolve("public/hero-video.mp4");
const outputDir = path.resolve("public/user-hero-frames");

if (!fs.existsSync(videoPath)) {
  console.error("Video file public/hero-video.mp4 not found!");
  process.exit(1);
}

// Ensure clean output directory
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

console.log(`Extracting frames with 100% MINIMAX watermark removal...`);

// Crop bottom 150px to cleanly erase the MINIMAX logo from all frames
// video native res: 2944x1248 -> cropped res: 2944x1098
const command = `"${ffmpeg}" -ss 0.5 -i "${videoPath}" -vf "fps=24,crop=in_w:in_h-150:0:0,scale=2944:-1" -q:v 2 "${outputDir}/frame-%03d.jpg" -y`;

try {
  execSync(command, { stdio: "inherit" });
  const extractedFiles = fs.readdirSync(outputDir).filter(f => f.endsWith(".jpg"));
  console.log(`✅ Successfully extracted ${extractedFiles.length} 100% watermark-free 3K frames to ${outputDir}!`);
} catch (err) {
  console.error("Error extracting frames:", err);
}
