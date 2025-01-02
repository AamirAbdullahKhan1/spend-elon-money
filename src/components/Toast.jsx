import React from 'react';
import { motion } from 'framer-motion';

const Toast = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg"
    >
      {message}
    </motion.div>
  );
};

export default Toast;

