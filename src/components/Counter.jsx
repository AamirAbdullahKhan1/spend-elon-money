'use client'

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const StickyCounter = ({ totalSpent, elonMoney }) => {
  const count = useMotionValue(elonMoney);
  const rounded = useTransform(count, latest => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, elonMoney - totalSpent, { duration: 1 });
    return controls.stop;
  }, [totalSpent, elonMoney, count]);

  return (
    <div className="sticky top-0 w-full bg-emerald-400 py-6 shadow-lg z-50">
      <motion.div className="text-4xl md:text-5xl font-bold text-white text-center">
        $<motion.span>{rounded}</motion.span>
      </motion.div>
    </div>
  );
};

export default StickyCounter;

