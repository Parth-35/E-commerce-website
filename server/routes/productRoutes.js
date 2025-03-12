import express from 'express';
import axios from 'axios';

const router = express.Router();

// Fetch products directly from Fake Store API
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data); // Send the data received from the API
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

export default router;
