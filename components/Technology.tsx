
import React from 'react';

const techFeatures = [
  {
    title: "Triple Action Heat",
    desc: "Adjustable infrared heating pads (40°C - 60°C) that penetrate deep into the bone and joints to improve circulation.",
    img: "https://picsum.photos/seed/tech-heat/600/600"
  },
  {
    title: "Air Compression",
    desc: "Mimics professional massage therapy by rhythmic squeezing to reduce swelling and improve lymphatic drainage.",
    img: "https://picsum.photos/seed/tech-air/600/600"
  },
  {
    title: "Red Light Therapy",
    desc: "Uses specific 660nm wavelengths to boost cellular repair and accelerate healing in damaged tendons.",
    img: "https://picsum.photos/seed/tech-light/600/600"
  }
];

const Technology: React.FC = () => {
  return (
    <div className="py-24 bg-brand text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/massager1/400/500" className="rounded-3xl object-cover w-full h-[300px]" alt="massager" />
                <img src="https://picsum.photos/seed/massager2/400/300" className="rounded-3xl object-cover w-full h-[200px]" alt="massager" />
              </div>
              <div className="pt-12 space-y-4">
                <img src="https://picsum.photos/seed/massager3/400/300" className="rounded-3xl object-cover w-full h-[200px]" alt="massager" />
                <img src="https://picsum.photos/seed/massager4/400/500" className="rounded-3xl object-cover w-full h-[300px]" alt="massager" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/30 blur-[100px]"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Science Meets <br /><span className="text-blue-400">Total Comfort.</span></h2>
            <div className="space-y-12">
              {techFeatures.map((tech, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xl">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-12 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-3">
              Learn More About the Tech
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
