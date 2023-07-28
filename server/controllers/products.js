const { Product } = require("../models/product");
const cloudinary = require("../utils/cloudinary");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};

exports.getProductsByArray = async (req, res) => {
  try {
    const products = await Product.find(req.body);

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};
exports.getProductsById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};
exports.createProducts = async (req, res) => {
  const { array, title, price, category, description, image, spec } = req.body;
  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "ecommerce",
      });
      if (uploadRes) {
        const product = new Product({
          title,
          category,
          price,
          description,
          spec,
          image: uploadRes,
          array,
        });
        const savedProduct = await product.save();
        res.status(200).send({ status: "added", data: savedProduct });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const imgID = product.image.public_id;
    await cloudinary.uploader.destroy(imgID);
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
exports.updateProducts = async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    const data = {
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      spec: req.body.spec,
      array: req.body.array,
    };
    if (req.body.image !== "") {
      const imgID = singleProduct.image.public_id;
      await cloudinary.uploader.destroy(imgID);
    }
    const newImg = await cloudinary.uploader.upload(req.body.image, {
      upload_preset: "ecommerce",
    });
    data.image = {
      public_id: newImg.public_id,
      url: newImg.url,
    };
    await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({ status: "updated" });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
