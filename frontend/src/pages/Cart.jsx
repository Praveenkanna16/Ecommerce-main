import React, { useState, useEffect } from "react";
import NavBar from "../Components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    };
    fetchCart();

    window.addEventListener("storage", fetchCart);

    return () => {
      window.removeEventListener("storage", fetchCart);
    };
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item removed from cart!");
  };

  const handlePlaceOrder = () => {
    // Logic to place the order
    alert("Order placed successfully!");
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className="flex flex-row flex-wrap justify-center mt-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="max-w-xs mx-4 my-4 p-4 border rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  className="w-48 h-48 object-cover rounded-lg mt-4"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-lg font-bold mt-2">Price: ${item.price}</p>
                <p className="text-lg mt-2">Quantity: {item.quantity}</p>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <button
            onClick={handlePlaceOrder}
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Place Order
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
