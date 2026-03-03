import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={addToCart} />
      </main>
      <Footer />
    </>
  );
}

export default App;
