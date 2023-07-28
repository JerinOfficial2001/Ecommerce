const express = require("express");
const router = express.Router();
const {
  deleteProducts,
  updateProducts,
  getAllProducts,
  createProducts,
  getProductsByArray,
  getProductsById,
} = require("../controllers/products");

router.post("/", createProducts);
router.get("/", getAllProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

router.post("/array", getProductsByArray);
router.post("/:id", getProductsById);

module.exports = router;
