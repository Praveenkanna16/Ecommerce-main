import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("/api/cart"); 
        setCartItems(response.data);
        setTotalPrice(response.data.reduce((acc, item) => acc + item.price * item.quantity, 0));
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    const fetchAddress = async () => {
      try {
        const response = await axios.get("/api/user/address");
        setSelectedAddress(response.data);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    fetchCartItems();
    fetchAddress();
  }, []);

  // Handle order placement
  const placeOrder = async () => {
    try {
      const orderData = {
        products: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        totalPrice,
        address: selectedAddress,
      };

      await axios.post("/api/orders", orderData);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>

      <div className="order-items">
        <h3>Ordered Products</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <p>{item.name} - {item.quantity} x ₹{item.price}</p>
          </div>
        ))}
      </div>

      <div className="order-address">
        <h3>Delivery Address</h3>
        {selectedAddress ? (
          <p>{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.pincode}</p>
        ) : (
          <p>Loading address...</p>
        )}
      </div>

      <div className="order-total">
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>

      <button onClick={placeOrder} className="place-order-btn">Place Order</button>
    </div>
  );
};

export default OrderConfirmation;