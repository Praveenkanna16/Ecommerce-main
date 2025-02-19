const express = require("express");
const router = express.Router();
const Cart = require("../Model/cart");  // Capital "M" in "Models"

// Endpoint to fetch user's cart items
router.get("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const cartItems = await Cart.find({ userEmail: email }).populate("productId");
        
        if (!cartItems) {
            return res.status(404).json({ message: "Cart is empty or user not found" });
        }
        
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

module.exports = router;