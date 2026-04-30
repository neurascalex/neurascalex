
import React from 'react';
import { Link } from 'react-router-dom';

const Safety: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-paper min-h-screen">
      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl md:text-6xl font-serif text-teal-precise mb-12">Our Safety Promise.</h1>
        <p className="text-2xl text-ink font-serif italic mb-16 leading-relaxed">
          "The primary goal of an AI Assistant is to protect the clinician's reputation while helping the audience."
        </p>

        <div className="space-y-16">
          <div>
            <h2 className="label-mono text-ink mb-6 opacity-100 font-bold">01. Non-clinical by design</h2>
            <p className="text-lg text-ink/60 leading-relaxed font-light">
              NeuraScaleX is strictly for educational and informational purposes. It is architected to refuse any request for diagnosis, personalized treatment plans, or emergency medical advice.
            </p>
          </div>

          <div>
            <h2 className="label-mono text-ink mb-6 opacity-100 font-bold">02. Verified Knowledge Only</h2>
            <p className="text-lg text-ink/60 leading-relaxed font-light">
              Unlike generic AI, our systems do not 'hallucinate' from the public internet. They are 'containerized' to use only your uploaded material—your papers, your books, your recordings.
            </p>
          </div>

          <div>
            <h2 className="label-mono text-ink mb-6 opacity-100 font-bold">03. Explicit 'Stop' Rules</h2>
            <p className="text-lg text-ink/60 leading-relaxed font-light">
              We define hard boundaries for every AI Assistant. If a user asks a question that crosses into clinical liability, the AI Assistant is programmed to say: "I cannot provide clinical advice on this. Here is how you can book a professional consultation..."
            </p>
          </div>

          <div className="p-10 bg-teal-precise/5 border border-teal-precise/10">
            <h3 className="text-xl font-serif text-teal-precise mb-4">GDPR & Privacy Readiness</h3>
            <p className="text-sm text-teal-precise/70 leading-relaxed font-light">
              We do not use patient data to train models. All interactions are handled within secure, private environments that prioritize practitioner ownership of intellectual property.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Band - Aligned with Home */}
      <section className="py-20 bg-paper text-ink relative overflow-hidden border-t border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-12">Ready to install a governed digital front door?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-teal-precise text-paper px-12 py-6 font-bold uppercase tracking-widest shadow-2xl shadow-teal-precise/20 hover:brightness-110 transition-all text-center label-mono text-xs">
              Start free pilot
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-ink/20 text-ink px-12 py-6 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all text-center label-mono text-xs">
              Request a demo
            </Link>
          </div>
          <p className="label-mono text-ink/40 opacity-100 italic">
            Onboarding reach-out within 24 hours. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Safety;
