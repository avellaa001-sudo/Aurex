
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-2xl font-extrabold tracking-tighter">VERA<span className="text-accent">RELIEF</span></span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-8 font-medium">
            Join 150,000+ people who have regained their mobility and joy through advanced wellness technology. 
            Relief is just a button away.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-full hover:bg-accent transition-colors cursor-pointer"></div>
            <div className="w-10 h-10 bg-white/5 rounded-full hover:bg-accent transition-colors cursor-pointer"></div>
            <div className="w-10 h-10 bg-white/5 rounded-full hover:bg-accent transition-colors cursor-pointer"></div>
          </div>
        </div>
        
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-slate-500 mb-8">Navigation</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Scientific Trials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-white transition-colors">User Manuals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-slate-500 mb-8">Help Center</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">90-Day Trials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-widest gap-6">
        <p>© 2024 Vera Relief Technology. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
