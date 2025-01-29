import React from 'react';
import Card from '../Components/Card'; 

const productDetails = [
  {
    name: 'Iphone 16 pro',
    price: '$1499',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNR463yGYQq0srv2lwl1iHzm7vbAtlPXFCQ&s', 
    description: 'The Best Smartphone.',
  },
  {
    name: 'Sony XM5',
    price: '$270.00',
    image: 'https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF', 
    description: 'This best Headphone.',
  },
  {
    name: 'GT 650',
    price: '$4000.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXM9cmjgqdKi9RFpP3MUtXVd4EnSqzeQzng&s', 
    description: 'This best 650cc bike.',
  },
];

const Home = () => {
  return (
    <div className="flex flex-row p-4">
      {productDetails.map((product, index) => (
        <Card
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Home;
