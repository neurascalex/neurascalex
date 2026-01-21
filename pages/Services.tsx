
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
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl serif text-teal-800 mb-6">Need Immediate High-Touch Support?</h1>
            <p className="text-xl text-gray-600 font-light">Exclusive, limited services for the world's most purposeful experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-12 shadow-lg rounded-sm border-t-4 border-teal-800 flex flex-col">
                <h2 className="text-3xl serif text-navy-900 mb-6">{s.title}</h2>
                <p className="text-gray-600 mb-8 flex-grow">{s.desc}</p>
                <ul className="space-y-4 mb-10">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-navy-800">
                      <span className="text-gold-500 mr-3">✔</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-navy-800 text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-navy-900 transition-all"
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
