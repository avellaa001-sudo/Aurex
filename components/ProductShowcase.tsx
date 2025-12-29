
import React from 'react';

const bundles = [
  {
    id: 1,
    name: "Aurex Solo",
    quantity: "1 Massage Unit",
    price: "$89",
    oldPrice: "$179",
    savings: "50% Off Today",
    isPopular: false,
    description: "Ideal for your daily relaxation ritual on a single knee."
  },
  {
    id: 2,
    name: "Aurex Duo Pack",
    quantity: "2 Massage Units",
    price: "$159",
    oldPrice: "$358",
    savings: "Best Seller - Save $199",
    isPopular: true,
    description: "Double the comfort. Treat both knees simultaneously for the ultimate experience."
  },
  {
    id: 3,
    name: "Aurex Gift Set",
    quantity: "4 Massage Units",
    price: "$299",
    oldPrice: "$716",
    savings: "Family Value - Save $417",
    isPopular: false,
    description: "The perfect gift for the people you care about most."
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <div id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand mb-4 tracking-tight">Experience Aurex Comfort</h2>
          <p className="text-stone-500 font-medium">Free Shipping & 30-Day Satisfaction Guarantee included.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className={`relative p-10 rounded-[48px] border-2 transition-all duration-500 flex flex-col ${
              bundle.isPopular ? 'border-indigo-600 bg-white scale-105 shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] z-10' : 'border-stone-200 bg-white/60 hover:bg-white hover:border-stone-300'
            }`}>
              {bundle.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg">
                  Most Requested Ritual
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-brand mb-1 tracking-tight">{bundle.name}</h3>
                <p className="text-stone-400 font-bold uppercase text-[10px] tracking-widest">{bundle.quantity}</p>
              </div>
              
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-black text-brand tracking-tighter">{bundle.price}</span>
                <span className="ml-2 text-stone-400 line-through font-bold">{bundle.oldPrice}</span>
              </div>
              
              <div className="mb-8">
                 <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">{bundle.savings}</span>
              </div>
              
              <p className="text-stone-500 mb-10 text-sm font-medium leading-relaxed">{bundle.description}</p>
              
              <div className="mt-auto">
                <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  bundle.isPopular ? 'bg-indigo-600 text-white shadow-xl hover:bg-indigo-700' : 'bg-brand text-white hover:bg-stone-800'
                }`}>
                  Add to Cart
                </button>
                <div className="mt-8 flex items-center justify-center gap-4 grayscale opacity-30">
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
