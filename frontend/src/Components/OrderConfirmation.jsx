import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import for navigation

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Navigation hook

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
    if (!selectedAddress) {
      alert("Please select a delivery address before placing an order.");
      return;
    }

    setLoading(true);
    try {
      const userEmail = "user@example.com"; // Replace with actual user email from auth

      const orderData = {
        products: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        totalPrice,
        address: selectedAddress,
        userEmail,
      };

      const response = await axios.post("/api/orders", orderData);
      
      if (response.status === 201) {
        alert("Order placed successfully!");
        navigate("/my-orders"); // Redirect to My Orders page
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>

      <div className="order-items">
        <h3>Ordered Products</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <p>{item.name} - {item.quantity} x ₹{item.price}</p>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
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

      <button onClick={placeOrder} className="place-order-btn" disabled={loading}>
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default OrderConfirmation;