
import React, { useState } from 'react';

const faqs = [
  {
    q: "Is it easy to use daily?",
    a: "Absolutely. Most of our users make it a part of their evening ritual—sitting on the couch after dinner for a 15-minute relaxation session."
  },
  {
    q: "Does it require a prescription?",
    a: "No. Vera Comfort is a lifestyle product designed for daily relaxation and warmth. It is not a medical device."
  },
  {
    q: "Is it suitable as a gift?",
    a: "It's one of our most popular gifts! It comes in premium, minimalist packaging that feels like a high-end tech product."
  },
  {
    q: "Is it noisy while in use?",
    a: "We designed Vera to be quiet so it doesn't interrupt your TV time or reading. It produces a soft, low-frequency hum that many find quite soothing."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-brand mb-16 text-center tracking-tight">Your Questions, Answered.</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-stone-50 rounded-3xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-7 text-left flex justify-between items-center group transition-colors hover:bg-stone-100"
              >
                <span className="font-bold text-stone-800 text-lg">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm transform transition-all duration-300 ${openIndex === idx ? 'rotate-180 bg-brand text-white' : 'text-stone-400'}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-stone-500 leading-relaxed font-medium animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
