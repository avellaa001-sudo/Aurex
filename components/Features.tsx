
import React from 'react';

const featuresList = [
  {
    title: "Soothing Evening Warmth",
    desc: "Adjustable temperature settings designed to provide a gentle, comforting sensation for tired joints.",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Gentle Pulsation Modes",
    desc: "Multiple rhythmic vibration settings to help you decompress and unwind after a long day.",
    img: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ergonomic Custom Fit",
    desc: "Soft, breathable materials with adjustable straps to ensure a snug and cozy fit for any body type.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-24 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1591343395582-99bf4eb11abc?auto=format&fit=crop&w=500&q=80" className="rounded-3xl aspect-[3/4] object-cover grayscale opacity-80" alt="Home life" />
              <div className="pt-12">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=500&q=80" className="rounded-3xl aspect-[3/4] object-cover" alt="Relaxing" />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 blur-[100px]"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-[1.15]">Simple to Use. <br /><span className="text-indigo-400">Easy to Love.</span></h2>
            <div className="space-y-12">
              {featuresList.map((feature, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-400 font-black text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                    <p className="text-stone-400 leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
