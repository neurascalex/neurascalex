
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
    <div className="animate-in slide-in-from-bottom-4 duration-700 bg-paper">
      <section className="bg-paper py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-ink mb-8 leading-tight italic italic-moment">Stop Guessing. <br/><span className="not-italic text-teal-precise">Start Growing.</span></h1>
          <p className="text-xl text-ink/60 mb-16 max-w-3xl mx-auto font-serif italic">
            The pain of content creation and admin overwhelm ends now. We install the Patient Engagement Operating System (PEOS) to help you scale safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-10 bg-teal-precise/5 hover:bg-teal-precise hover:text-paper transition-all duration-500 rounded-none text-left border-t-2 border-teal-precise flex flex-col">
                <span className="text-teal-precise group-hover:text-paper font-serif text-4xl block mb-6 transition-colors font-bold">0{i+1}</span>
                <h3 className="text-2xl serif mb-2 font-bold">{pillar.title}</h3>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 label-mono opacity-100 group-hover:text-paper/60 transition-colors">{pillar.subtitle}</h4>
                <p className="text-sm leading-relaxed font-serif italic opacity-80 flex-grow">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-precise p-12 rounded-none shadow-2xl relative overflow-hidden border border-teal-precise/20">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl serif text-paper mb-6 italic italic-moment">Ready for the Blueprint?</h2>
              <p className="text-paper/80 text-lg mb-10 max-w-2xl mx-auto font-serif italic">
                Download our 7-Point Checklist for Ethical AI-Scale. The smart, safe decision for your clinical future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-paper text-teal-precise px-8 py-5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all label-mono shadow-xl">
                  DOWNLOAD BLUEPRINT
                </button>
                <Link to="/contact" className="border border-paper text-paper px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-paper hover:text-teal-precise transition-all label-mono">
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
