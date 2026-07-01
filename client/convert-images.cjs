const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dmDir = path.join(__dirname, 'public/DM');

async function convertDMImages() {
  const files = fs.readdirSync(dmDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dmDir, `${baseName}.webp`);
      
      if (!fs.existsSync(webpPath)) {
        try {
          await sharp(path.join(dmDir, file)).webp().toFile(webpPath);
          console.log(`Converted ${file} to ${baseName}.webp`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      } else {
        console.log(`${baseName}.webp already exists, skipping.`);
      }
    }
  }
}

convertDMImages();
