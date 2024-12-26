import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const ELON_MUSK_MONEY = 217000000000; // $217 billion

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    setTotalSpent(totalSpent + product.price);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCart(updatedCart);
    setTotalSpent(totalSpent - product.price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar totalSpent={totalSpent} elonMoney={ELON_MUSK_MONEY} />
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-8 text-black"
        >
          Spend Elon Musk's Money
        </motion.h1>
        <div className="max-w-7xl mx-auto">
          <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        </div>
        <Cart cart={cart} totalSpent={totalSpent} elonMoney={ELON_MUSK_MONEY} />
      </main>
    </div>
  );
};

export default App;

