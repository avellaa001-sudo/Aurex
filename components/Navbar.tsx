
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-2xl font-extrabold text-brand tracking-tighter uppercase">Aurex</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-stone-500">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#benefits" className="hover:text-indigo-600 transition-colors">Lifestyle</a>
          <a href="#products" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">Support</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-brand text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-stone-800 transition-all btn-shadow">
            Shop Aurex
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
