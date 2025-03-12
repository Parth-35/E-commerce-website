import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products`);
        const foundProduct = response.data.find((item) => item.id.toString() === id);
        setProduct(foundProduct);
        setLargeImage(foundProduct?.image);  // Use the single image as the default large image
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  // If the product is not found, return a message
  if (!product) return <p>Product not found</p>;

  const handleImageClick = (image) => {
    setLargeImage(image);  // Update large image on click
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        {/* Left Column for Small Images */}
        <div className="small-images">
          {/* You only have one image in this API, so we're using it */}
          <img
            src={product.image}
            alt="small product"
            className="small-image"
            onClick={() => handleImageClick(product.image)}  // Update the large image
          />
        </div>

        {/* Right Column for Large Image */}
        <div className="large-image-container">
          <img
            src={largeImage}
            alt="large product"
            className="large-image"
          />
        </div>

        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>

          {/* Quantity control and Add to Cart */}
          <div className="quantity-container">
            <button className="quantity-btn">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn">+</button>
          </div>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
