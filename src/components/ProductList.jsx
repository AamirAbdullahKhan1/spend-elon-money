import React from 'react';
import { motion } from 'framer-motion';
import Product from './Product';

const products = [
  { id: 1, name: "Candy Bar", price: 1, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Book", price: 15, image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Smartphone", price: 999, image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Laptop", price: 1999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Used Car", price: 5000, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Diamond Ring", price: 10000, image: "https://via.placeholder.com/150" },
  { id: 7, name: "Luxury Watch", price: 25000, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Tesla Model S", price: 94990, image: "https://via.placeholder.com/150" },
  { id: 9, name: "Yacht", price: 1000000, image: "https://via.placeholder.com/150" },
  { id: 10, name: "Private Jet", price: 25000000, image: "https://via.placeholder.com/150" },
  { id: 11, name: "Skyscraper", price: 850000000, image: "https://via.placeholder.com/150" },
  { id: 12, name: "Starship Ticket", price: 55000000, image: "https://via.placeholder.com/150" },
];

const ProductList = ({ addToCart, removeFromCart, cart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Product
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            quantity={cart.find(item => item.id === product.id)?.quantity || 0}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;

