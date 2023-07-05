const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {

  uploadImage = async images => {

    for (const image of images.file) {
        let filename = image.originalname.replace(/[_\s]+/g, '-');

        const tmpPath = path.resolve(image.path);
        const name = path.parse(filename).name
        const originalImagePath = path.join(__dirname, '../storage/images/gallery/original', `${name}.webp`);


        await sharp(tmpPath)
        .webp({losless:true})
        .toFile(originalImagePath);

    };
  }

  resizeImages = async (entity, entityId, images) => {

  }

  deleteImages = async filename => {

  }

  getThumbnails = async (limit, offset) => {

  }
}