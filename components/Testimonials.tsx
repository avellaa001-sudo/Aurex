
import React from 'react';

const reviews = [
  {
    author: "Elena R.",
    role: "Graphic Designer",
    content: "I've tried everything for my morning jitters. Vera is the first thing that actually works without making me feel like a zombie. My focus has never been sharper.",
    rating: 5
  },
  {
    author: "Mark S.",
    role: "Startup Founder",
    content: "The edge it takes off is incredible. I deal with high-pressure meetings all day, and Vera helps me stay grounded and reactive in the right way.",
    rating: 5
  },
  {
    author: "Sarah J.",
    role: "Registered Nurse",
    content: "As someone who works 12-hour shifts, my stress levels are high. Taking Vera has genuinely changed my baseline mood. I feel more patient and calm.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-emerald-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-brand serif">What the community says.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-soft p-8 rounded-3xl border border-stone-100 flex flex-col h-full">
              <p className="text-stone-700 leading-relaxed mb-8 flex-grow">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-brand">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-bold text-stone-900">{review.author}</div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest">{review.role}</div>
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
