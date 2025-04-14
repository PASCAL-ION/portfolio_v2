import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import path from 'path';
import fs from 'fs/promises';

const sourceDir = 'public/assets';

const getImageFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return await getImageFiles(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      return fullPath;
    }
    return null;
  }));
  return files.flat().filter(Boolean);
};

const compressImagesInPlace = async () => {
  const images = await getImageFiles(sourceDir);

  for (const imagePath of images) {
    const buffer = await imagemin([imagePath], {
      plugins: [
        mozjpeg({ quality: 70 }),
        pngquant({ quality: [0.6, 0.8] })
      ]
    });

    if (buffer[0]) {
      await fs.writeFile(imagePath, buffer[0].data);
      console.log(`Image compressée : ${imagePath}`);
    }
  }
};

compressImagesInPlace();