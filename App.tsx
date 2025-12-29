
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="benefits" className="bg-white">
          <Benefits />
        </section>
        <section id="products">
          <ProductShowcase />
        </section>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
