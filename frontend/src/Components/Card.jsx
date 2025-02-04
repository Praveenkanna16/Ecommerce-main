import React from 'react';

const Card = ({ name, price, image, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-lg text-gray-700">{price}</p>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;