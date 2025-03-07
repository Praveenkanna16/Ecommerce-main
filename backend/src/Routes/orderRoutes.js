const express = require("express");
const router = express.Router();
const Order = require("../Model/order.js");

router.post("/place-order", async (req, res) => {
  try {
    const { userId, address, products, totalAmount } = req.body;

    const newOrder = new Order({ userId, address, products, totalAmount });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;