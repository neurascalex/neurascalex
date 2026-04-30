
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Impact Media Strategy",
      desc: "For clinicians who aren't ready for a full PEOS but need a high-authority digital presence. We leverage HR Digital Media expertise to create content that converts.",
      features: ["Verified Content Mapping", "Multi-channel Launch Strategy", "Authority Visual Brand Design"]
    },
    {
      title: "PEOS Pilot Consulting",
      desc: "A high-touch, 90-day engagement to audit your current assets and install the foundation of your Digital Twin.",
      features: ["IP Safety Audit", "Architecture Roadmap", "Data Compliance Framework"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-serif text-ink mb-6">Need Immediate High-Touch Support?</h1>
            <p className="text-xl text-ink/60 font-serif italic italic-moment">Exclusive, limited services for the world's most purposeful experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((s, i) => (
              <div key={i} className="bg-teal-precise/5 p-12 shadow-sm rounded-none border-t-4 border-teal-precise flex flex-col transition-all hover:translate-y-[-4px]">
                <h2 className="text-3xl serif text-ink mb-6">{s.title}</h2>
                <p className="text-ink/60 mb-8 flex-grow font-serif italic">{s.desc}</p>
                <ul className="space-y-4 mb-10">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-ink">
                      <span className="text-teal-precise mr-3">✔</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-teal-precise text-paper py-5 font-bold uppercase tracking-widest hover:brightness-110 transition-all label-mono text-xs shadow-xl shadow-teal-precise/20"
                >
                  INQUIRE ABOUT SERVICES
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
