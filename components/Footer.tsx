
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 text-stone-900 pt-24 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-2xl font-extrabold tracking-tighter uppercase italic">Aurex</span>
          </div>
          <p className="text-stone-500 max-w-sm leading-relaxed mb-8 font-medium">
            At Aurex, we believe your evening rest should be sacred. Join thousands who have transformed their daily recovery into a luxury ritual.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-stone-200 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer flex items-center justify-center">
              <span className="w-4 h-4 bg-stone-400 rounded-sm"></span>
            </div>
            <div className="w-10 h-10 bg-stone-200 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer flex items-center justify-center">
              <span className="w-4 h-4 bg-stone-400 rounded-sm"></span>
            </div>
            <div className="w-10 h-10 bg-stone-200 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer flex items-center justify-center">
              <span className="w-4 h-4 bg-stone-400 rounded-sm"></span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-stone-400 mb-8">Navigation</h4>
          <ul className="space-y-4 text-stone-600 text-sm font-medium">
            <li><a href="#features" className="hover:text-indigo-600 transition-colors">Aurex Features</a></li>
            <li><a href="#benefits" className="hover:text-indigo-600 transition-colors">Our Philosophy</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Gift Guide</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Evening Rituals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-stone-400 mb-8">Customer Support</h4>
          <ul className="space-y-4 text-stone-600 text-sm font-medium">
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Track My Aurex</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">30-Day Guarantee</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Shipping Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-200 pt-10 flex flex-col md:flex-row justify-between items-center text-stone-400 text-[10px] font-black uppercase tracking-widest gap-6">
        <p>© 2024 Aurex Lifestyle Comfort. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
