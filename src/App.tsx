import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
