import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/CartPage";
import ProductDetail from "./components/ProductDetail"; // Import ProductDetail component

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        // Update quantity of existing product
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add the new product with specified quantity
        return [...prevItems, { ...product, quantity }];
      }
    });
  
    // Update the cart count
    setCartCount((prevCount) => prevCount + quantity); // Increment by the quantity of added product
  };
  
  
  

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const itemToRemove = prevCartItems.find((item) => item._id === productId);
  
      if (itemToRemove) {
        setCartCount((prevCount) => prevCount - itemToRemove.quantity);
      }
  
      return prevCartItems.filter((item) => item._id !== productId);
    });
  };
  

  return (
    <div>
      <Router>
      <Navbar onSearch={handleSearch} cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/"
          element={<ProductList products={filteredProducts} addToCart={addToCart} />}
        />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
