import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductGrid onAddToCart={addToCart} />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
