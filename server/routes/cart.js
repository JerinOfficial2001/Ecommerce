const express = require("express");
const {
  addToCart,
  getCart,
  removeCart,
  editCartType,
} = require("../controllers/cart");
const router = express.Router();

router.post("/addtocart", addToCart);
router.get("/cart/:user_id", getCart);
router.delete("/cart/:id", removeCart);
router.put("/cart/:id", editCartType);

module.exports = router;
