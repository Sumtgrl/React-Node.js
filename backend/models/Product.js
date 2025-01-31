const mongoose = require("mongoose");
const User = require("./User");
const Category = require("./Category");

const reviewSchema = mongoose.Schema({
    text: { type: String, required: true },
    rating: {type: Number, required: true },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
})

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    img: [{ type: String, required: true }],
    reviews: [reviewSchema],
    description: { type: String, required: true },
    color: [{ type: String, required: true }],
    sizes: [{ type: String, required: true }], 
    price: { 
        current: {type: Number,required: true},
        discound: {type: Number},
    },
    stock: {type: Number, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema);

module.exports = Product;