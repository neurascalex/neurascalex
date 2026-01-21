
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
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl serif mb-6">What Will Your Transformation Feel Like?</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We don't just provide software. We provide the architecture for clinical freedom.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((c, i) => (
              <div key={i} className="flex flex-col h-full border border-gray-100 p-12 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-4">{c.tag}</span>
                <h2 className="text-3xl serif text-navy-900 mb-2">{c.name}</h2>
                <h3 className="text-teal-700 text-xl font-bold mb-6 italic">{c.result}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{c.story}</p>
                <div className="pt-8 border-t border-gray-50">
                  <Link to="/contact" className="text-sm font-bold text-navy-800 uppercase tracking-widest hover:text-gold-600 transition-colors">
                    READ FULL CASE STUDY →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl serif text-teal-800 mb-8">Ready to see the pricing model?</h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/product"
                className="bg-navy-800 text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-navy-900 transition-all shadow-xl"
              >
                VIEW PLANS & PRICING
              </Link>
              <button className="bg-gold-500 text-navy-900 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-all">
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
