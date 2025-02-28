import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "Iphone 16 pro",
      price: "1499",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNR463yGYQq0srv2lwl1iHzm7vbAtlPXFCQ&s",
      description: "The Best Smartphone.",
    },
    {
      id: 2,
      name: 'Sony XM5',
      price: '270.00',
      image: 'https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
      description: 'This best Headphone.',
    },
    {
      id: 3,
      name: 'GT 650',
      price: '4000.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXM9cmjgqdKi9RFpP3MUtXVd4EnSqzeQzng&s',
      description: 'This best 650cc bike.',
    },
  ];

  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      quantity: quantity,
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center space-x-2">
        </div>

        <div className="flex flex-row flex-wrap justify-center mt-6">
          {products.map((product) => (
            <div key={product.id} className="max-w-xs mx-4 my-4 p-4 border rounded-lg shadow-lg flex flex-col items-center">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <img
                className="w-48 h-48 object-cover rounded-lg mt-4"
                src={product.image}
                alt={product.name}
              />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-2">Price: ${product.price}</p>

              <div className="mt-4 flex items-center space-x-4">
                <label htmlFor="quantity" className="text-lg">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                  className="border border-gray-300 rounded-md p-2 text-lg w-16"
                />
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;