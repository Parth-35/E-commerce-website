import React from 'react';
import '../styles/CartPage.css';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container" >
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <div className="cart-product-list">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-product-card">
              <img src={item.image} alt={item.title} className="cart-product-image" />
              <div className="cart-product-info">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p className="cart-product-price">${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item._id)} className="remove-from-cart">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
