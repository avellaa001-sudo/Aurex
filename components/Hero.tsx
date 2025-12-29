
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-stone-50 z-0 hidden lg:block rounded-bl-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
            <span>✨ The New Gold Standard for Evening Rest</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-brand tracking-tight">
            The Ultimate Reward for <br />
            <span className="text-accent">Tired Knees.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed font-medium">
            Designed for those who spend their days in motion. Experience soothing warmth and gentle relaxation from the comfort of your own couch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <button className="bg-brand text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-stone-800 transition-all btn-shadow hover:-translate-y-1 active:translate-y-0">
              Get Yours Today
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">Thousands of happy relaxed knees</span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-100 flex flex-wrap gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              <span className="text-[10px] font-black uppercase tracking-widest">Free Express Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              <span className="text-[10px] font-black uppercase tracking-widest">30-Day Happiness Guarantee</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-full h-full bg-indigo-50 rounded-full blur-[100px] z-0 opacity-50"></div>
          <div className="relative group perspective-1000">
            <div className="bg-stone-200 p-2 rounded-[50px] shadow-2xl transition-transform duration-700 group-hover:rotate-1">
               <img 
                 src="https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&w=1200&q=80" 
                 alt="Resting at home with Vera" 
                 className="rounded-[40px] w-full object-cover aspect-[4/5] lg:aspect-square brightness-95"
               />
               <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-12 p-8 glass-card rounded-3xl shadow-xl max-w-[280px]">
                 <p className="text-accent font-black text-2xl mb-1">Soothing</p>
                 <p className="text-stone-600 text-sm font-medium leading-relaxed">Adjustable warmth for those chilly evenings after work.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
