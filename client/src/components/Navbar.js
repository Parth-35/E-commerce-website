import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Using FontAwesome for cart icon
import '../styles/Navbar.css'; // Adjust the path according to the location of the CSS file


const Navbar = ({ cartCount, onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Home Link - Aligns to the left */}
        <Link to="/" className="home-link">
          Home
        </Link>

        {/* Search Bar - Centered */}
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleSearch}
        />

        {/* Cart Link - Aligns to the right */}
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" /> Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
