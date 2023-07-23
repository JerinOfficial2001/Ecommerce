const Images = require("../models/Images");
const cloudinary = require("../utils/cloudinary");

exports.createImage = async (req, res, next) => {
  const { image, name } = req.body;
  try {
    const uploadRes = await cloudinary.uploader.upload(image, {
      upload_preset: "images",
    });

    const newImages = new Images({
      image: uploadRes,
      name,
    });

    const savedImage = await newImages.save();
    res.status(200).json({ status: "ok", data: savedImage });
  } catch (error) {
    next(error);
  }
};

exports.getImage = async (req, res, next) => {
  try {
    const allDatas = await Images.find({});
    res.status(200).json({ status: "ok", data: allDatas });
  } catch (error) {
    next(error);
  }
};
exports.deleteImage = async (req, res) => {
  try {
    const imageData = await Images.findById(req.params.id);
    const imgId = imageData.image.public_id;
    await cloudinary.uploader.destroy(imgId);
    const rmImage = await Images.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "deleted",
    });
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};

exports.updateImage = async (req, res) => {
  try {
    const imageData = await Images.findById(req.params.id);
    const data = {
      name: req.body.name,
    };
    if (req.body.image !== "") {
      const imgId = imageData.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }
    const newImg = await cloudinary.uploader.upload(req.body.image, {
      upload_preset: "images",
    });
    data.image = {
      public_id: newImg.public_id,
      url: newImg.secure_url,
    };
    const udImage = await Images.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({
      status: "Updated",
    });
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};
