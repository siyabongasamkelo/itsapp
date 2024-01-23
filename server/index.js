const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/user", authRouter);

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri, {})
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
