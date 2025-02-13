import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCardSeller = ({ image, name, price, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/productform/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/product/delete-product/${id}`
      );
      if (response.status === 200) {
        alert('Product deleted successfully!');
        window.location.reload();
      }
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [image]);

  const currentImage = image[currentIndex];

  return (
    <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex justify-between flex-col">
      <div className="w-full">
        <img
          src={currentImage}
          alt={name}
          className="w-full h-56 object-cover rounded-lg mb-2"
        />
        <h1 className="text-lg font-bold">{name}</h1>
        <h3 className="text-sm opacity-50 line-clamp-2">{description}</h3>
      </div>
      <div className="w-full">
        <h1 className="text-lg font-bold my-2">${price}</h1>
        <button
          className="w-full text-white px-4 py-2 rounded-md bg-neutral-900"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
        <button
          className="w-full text-white px-4 py-2 rounded-md bg-neutral-900"
          onClick={() => handleEdit()}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

// Exporting as named export
export default ProductCardSeller;