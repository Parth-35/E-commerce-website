import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display on this page
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const ProductCard = ({ product }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleReadMore = () => {
      setShowFullDescription(!showFullDescription);
    };

    return (
      <div key={product._id} className="product-card">
        {/* Make the image clickable to open the product detail page */}
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.title} className="product-image" />
        </Link>
        <h3>{product.title}</h3>
        <p>
          {showFullDescription
            ? product.description
            : `${product.description.substring(0, 100)}...`}
          <span
            className="read-more"
            onClick={handleReadMore}
          >
            {showFullDescription ? ' Show Less' : ' Read More'}
          </span>
        </p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    );
  };

  return (
    <div>
      <div className="product-container">
        {currentItems.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="pagination" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <button onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
