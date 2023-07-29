const { Cart } = require("../models/Cart");
const { Product } = require("../models/product");

exports.addToCart = async (req, res) => {
  const { user_id, product_id } = req.body;
  try {
    const product = await Product.findOne({ _id: product_id });
    const cart = await Cart.create({
      title: product.title,
      category: product.category,
      price: product.price,
      description: product.description,
      image: product.image,
      spec: product.spec,
      user_id,
      product_id,
    });
    res.send({ status: "added", data: cart });
  } catch (error) {
    console.log(error);
  }
};
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user_id: req.params.user_id });
    res.json({ status: "ok", data: cart });
  } catch (error) {
    console.log(error);
  }
};
exports.removeCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ status: "deleted" });
  } catch (error) {
    console.log(error);
  }
};
