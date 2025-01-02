'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Footer from './components/Footer';

const ELON_MUSK_MONEY = 217000000000; // $217 billion

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    if (totalSpent + product.price > ELON_MUSK_MONEY) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar totalSpent={totalSpent} elonMoney={ELON_MUSK_MONEY} />
      <main className="container mx-auto px-4 py-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <ProductList 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            cart={cart} 
            remainingMoney={ELON_MUSK_MONEY - totalSpent}
          />
        </div>
        <Cart cart={cart} totalSpent={totalSpent} elonMoney={ELON_MUSK_MONEY} />
      </main>
      <Footer />
      {showToast && (
        <Toast message="You don't have enough money!" />
      )}
    </div>
  );
};

export default App;

