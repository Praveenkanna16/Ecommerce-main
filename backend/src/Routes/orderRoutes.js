const express = require("express");
const router = express.Router();
const Order = require("../Model/order.js"); 

// ✅ Place Order
router.post("/place-order", async (req, res) => {
  try {
    const { userId, userEmail, address, products, totalAmount } = req.body;

    // ✅ Validate required fields
    if (!userId || !userEmail || !address || !products || products.length === 0 || !totalAmount) {
      return res.status(400).json({ message: "All fields are required, including userEmail and products" });
    }

    // ✅ Create and save new order
    const newOrder = new Order({ userId, userEmail, address, products, totalAmount });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// ✅ Fetch User Orders by Email
router.get("/user-orders/:email", async (req, res) => {
  try {
    const { email } = req.params;

    // ✅ Directly fetch orders using `userEmail`
    const orders = await Order.find({ userEmail: email }).sort({ createdAt: -1 });

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this email" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// ✅ Fetch All Orders (Admin Feature)
router.get("/all-orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// ✅ Update Order Status (Admin Feature)
router.put("/update-status/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["Pending", "Processing", "Shipped", "Delivered"].includes(status)) {
      return res.status(400).json({ message: "Invalid order status" });
    }

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated successfully", order });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// ✅ Delete Order (Admin Feature)
router.delete("/delete-order/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;