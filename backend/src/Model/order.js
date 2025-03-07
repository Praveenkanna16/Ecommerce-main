const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: Object, required: true }, // Selected address details
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Processing", "Shipped", "Delivered"], default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);