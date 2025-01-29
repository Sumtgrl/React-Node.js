const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

router.post("/newcategory", async (req, res) => {
    try {
        const { name, img } = req.body;

        const newCategory = new Category({ name, img });

        await newCategory.save();

        res.status(201).json(newCategory);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/getAllCategories", async (req, res) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/getCategory/:categoryId", async (req, res) => {
    try {
        const catId = req.params.categoryId;
        const category = await Category.findById(catId);
        if (!category) {
            res.status(404).json({ error: "Kategori Bulunamadı" });
        }
        else {
            res.status(200).json(category);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.put("/updateCategory/:categoryId", async (req, res) => {
    try {
        const catId = req.params.categoryId;
        const updatecat = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(catId, updatecat, { new: true });
        if(!updatedCategory){
            res.status(404).json({ error: "Kategori Bulunamadı" });
        }
        else{
            res.status(200).json(updatedCategory);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.delete("/deleteCategory/:categoryId", async (req, res) => {
    try {
        const catId = req.params.categoryId;
        const deletedCategory = await Category.findByIdAndDelete(catId);
        
        if (!deletedCategory) {
            res.status(404).json({ error: "Kategori Bulunamadı" });
        }
        else {
            res.status(200).json(deletedCategory);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;