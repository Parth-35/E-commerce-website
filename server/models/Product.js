import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String, // Single image URL (optional for backward compatibility)
  images: [String] // Array of multiple image URLs
});

const Product = mongoose.model('Product', productSchema);

export default Product;
