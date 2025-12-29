
import React from 'react';

const bundles = [
  {
    id: 1,
    name: "Single Relief",
    quantity: "1 Massage Unit",
    price: "$99",
    oldPrice: "$199",
    savings: "50% Off",
    isPopular: false,
    description: "Perfect for targeting one specific problematic knee."
  },
  {
    id: 2,
    name: "Full Recovery Pack",
    quantity: "2 Massage Units",
    price: "$179",
    oldPrice: "$398",
    savings: "Best Value - Save $219",
    isPopular: true,
    description: "Treat both knees simultaneously for a complete rejuvenation."
  },
  {
    id: 3,
    name: "Family Bundle",
    quantity: "4 Massage Units",
    price: "$329",
    oldPrice: "$796",
    savings: "Ultimate Pack - Save $467",
    isPopular: false,
    description: "Share the gift of pain-free movement with your loved ones."
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand mb-4">Reclaim Your Mobility Today</h2>
          <p className="text-slate-500 font-medium">Free Express Shipping & 90-Day Satisfaction Guarantee.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className={`relative p-8 rounded-[40px] border-2 transition-all duration-500 flex flex-col ${
              bundle.isPopular ? 'border-accent bg-white scale-105 shadow-2xl z-10' : 'border-slate-200 bg-white/50 hover:bg-white hover:border-slate-300'
            }`}>
              {bundle.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                  Most Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-brand mb-1">{bundle.name}</h3>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{bundle.quantity}</p>
              </div>
              
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-black text-brand tracking-tighter">{bundle.price}</span>
                <span className="ml-2 text-slate-400 line-through font-bold">{bundle.oldPrice}</span>
              </div>
              
              <div className="mb-8">
                 <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">{bundle.savings}</span>
              </div>
              
              <p className="text-slate-600 mb-10 text-sm font-medium leading-relaxed">{bundle.description}</p>
              
              <div className="mt-auto">
                <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  bundle.isPopular ? 'bg-accent text-white shadow-xl shadow-blue-500/30 hover:bg-blue-700' : 'bg-brand text-white hover:bg-slate-800'
                }`}>
                  Add to Cart
                </button>
                <div className="mt-6 flex items-center justify-center gap-4 grayscale opacity-40">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="paypal" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="mc" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
