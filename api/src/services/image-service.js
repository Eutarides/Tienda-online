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
        console.log(filename);
    }

    resizeImages = async (entity, entityId, images) => {

    }

    deleteImages = async filename => {

    }

    getThumbnails = async (limit, offset) => {

    }
}}