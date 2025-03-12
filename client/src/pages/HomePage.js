// src/pages/HomePage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Featured Products</h2>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
