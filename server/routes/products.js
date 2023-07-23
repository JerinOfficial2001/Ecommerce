const express = require("express");
const { image } = require("../utils/cloudinary");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const { Product } = require("../models/product");


// router.post("/add", async (req, res) => {
//   const productData = req.body;
//   try {
//     const product = new Product(productData);
//     const savedProduct = await product.save();
//     res.status(200).send(savedProduct);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

router.post("/", async (req, res) => {
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
        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
});


module.exports = router;

module.exports = router;
