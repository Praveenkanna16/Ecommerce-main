const { Router } = require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../../multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "../Config/.env" });

const userRouter = Router();
const secret = process.env.SECRET || "defaultSecretKey"; // Ensure secret key is used

// Create user
userRouter.post("/create-user", upload.single("file"), async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// User login
userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ email: user.email }, secret, { expiresIn: "1h" });
        res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
        res.cookie('token', token, { 
            httpOnly: true, 
            sameSite: 'strict', 
            domain: '.localhost', 
            expires: new Date(Date.now() + 3600000) 
        });


        res.status(200).json({ message: "User logged in" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Get user profile
userRouter.get("/profile/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            profilePhoto: user.profilePhoto || "",
            addresses: user.addresses || [],
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Add address
userRouter.post("/add-address/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const { country, city, address1, address2, zipCode, addressType } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.addresses.push({ country, city, address1, address2, zipCode, addressType });
        await user.save();

        res.status(200).json({ message: "Address added successfully", addresses: user.addresses });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = userRouter;
