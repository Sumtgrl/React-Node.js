const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
    code: { type: String, required: true },
    discountPercent: {type: Number, required: true}
}, { timestamps: true })

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
