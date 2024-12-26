import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className='mb-4 font-medium'>© 2024 Aamir Khan. All Rights Reserverd</p>
        <p className="text-gray-600">
          Inspired by{' '}
          <a 
            href="https://neal.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            neal.fun
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
