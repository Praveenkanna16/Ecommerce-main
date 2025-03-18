const Order = require("../Model/order");

exports.cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (order.status === "canceled") {
            return res.status(400).json({ message: "Order is already canceled" });
        }

        order.status = "canceled";
        await order.save();

        res.json({ message: "Order canceled successfully", order });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};