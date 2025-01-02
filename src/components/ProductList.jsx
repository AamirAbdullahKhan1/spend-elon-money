import React from 'react';
import { motion } from 'framer-motion';
import Product from './Product';

const products = [
  { id: 1, name: "Book", price: 20, image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=500" },
  { id: 2, name: "Movie Ticket", price: 25, image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=500" },
  { id: 3, name: "Netflix Subscription (1 year)", price: 180, image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500" },
  { id: 4, name: "Fancy Dinner", price: 200, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500" },
  { id: 5, name: "Gaming Console", price: 500, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500" },
  { id: 6, name: "Smartphone", price: 1000, image: "https://www.honor.com/content/dam/honor/ae-en/blog/2024/5-things-a-smartphone-can-do/imgs-01.jpg" },
  { id: 7, name: "Luxury Watch", price: 10000, image: "https://images.unsplash.com/photo-1636289026470-cb40ece1ebc3?w=500" },
  { id: 8, name: "Diamond Ring", price: 50000, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500" },
  { id: 9, name: "Tesla Model S", price: 90000, image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=500" },
  { id: 10, name: "Luxury Yacht", price: 5000000, image: "https://images.unsplash.com/photo-1562281302-809108fd533c?w=500" },
  { id: 11, name: "Private Island", price: 10000000, image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500" },
  { id: 12, name: "Skyscraper", price: 500000000, image: "https://images.unsplash.com/photo-1605472074902-fd448c230dd7?w=500" },
  { id: 13, name: "Private Jet", price: 65000000, image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=500" },
  { id: 14, name: "Football Club", price: 1000000000, image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500" },
  { id: 15, name: "Rocket Launch", price: 100000000, image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=500" },
  { id: 16, name: "Fund Cancer Research (1 year)", price: 500000000, image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500" },
  { id: 17, name: "AI Supercomputer", price: 200000000, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500" },
  { id: 18, name: "Hollywood Movie Production", price: 200000000, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500" },
  { id: 19, name: "Tropical Resort", price: 75000000, image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=500" },
  { id: 20, name: "Satellite Network", price: 5000000000, image: "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=500" },
  { id: 21, name: "Electric Car Factory", price: 5000000000, image: "https://www.byd.com/content/dam/byd-site/eu/press-release/detail-page/2023/1222/1920%20%C3%97%201080%20px.jpg" },
  { id: 22, name: "Fusion Reactor Research", price: 20000000000, image: "https://cdn.mos.cms.futurecdn.net/YD3YF3DUzTWHUpp9TYfkQi-650-80.jpg.webp" },
  { id: 23, name: "Moon Base", price: 35000000000, image: "https://scitechdaily.com/images/Artist-Impression-Moon-Base-scaled.jpg" },
  { id: 24, name: "Mars Colony Project", price: 100000000000, image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500" },
  { id: 25, name: "Undersea Research City", price: 50000000000, image: "https://assets.promptbase.com/DALLE_IMAGES%2FDj9TDcz7H6gr0VnHzeFX2JKBxvE2%2Fresized%2F1704561916551o_800x800.webp?alt=media&token=17db11bf-cb21-421e-bb19-eeb9c1584619" },
  { id: 26, name: "Quantum Computer Network", price: 10000000000, image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500" },
  { id: 27, name: "Space Elevator", price: 150000000000, image: "https://i0.wp.com/mitechnews.com/wp-content/uploads/2024/03/space-elevators.webp?w=1200&ssl=1" },
  { id: 28, name: "Global High-Speed Rail", price: 200000000000, image: "https://www.financialexpress.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-16-at-3.11.53-PM.jpeg?w=1024" },
];

// Sort products by price
const sortedProducts = [...products].sort((a, b) => a.price - b.price);

const ProductList = ({ addToCart, removeFromCart, cart, remainingMoney }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {sortedProducts.map((product, index) => (
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
            remainingMoney={remainingMoney}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;

