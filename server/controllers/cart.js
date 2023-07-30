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
      cartType: "addToCart",
      user_id,
      product_id,
      quantity: 1,
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
exports.editCartType = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    const newData = {
      title: cart.title,
      category: cart.category,
      price: cart.price,
      description: cart.description,
      image: cart.image,
      spec: cart.spec,
      cartType: req.body.cartType,
      user_id: cart.user_id,
      product_id: cart.product_id,
      quantity: cart.quantity,
    };
    const db = await Cart.findByIdAndUpdate(req.params.id, newData, {
      new: true,
    });
    res.send({ status: "moved", data: db });
  } catch (error) {
    console.log(error);
  }
};
