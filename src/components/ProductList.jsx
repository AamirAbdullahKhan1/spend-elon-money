import React from 'react';
import { motion } from 'framer-motion';
import Product from './Product';

const products = [
  { id: 1, name: "Candy Bar", price: 1, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Book", price: 15, image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Smartphone", price: 999, image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Laptop", price: 1999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Sports Car", price: 5000, image: "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Diamond Ring", price: 10000, image: "https://plus.unsplash.com/premium_photo-1678749105251-b15e8fd164bf?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "Luxury Watch", price: 25000, image: "https://images.unsplash.com/photo-1636289026470-cb40ece1ebc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Tesla Model S", price: 94990, image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, name: "Yacht", price: 1000000, image: "https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, name: "Private Jet", price: 25000000, image: "https://plus.unsplash.com/premium_photo-1682142182464-3be6161b3a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 11, name: "Skyscraper", price: 850000000, image: "https://images.unsplash.com/photo-1605472074902-fd448c230dd7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, name: "Starship Ticket", price: 55000000, image: "https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/c7XhvNVoTYmKU4xdJsjb_Starship%20SpaceX%20Photo.jpg" },
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

