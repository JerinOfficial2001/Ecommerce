const express = require("express");
const { addToCart, getCart, removeCart } = require("../controllers/cart");
const router = express.Router();

router.post("/addtocart", addToCart);
router.get("/cart/:user_id", getCart);
router.delete("/cart/:id", removeCart);

// router.get("/", getAllProducts);
// router.put("/:id", updateProducts);
// router.delete("/:id", deleteProducts);

// router.get("/:array", getProductsByArray);
// router.get("/array/:id", getProductsById);

module.exports = router;
