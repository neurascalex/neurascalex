
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen">
      {/* 1) Hero Section */}
      <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-10 leading-tight italic">The 7-Day Protocol.</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-4xl mx-auto">
            We don’t just hand you a login. We guide you through a disciplined onboarding process to ensure your Digital Twin is safe, accurate, and reflects your professional standards.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-16">
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> Verified Ingestion</div>
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> Scope Calibration</div>
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> Private Stress-Testing</div>
          </div>
        </div>
      </section>

      {/* 2) Steps Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 overflow-hidden">
        <div className="space-y-32">
          
          {/* STEP 1: Knowledge Vault */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-600 mb-6 block">Step 01 / Phase 01</span>
              <h2 className="text-4xl md:text-5xl serif text-navy-800 mb-8 leading-tight">Constructing your <br/><span className="italic">Knowledge Vault.</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                You identify the material that defines your expertise: publications, patient handouts, course transcripts, and blog posts. Our team helps you structure this containerized knowledge base. No generic web scraping. No hallucinations.
              </p>
              <div className="space-y-6">
                {[
                  "Automated indexing of approved PDFs & URLs",
                  "Cross-referencing of core expert claims",
                  "Deep-clean of outdated clinical materials"
                ].map((detail, j) => (
                  <div key={j} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-softgreen flex items-center justify-center text-teal-800 mr-4 flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-white p-8 rounded-sm shadow-2xl border border-gray-100 aspect-square flex items-center justify-center relative overflow-hidden">
                 {/* Visual Representation of Ingestion */}
                 <div className="relative w-full h-full flex items-center justify-center">
                   <div className="absolute w-48 h-48 bg-teal-800/5 rounded-full animate-pulse"></div>
                   <div className="absolute w-32 h-32 bg-teal-800/10 rounded-full"></div>
                   <div className="z-10 bg-navy-900 p-8 rounded-sm text-gold-500 shadow-xl border border-navy-800">
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                     </svg>
                   </div>
                   {/* Orbiting Document Icons */}
                   {[0, 72, 144, 216, 288].map((angle, i) => (
                     <div key={i} 
                          className="absolute bg-white p-3 rounded-sm shadow-md border border-gray-100"
                          style={{
                            transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`
                          }}>
                       <svg className="w-5 h-5 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                       </svg>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 shadow-xl hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy-950">Vault Integrity: 100%</p>
              </div>
            </div>
          </div>

          {/* STEP 2: Boundary Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="bg-navy-900 p-8 rounded-sm shadow-2xl border border-navy-800 aspect-square flex items-center justify-center">
                 {/* Visual Representation of Boundaries */}
                 <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-64 h-64 border-2 border-dashed border-gold-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    </div>
                    <div className="z-10 bg-white p-10 rounded-full shadow-2xl border-4 border-gold-500 flex flex-col items-center">
                       <svg className="w-12 h-12 text-navy-900 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.223 0 2.39.22 3.47.614m3.213 3.09c.713 1.133 1.14 2.476 1.14 3.91 0 1.606-.43 3.108-1.18 4.415m-1.714 2.145A10.05 10.05 0 0112 21a8.966 8.966 0 01-5.909-2.254" />
                       </svg>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800">The Twin</span>
                    </div>
                    {/* Shield Indicators */}
                    <div className="absolute top-1/4 left-1/4 bg-red-500/20 border border-red-500/50 text-red-100 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Medical Advice Refusal</div>
                    <div className="absolute bottom-1/4 right-1/4 bg-teal-500/20 border border-teal-500/50 text-teal-100 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Orientation Logic</div>
                 </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-600 mb-6 block">Step 02 / Phase 02</span>
              <h2 className="text-4xl md:text-5xl serif text-navy-800 mb-8 leading-tight">Governance & <br/><span className="italic">Scope Calibration.</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                We configure the boundary layer. This includes defining exactly where the AI should stop, what refusal language to use for clinical requests, and how to mirror your unique vocabulary and professional ethics.
              </p>
              <div className="space-y-6">
                {[
                  "Hard-coded boundary mapping (Information vs. Diagnosis)",
                  "Refusal protocol training (Safe signposting)",
                  "Voice-match calibration (Your tone, your personality)"
                ].map((detail, j) => (
                  <div key={j} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-softgreen flex items-center justify-center text-teal-800 mr-4 flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3: Multi-Channel Deployment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-600 mb-6 block">Step 03 / Phase 03</span>
              <h2 className="text-4xl md:text-5xl serif text-navy-800 mb-8 leading-tight">Stress-Testing <br/>& <span className="italic">Launch.</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                You stress-test your Twin in a private sandbox. Once you are 100% confident it speaks for you correctly, we deploy it to your digital ecosystem—website, QR codes, and patient links.
              </p>
              <div className="space-y-6">
                {[
                  "One-click website embed (no code needed)",
                  "Custom QR codes for clinical physical spaces",
                  "Live analytics & patient-needs dashboard"
                ].map((detail, j) => (
                  <div key={j} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-softgreen flex items-center justify-center text-teal-800 mr-4 flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gray-50 p-8 rounded-sm shadow-2xl border border-gray-100 aspect-square flex items-center justify-center">
                 {/* Visual Representation of Deployment */}
                 <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-64 h-80 bg-white border border-gray-200 rounded-sm shadow-xl p-4 flex flex-col rotate-[-3deg] z-10">
                       <div className="h-4 w-2/3 bg-gray-100 mb-4 rounded-full"></div>
                       <div className="flex-grow bg-softgreen/30 rounded-sm border border-dashed border-teal-800/10 flex items-center justify-center">
                          <div className="w-10 h-10 bg-teal-800 rounded-full animate-bounce"></div>
                       </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-navy-900 rounded-lg shadow-2xl p-3 flex flex-col rotate-[6deg] z-20">
                       <div className="w-full h-full bg-gray-800 rounded-sm flex flex-col p-4 overflow-hidden">
                          <div className="h-2 w-1/2 bg-gold-500 mb-3 rounded-full"></div>
                          <div className="h-10 w-full bg-white/5 mb-3 rounded-sm"></div>
                          <div className="h-20 w-full bg-white/10 mb-3 rounded-sm"></div>
                          <div className="mt-auto h-8 w-full bg-gold-500 rounded-sm"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Final CTA */}
      <section className="py-32 bg-navy-950 text-white relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl serif mb-12">Your 7-day countdown starts with a pilot.</h2>
          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
            Experience the governed scale of a Digital Twin without diluting your professional integrity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
              Start Free Trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Request a Demo
            </Link>
          </div>
        </div>
        {/* Abstract background graphics */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.1" />
             <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
      </section>

      {/* 4) Ethical Reassurance */}
      <section className="py-12 bg-white text-center">
         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
           Governance First. Non-Clinical. Built for Clinical Integrity.
         </p>
      </section>
    </div>
  );
};

export default HowItWorks;
