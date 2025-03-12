// src/pages/ProductPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log('Error fetching product:', error));
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;
