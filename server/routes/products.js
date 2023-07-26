const express = require("express");
const router = express.Router();
const {
  deleteProducts,
  updateProducts,
  getAllProducts,
  createProducts,
} = require("../controllers/products");


router.post("/", createProducts);
router.get("/", getAllProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;
