const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

router.post("/newproduct", async (req, res) => {
    try {
        const product = req.body;

        const newProduct = new Product(product);

        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/getAllProducts", async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            res.status(404).json({ error: "Ürün Bulunmamaktadır." });
        }
        else {
            res.status(200).json(products);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/getProduct/:productId", async (req, res) => {
    try {
        const prodId = req.params.productId;
        const product = await Product.findById(prodId);
        if (!product) {
            res.status(404).json({ error: "Ürün Bulunamadı" });
        }
        else {
            res.status(200).json(product);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.put("/updateProduct/:productId", async (req, res) => {
    try {
        const prodId = req.params.productId;
        const updateProd = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(prodId, updateProd, { new: true });
        if(!updatedProduct){
            res.status(404).json({ error: "Ürün Bulunamadı" });
        }
        else{
            res.status(200).json(updatedProduct);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.delete("/deleteProduct/:productId", async (req, res) => {
    try {
        const prodId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(prodId);
        
        if (!deletedProduct) {
            res.status(404).json({ error: "Ürün Bulunamadı" });
        }
        else {
            res.status(200).json(deletedProduct);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;