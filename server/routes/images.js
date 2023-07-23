const express = require("express");
const {
  getImage,
  createImage,
  deleteImage,
  updateImage,
} = require("../controllers/images");
const router = express.Router();

router.post("/image", createImage);
router.get("/image", getImage);
router.delete("/image/:id", deleteImage);
router.put("/image/:id", updateImage);

module.exports = router;
