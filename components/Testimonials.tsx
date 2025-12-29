
import React from 'react';

const reviews = [
  {
    author: "Elena R.",
    role: "Retail Professional",
    content: "After spending 8 hours on my feet, Aurex is the only thing I look forward to. The warmth is incredibly soothing and helps me unwind completely before bed.",
    rating: 5
  },
  {
    author: "Mark S.",
    role: "Daily Walker",
    content: "I love my evening walks, but my knees used to feel so stiff afterwards. Using Aurex while watching TV has changed my routine. It's so easy and relaxing.",
    rating: 5
  },
  {
    author: "Sarah J.",
    role: "Active Parent",
    content: "Perfect for those of us always on the go. It fits comfortably and the wireless design means I can relax anywhere in the house. A total game changer.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl font-extrabold text-brand tracking-tight">What the Aurex Community says.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-[40px] border border-stone-100 flex flex-col h-full hover:bg-white hover:shadow-xl transition-all duration-300">
              <p className="text-stone-700 leading-relaxed mb-8 flex-grow">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-bold text-stone-900">{review.author}</div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-widest font-black">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
