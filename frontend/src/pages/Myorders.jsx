import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const userEmail = "user@example.com";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/my-orders", {
          params: { email: userEmail }
        });

        console.log("API Response:", response.data);
        setOrders(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]); 
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6">My Orders</h2>
      
      {Array.isArray(orders) && orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li 
              key={order.id} 
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-lg font-semibold">Order ID: <span className="text-blue-600">{order.id}</span></p>
              <p className="text-gray-700">Total Price: <span className="font-medium">₹{order.totalPrice}</span></p>
              <p className={`text-sm font-medium mt-2 ${
                order.status === "Pending" ? "text-yellow-500" :
                order.status === "Shipped" ? "text-blue-500" :
                order.status === "Delivered" ? "text-green-500" :
                "text-red-500"
              }`}>
                Status: {order.status}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-6">No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;