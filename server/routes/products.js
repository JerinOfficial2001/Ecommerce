const express = require("express");
const router = express.Router();
const {
  deleteProducts,
  updateProducts,
  getAllProducts,
  createProducts,
  getProductsByArray,
  getProductsById,
  postProductsByArray,
} = require("../controllers/products");

router.post("/", createProducts);
router.get("/", getAllProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

router.get("/array", getProductsByArray);
router.get("/id", getProductsById);

module.exports = router;
