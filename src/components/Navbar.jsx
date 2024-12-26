import React from 'react';
import elon from '/elon2.jpeg'
import StickyCounter from './Counter';

const Navbar = ({ totalSpent, elonMoney }) => {
  return (
    <>
      <header className="bg-white">
        <div className="flex flex-col items-center py-8">
          <div className="flex flex-col items-center mb-4">
            <img
              src= {elon}
              alt="Elon Musk"
              className="h-32 w-32 rounded-full mb-6 object-cover"
            />
            <h2 className="text-3xl font-bold text-gray-800">Spend Elon's Money</h2>
          </div>
        </div>
      </header>
      <StickyCounter totalSpent={totalSpent} elonMoney={elonMoney} />
    </>
  );
};

export default Navbar;

