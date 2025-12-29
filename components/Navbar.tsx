
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-2xl font-extrabold text-brand tracking-tighter">VERA<span className="text-accent">RELIEF</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-tight text-slate-600">
          <a href="#technology" className="hover:text-accent transition-colors">Technology</a>
          <a href="#benefits" className="hover:text-accent transition-colors">Benefits</a>
          <a href="#products" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-accent transition-colors">Support</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            Get Relief Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
