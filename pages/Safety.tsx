
import React from 'react';
import { Link } from 'react-router-dom';

const Safety: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <section className="py-24 max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl md:text-6xl serif text-teal-800 mb-12">Our Safety Promise.</h1>
        <p className="text-2xl text-navy-900 font-light italic mb-16 leading-relaxed">
          "The primary goal of a Digital Twin is to protect the clinician's reputation while helping the audience."
        </p>

        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-navy-800 mb-6 text-sm">01. Non-clinical by design</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              NeuraScaleX is strictly for educational and informational purposes. It is architected to refuse any request for diagnosis, personalized treatment plans, or emergency medical advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-navy-800 mb-6 text-sm">02. Verified Knowledge Only</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Unlike generic AI, our systems do not 'hallucinate' from the public internet. They are 'containerized' to use only your uploaded material—your papers, your books, your recordings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-navy-800 mb-6 text-sm">03. Explicit 'Stop' Rules</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We define hard boundaries for every Twin. If a user asks a question that crosses into clinical liability, the Twin is programmed to say: "I cannot provide clinical advice on this. Here is how you can book a professional consultation..."
            </p>
          </div>

          <div className="p-10 bg-softgreen rounded-sm border border-teal-100">
            <h3 className="text-xl serif text-teal-800 mb-4">GDPR & Privacy Readiness</h3>
            <p className="text-sm text-teal-900/70 leading-relaxed">
              We do not use patient data to train models. All interactions are handled within secure, private environments that prioritize practitioner ownership of intellectual property.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Band - Aligned with Home */}
      <section className="py-32 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl serif mb-12">Ready to install a governed digital front door?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all text-center">
              Start free trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center">
              Request a demo
            </Link>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            Onboarding reach-out within 24 hours. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Safety;
