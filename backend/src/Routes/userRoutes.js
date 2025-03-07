const express = require("express");
const router = express.Router();
const Order = require("../Model/order.js");

// Route to place an order
router.post("/place-order", async (req, res) => {
  try {
    const { userId, address, products, totalAmount } = req.body;

    if (!userId || !address || !products || products.length === 0 || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Creating a new order instance
    const newOrder = new Order({
      userId,
      address,
      products,
      totalAmount,
      status: "Pending",
    });

    // Save order to the database
    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Route to get order details by user ID
router.get("/orders/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;