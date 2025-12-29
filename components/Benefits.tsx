
import React from 'react';

const benefits = [
  {
    title: "Post-Work Recovery",
    description: "The perfect companion after a long day of standing or walking. Simply wrap, click, and unwind.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Intelligent Warmth",
    description: "Deep, penetrating heat that feels like a warm embrace for your joints. Choose your ideal comfort level.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.989 7.989 0 01-2.343 5.657z" />
      </svg>
    )
  },
  {
    title: "Wireless Freedom",
    description: "No messy cords. Enjoy your evening ritual while watching TV, reading a book, or resting in bed.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  }
];

const Benefits: React.FC = () => {
  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand mb-4 tracking-tight">Designed for Your Daily Life</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-medium">Because your knees carry you all day, give them the break they deserve.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="bg-indigo-50 text-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand mb-4">{benefit.title}</h3>
              <p className="text-stone-500 leading-relaxed font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
