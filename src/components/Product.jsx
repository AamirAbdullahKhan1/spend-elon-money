import React from 'react';
import { motion } from 'framer-motion';

const Product = ({ product, addToCart, removeFromCart, quantity, remainingMoney }) => {
  const isDisabled = product.price > remainingMoney;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
    >
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
      <p className="text-green-600 font-bold mb-4">${product.price.toLocaleString()}</p>
      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromCart(product)}
          className="bg-red-500 text-white px-3 py-1 rounded-md disabled:opacity-50"
          disabled={quantity === 0}
        >
          -
        </motion.button>
        <span className="font-semibold">{quantity}</span>
        <motion.button
          whileHover={{ scale: isDisabled ? 1 : 1.1 }}
          whileTap={{ scale: isDisabled ? 1 : 0.9 }}
          onClick={() => addToCart(product)}
          className={`text-white px-3 py-1 rounded-md ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
          disabled={isDisabled}
        >
          +
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Product;

