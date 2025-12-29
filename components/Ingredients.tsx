
import React from 'react';

const ingredientsList = [
  {
    name: "Affron® Saffron",
    role: "The Mood Anchor",
    desc: "Clinically proven to maintain healthy emotional balance and soothe occasional stress.",
    img: "https://picsum.photos/seed/saffron/400/400"
  },
  {
    name: "KSM-66® Ashwagandha",
    role: "The Stress Buffer",
    desc: "High-concentration extract that helps the body manage cortisol levels naturally.",
    img: "https://picsum.photos/seed/ashwa/400/400"
  },
  {
    name: "L-Theanine",
    role: "The Focus Engine",
    desc: "Promotes relaxation without sedation, often found in high-grade green tea.",
    img: "https://picsum.photos/seed/theanine/400/400"
  }
];

const Ingredients: React.FC = () => {
  return (
    <div id="ingredients" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold serif mb-8">What's Inside Matters.</h2>
            <div className="space-y-10">
              {ingredientsList.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500/30">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-1">{item.name}</h3>
                    <p className="text-stone-400 font-medium text-sm uppercase tracking-widest mb-2">{item.role}</p>
                    <p className="text-stone-300 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-emerald-500/10 rounded-full flex items-center justify-center p-12 border border-emerald-500/20">
              <div className="text-center">
                <div className="text-6xl font-bold serif text-emerald-400 mb-4">0%</div>
                <div className="text-xl font-medium tracking-widest uppercase">Fillers, Caffeine, or Synthetic Dyes</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
