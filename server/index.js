const express = require("express");
const mongoose = require("mongoose");
const products = require("./routes/products");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server Started");
});
app.use("/api/products", products);
const MONGO_DB = process.env.MONGO_URL;
mongoose.connect(MONGO_DB).then(() => {
  console.log("db connected");
});
