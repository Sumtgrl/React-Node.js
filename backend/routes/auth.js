const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const User = require("../models/User.js");

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userCheck = await User.findOne({ email });
        console.log(userCheck);
        if (userCheck) {
            return res.status(400).json("Bu e-mail zaten kullanılıyor.");
        }

        const hashPwd = await bcrypt.hash(password, 10)
        const newUser = await new User({
            username, email, password: hashPwd, avatar: "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2526512481.jpg"
        })

        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json("Bu E-mail'e ait kullanıcı bulunamadı lütfen kayıt olunuz.");
        }

        const isPwdValid = await bcrypt.compare(password, user.password);

        if(!isPwdValid){
            return res.status(401).json("E-mail yada Şifre hatalı.");
        }

        res.status(200).json({
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
            avatar: user.avatar
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
})

module.exports = router;