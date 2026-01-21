
import React from 'react';
import { Link } from 'react-router-dom';

const Framework: React.FC = () => {
  const pillars = [
    {
      title: "Engagement",
      subtitle: "The Safe Digital Twin",
      desc: "Creating a verified interaction layer that communicates your expertise to patients 24/7, without compromising your personal time or professional integrity."
    },
    {
      title: "Intelligence",
      subtitle: "The Demand Dashboard",
      desc: "Analyze what patients actually need in real-time. Turn search data and admin queries into high-leverage clinical content and service offerings."
    },
    {
      title: "Compliance",
      subtitle: "The Secure Foundation",
      desc: "Architecture built specifically for HIPAA, GDPR, and ISO 27001 readiness. Your intellectual property stays yours, protected behind clinical-grade encryption."
    }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl serif text-teal-800 mb-8 leading-tight">Stop Guessing. Start Growing.</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            The pain of content creation and admin overwhelm ends now. We install the Patient Engagement Operating System (PEOS) to help you scale safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-10 bg-gray-50 hover:bg-navy-900 hover:text-white transition-all duration-500 rounded-sm text-left border-t-2 border-gold-500">
                <span className="text-gold-500 font-serif text-4xl block mb-6">0{i+1}</span>
                <h3 className="text-2xl serif mb-2">{pillar.title}</h3>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">{pillar.subtitle}</h4>
                <p className="text-sm leading-relaxed opacity-80">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-900 p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl serif text-gold-500 mb-6">Ready for the Blueprint?</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Download our 7-Point Checklist for Ethical AI-Scale. The smart, safe decision for your clinical future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gold-500 text-navy-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-all">
                  DOWNLOAD BLUEPRINT
                </button>
                <Link to="/contact" className="border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all">
                  SCHEDULE ASSESSMENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Framework;
