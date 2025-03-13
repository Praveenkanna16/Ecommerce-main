const express = require("express");
const router = express.Router();
const Order = require("../Model/order.js"); 
const User = require("../Model/userModel.js");

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


router.get("/user-orders/:email", async (req, res) => {
  try {
    const { email } = req.params;


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const orders = await Order.find({ userId: user._id });

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;