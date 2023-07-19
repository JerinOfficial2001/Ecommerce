const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Object, required: true },
    spec: { type: String, required: true },
    array: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
exports.Product = Product;

const AuthSchema = new mongoose.Schema(
  {
    userType: { type: String, required: true },
    uname: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const EcommerceAuth = mongoose.model("EcommerceAuth", AuthSchema);
exports.EcommerceAuth = EcommerceAuth;
