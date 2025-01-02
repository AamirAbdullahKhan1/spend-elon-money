import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cart, totalSpent, elonMoney }) => {
  const remainingMoney = elonMoney - totalSpent;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 mt-8"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800 uppercase">Your Cart</h2>
      <div className="grid grid-cols-[1fr,80px,120px] gap-4 items-center mb-2 font-bold text-gray-600">
        <span>Item</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Total</span>
      </div>
      <AnimatePresence>
        {cart.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-[1fr,80px,120px] gap-4 items-center mb-2"
          >
            <span className="text-gray-700 truncate">{item.name}</span>
            <span className="text-gray-600 text-center">x{item.quantity}</span>
            <span className="font-semibold text-green-600 text-right">${(item.price * item.quantity).toLocaleString()}</span>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-gray-800 uppercase">Total Spent:</span>
          <span className="font-bold text-green-600">${totalSpent.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800 uppercase">Remaining:</span>
          <span className="font-bold text-blue-600">${remainingMoney.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
