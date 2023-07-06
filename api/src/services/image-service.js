const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image
const moment = require('moment');

module.exports = class ImageService {

  uploadImage = async images => {

    const result = []

    for (const image of images.file) {
      let filename = image.originalname.replace(/[_\s]+/g, '-');
  
      const tmpPath = path.resolve(image.path);
      let name = path.parse(filename).name;

      name = await fs.access(path.join(__dirname, '../storage/images/gallery/original', `${name}.webp`)).then( async => {
        const date = moment().format('YYYYMMDDHHmmss');
        const newFilename = `${name}_${date}.webp`;
        return newFilename;
      }).catch(async => {
        return `${name}.webp`
      })

      const originalImagePath = path.join(__dirname, '../storage/images/gallery/original', name);
      const thumbnailPath = path.join(__dirname, '../storage/images/gallery/thumbnail', name);

      await sharp(tmpPath)
      .webp({ lossless: true })
      .toFile(originalImagePath);

      await sharp(tmpPath)
      .webp({ lossless: true })
      .resize({
        width: 150,
        height: 150,
      })
      .toFile(thumbnailPath);

      await fs.unlink(tmpPath);
      result.push(name)
    }

    return result
  };

  resizeImages = async (entity, entityId, images) => {
    


  }

  deleteImages = async filename => {

  }

  getThumbnails = async (limit, offset) => {

  }
};