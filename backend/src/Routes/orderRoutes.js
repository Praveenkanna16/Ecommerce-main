const express = require("express");
const router = express.Router();
const Order = require("../models/order.js"); 


router.post("/place-order", async (req, res) => {
  try {
    const { userId, address, products, totalAmount } = req.body;


    if (!userId || !address || !products || products.length === 0 || !totalAmount) {
      return res.status(400).json({ message: "All fields are required, including products" });
    }


    const newOrder = new Order({ userId, address, products, totalAmount });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;