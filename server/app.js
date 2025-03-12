import express from 'express';
import productRoutes from 'routes/productRoutes.js';  // Adjust the path if necessary

const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Mount the product routes
app.use('/products', productRoutes);  // The /products route is now handled by productRoutes

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
