const express = require("express");
const router = express.Router();

const productsRouter = require("./products.js");
const categoriesRouter = require("./categories.js");
const authRouter = require("./auth.js");
const couponRouter = require("./coupons.js");

router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);
router.use("/auth", authRouter);
router.use("/coupons", couponRouter);


module.exports = router;