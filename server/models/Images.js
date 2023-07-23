const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: { type: Object, required: true },
  name: { type: String, required: true },
});
module.exports = mongoose.model("images", imageSchema);
