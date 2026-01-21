
import React from 'react';

const TrustBar: React.FC = () => {
  const points = [
    { title: "Clinical Insight", desc: "Architected by 15-yr IT Veteran" },
    { title: "Verification", desc: "Informed by The Impact Show" },
    { title: "Compliance", desc: "GDPR & ISO 27001 Focused" }
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-800 mb-8">
          The Only Platform Built on Clinical Insight
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-gold-500 font-serif text-3xl mb-2">{idx + 1}.</span>
              <h4 className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-1">{p.title}</h4>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
