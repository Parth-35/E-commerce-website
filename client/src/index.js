import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './CartContext';

// Create the root element for the React app using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with CartProvider for managing cart state
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
