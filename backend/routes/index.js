const express = require("express");
const router = express.Router();

const productsRouter = require("./products.js");
const categoriesRouter = require("./categories.js");
const authRouter = require("./auth.js");

router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);
router.use("/auth", authRouter);

module.exports = router;