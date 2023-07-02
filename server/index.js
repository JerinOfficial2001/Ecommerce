const express = require("express");
const app = express();
app.use(express.json());
const dotenv=require("dotenv")
dotenv.config()

const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log("Server Started");
});
