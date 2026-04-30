
import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      name: "Dr. Abrar & Deepak",
      result: "80% Admin Automation",
      story: "By deploying the PEOS Digital Twin, Repetitive queries were offloaded to a verified AI system, allowing the doctors to focus purely on high-complexity patient care.",
      tag: "Process Transformation"
    },
    {
      name: "Dr. Catherine",
      result: "Expert Asset Conversion",
      story: "Converted 10 years of scattered lecture notes and video content into a high-leverage keynote strategy and an automated onboarding system for new practitioners.",
      tag: "Asset Leverage"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-paper">
      <section className="py-24 text-ink border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 italic italic-moment">What Will Your Transformation Feel Like?</h1>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg font-serif italic">
            We don't just provide software. We provide the architecture for clinical freedom.
          </p>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((c, i) => (
              <div key={i} className="flex flex-col h-full border border-ink/5 bg-teal-precise/5 p-12 rounded-none shadow-sm hover:shadow-xl transition-all duration-300">
                <span className="text-[10px] font-bold text-teal-precise uppercase tracking-widest mb-4 label-mono opacity-100">{c.tag}</span>
                <h2 className="text-3xl serif text-ink mb-2">{c.name}</h2>
                <h3 className="text-teal-precise text-xl font-serif italic mb-6">{c.result}</h3>
                <p className="text-ink/60 mb-8 leading-relaxed flex-grow font-serif italic">{c.story}</p>
                <div className="pt-8 border-t border-ink/5">
                  <Link to="/contact" className="text-xs font-bold text-ink uppercase tracking-widest hover:text-teal-precise transition-colors label-mono opacity-100 italic underline underline-offset-8">
                    READ FULL CASE STUDY →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif text-ink mb-12">Ready to see the pricing model?</h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/free-trial"
                className="bg-teal-precise text-paper px-10 py-5 font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-teal-precise/20 label-mono text-xs"
              >
                START FREE TRIAL
              </Link>
              <button className="border border-ink/20 text-ink px-10 py-5 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono text-xs">
                ACCESS IMPACT CHECKLIST
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
