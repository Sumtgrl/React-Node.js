const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const dotenv = require("dotenv")
const app = express();
const port = 5000;
const indexRouter = require("./routes/index.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

//Middlewares
app.use(logger("dev"));
app.use(express.json());

app.use("/api", indexRouter);

app.listen(port, () => {
  connect();
  console.log("Sunucu Çalışıyor");
})