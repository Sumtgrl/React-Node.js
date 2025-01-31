const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

router.post("/newCoupon", async (req, res) => {
    try {
        const {code} = req.body
        const existingCoup = await Coupon.findOne({code});

        if(existingCoup){
            return res.status(400).json("Birden fazla aynı koda sahip kupon oluşturulamaz.");
        }
        
        const newCoupon = new Coupon(req.body);

        await newCoupon.save();

        res.status(201).json(newCoupon);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/getAllCoupons", async (req, res) => {
    try {
        const coupons = await Coupon.find();

        res.status(200).json(coupons);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/getCoupon/:couponId", async (req, res) => {
    try {
        const coupId = req.params.couponId;
        const coupon = await Coupon.findById(coupId);
        if (!coupon) {
            res.status(404).json({ error: "Kupon Bulunamadı" });
        }
        else {
            res.status(200).json(coupon);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.put("/updateCoupon/:couponId", async (req, res) => {
    try {
        const coupId = req.params.couponId;
        const updatecoup = req.body;
        const updatedCoupon = await Coupon.findByIdAndUpdate(coupId, updatecoup, { new: true });
        if(!updatedCoupon){
            res.status(404).json({ error: "Kupon Bulunamadı" });
        }
        else{
            res.status(200).json(updatedCoupon);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.delete("/deleteCoupon/:couponId", async (req, res) => {
    try {
        const coupId = req.params.couponId;
        const deletedCoupon = await Coupon.findByIdAndDelete(coupId);
        
        if (!deletedCoupon) {
            res.status(404).json({ error: "Kupon Bulunamadı" });
        }
        else {
            res.status(200).json(deletedCoupon);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});
module.exports = router;