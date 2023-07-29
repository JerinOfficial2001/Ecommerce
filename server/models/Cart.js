const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Object, required: true },
  spec: { type: String, required: true },
  user_id: { type: String, required: true },
  product_id: { type: String, required: true },
});
const Cart = mongoose.model("Cart", cartSchema);
exports.Cart = Cart;
