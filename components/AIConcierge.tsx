
import React, { useState } from 'react';
import { getWellnessAdvice } from '../services/geminiService';

interface WellnessResponse {
  advice: string;
  lifestyleTips: string[];
  recommendedProtocol: string;
}

const AIConcierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WellnessResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await getWellnessAdvice(query);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Our concierge is resting. Please try again soon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-white overflow-hidden relative border-y border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block p-4 bg-indigo-50 rounded-3xl mb-8">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
        <h2 className="text-4xl font-extrabold text-brand mb-4 tracking-tight">Find Your Perfect Comfort Mode</h2>
        <p className="text-stone-500 mb-12 text-lg font-medium max-w-2xl mx-auto">
          Tell us about your daily routine (standing at work, long walks, etc.) and we'll recommend the best relaxation ritual for your evenings.
        </p>

        <form onSubmit={handleSubmit} className="mb-12 max-w-2xl mx-auto">
          <div className="relative group">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: I spend 8 hours standing at a retail store..."
              className="w-full bg-stone-50 border border-stone-200 rounded-[32px] p-8 pr-32 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:bg-white transition-all min-h-[160px] shadow-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute bottom-6 right-6 bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all disabled:opacity-50 shadow-xl"
            >
              {loading ? 'Thinking...' : 'Get My Ritual'}
            </button>
          </div>
        </form>

        {result && (
          <div className="bg-stone-900 text-white p-10 rounded-[48px] shadow-2xl animate-fade-in text-left border border-white/5">
            <h3 className="text-2xl font-bold mb-6 text-white">{result.advice}</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="font-black text-indigo-400 uppercase tracking-widest text-[10px]">Lifestyle Tips</h4>
                <ul className="space-y-4">
                  {result.lifestyleTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-300">
                      <span className="text-accent bg-indigo-500/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                      <span className="text-sm font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="font-black text-stone-500 uppercase tracking-widest text-[10px] mb-4">Evening Protocol</h4>
                <p className="text-stone-100 font-medium text-sm leading-relaxed mb-6">
                  {result.recommendedProtocol}
                </p>
                <button className="w-full bg-white text-brand py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-stone-200 transition-all">
                  Shop this Bundle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIConcierge;
