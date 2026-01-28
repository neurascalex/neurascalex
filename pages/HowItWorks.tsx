
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen scroll-smooth font-sans">
      
      {/* 1. HERO */}
      <section className="bg-navy-900 py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <h1 className="text-5xl md:text-7xl serif mb-8 leading-tight">
            From Discovery to Digital Twin <br/>
            <span className="text-gold-500 italic">in 7 Days.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto font-serif">
            A low-friction onboarding process designed for busy clinicians—built on approved sources and clear boundaries.
          </p>
          
          {/* Micro-trust line */}
          <div className="inline-flex flex-wrap justify-center items-center gap-x-6 gap-y-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
             <div className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                Approved sources only
             </div>
             <div className="hidden sm:block text-white/20">•</div>
             <div className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                Non-clinical by design
             </div>
             <div className="hidden sm:block text-white/20">•</div>
             <div className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                Clinician sign-off before launch
             </div>
          </div>

          <div className="mt-12">
             <button onClick={() => scrollTo('process')} className="animate-bounce text-gold-500 hover:text-white transition-colors">
               <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
             </button>
          </div>
        </div>
      </section>

      {/* 2. THE 3-STEP LAUNCH PATH */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:pl-0 space-y-24">
            
            {/* STEP 01 */}
            <div className="relative pl-12 md:pl-24 group">
               {/* Timeline Dot */}
               <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-navy-900 group-hover:scale-110 transition-transform shadow-lg"></div>
               
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="max-w-xl">
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600 mb-2 block">Day 1</span>
                     <h2 className="text-3xl md:text-4xl serif text-navy-900 mb-2">Step 01 — Discovery Call</h2>
                     <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 font-medium">
                        <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Goal: Define scope, voice, & boundaries</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Time: 45 minutes</span>
                     </div>

                     <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                           <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wider">What we do:</h4>
                           <p className="text-gray-600 leading-relaxed font-light">
                              We run a structured interview to capture what your Twin can cover (fees, pathways, services), how it should sound, and—most importantly—what it must never do.
                           </p>
                        </div>
                        <div className="pl-6 border-l-2 border-gold-500/30">
                           <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wider">What you decide:</h4>
                           <ul className="space-y-2">
                              {[
                                "Approved scope (what it can answer)",
                                "“Hard boundaries” (what it must refuse)",
                                "Preferred next steps (booking links, forms, portal, contact routes)"
                              ].map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                   <span className="text-gold-500 mr-3 mt-1">●</span> {item}
                                </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  {/* Decorative Icon */}
                  <div className="hidden md:flex w-24 h-24 bg-navy-50 rounded-full items-center justify-center text-navy-200">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
               </div>
            </div>

            {/* STEP 02 */}
            <div className="relative pl-12 md:pl-24 group">
               {/* Timeline Dot */}
               <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-navy-900 group-hover:scale-110 transition-transform shadow-lg"></div>
               
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="max-w-xl">
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600 mb-2 block">Days 2-5</span>
                     <h2 className="text-3xl md:text-4xl serif text-navy-900 mb-2">Step 02 — Build & Calibration</h2>
                     <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 font-medium">
                        <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>Goal: Assemble your approved knowledge base</span>
                     </div>
                     <p className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-6 bg-teal-50 inline-block px-3 py-1 rounded-full">Effort from you: Minimal</p>

                     <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                           <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wider">What we do:</h4>
                           <p className="text-gray-600 leading-relaxed font-light">
                              We build from your approved materials—website pages, FAQs, policies, documents, and any transcripts or resources you choose to include. We structure it so the Twin answers consistently and routes to the right next step.
                           </p>
                        </div>
                        <div className="pl-6 border-l-2 border-gold-500/30">
                           <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wider">Calibration focuses on:</h4>
                           <ul className="space-y-2">
                              {[
                                "Accuracy against your sources",
                                "Tone consistency",
                                "Boundary-safe refusals",
                                "Correct signposting to your practice pathways"
                              ].map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                   <span className="text-teal-600 mr-3 font-bold">✓</span> {item}
                                </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  {/* Decorative Icon */}
                  <div className="hidden md:flex w-24 h-24 bg-navy-50 rounded-full items-center justify-center text-navy-200">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
               </div>
            </div>

            {/* STEP 03 */}
            <div className="relative pl-12 md:pl-24 group">
               {/* Timeline Dot */}
               <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gold-500 border-4 border-gold-200 group-hover:scale-110 transition-transform shadow-lg animate-pulse"></div>
               
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="max-w-xl">
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600 mb-2 block">Day 7</span>
                     <h2 className="text-3xl md:text-4xl serif text-navy-900 mb-2">Step 03 — Verification & Go-Live</h2>
                     <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 font-medium">
                        <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Goal: Confirm behaviour before public launch</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center"><svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Time: 15 minutes</span>
                     </div>

                     <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                           <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wider">What we do:</h4>
                           <p className="text-gray-600 leading-relaxed font-light">
                              We run a short verification session with you: accuracy checks, boundary checks, and “edge case” questions that commonly create risk (e.g., diagnostic intent, medication requests, medicolegal requests).
                           </p>
                        </div>
                        <div className="bg-navy-900 text-white p-6 rounded-sm border border-gold-500">
                           <h4 className="text-sm font-bold text-gold-500 mb-3 uppercase tracking-wider">Launch Condition:</h4>
                           <p className="text-gray-300 leading-relaxed font-light mb-4">
                              We go live only after you sign off.
                           </p>
                           <div className="pt-4 border-t border-white/10">
                              <p className="font-bold text-sm">Result: Your Digital Twin is live on your website—ready to answer routine questions and guide next steps 24/7.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Decorative Icon */}
                  <div className="hidden md:flex w-24 h-24 bg-green-50 rounded-full items-center justify-center text-green-600 border border-green-100">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROOF OF PROCESS (Visual Verification) */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl serif text-navy-900 mb-4">What a typical calibration looks like.</h2>
              <p className="text-lg text-gray-500 font-light">A sample log from a real-style safety verification.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Legal Boundary */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                 <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Log ID: LEGAL-04</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 </div>
                 <div className="p-8">
                    <div className="mb-6">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-navy-900 mb-2">Test Prompt:</p>
                       <p className="font-mono text-sm bg-gray-50 p-3 rounded text-navy-800">“Can you provide a report for a legal case?”</p>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Twin Behaviour:</p>
                       <div className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✅</span> Refuses the request politely
                       </div>
                       <div className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✅</span> Explains it’s outside scope
                       </div>
                       <div className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✅</span> Routes to practice’s preferred pathway (contact)
                       </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                       <span className="text-xs font-bold text-navy-900">Status:</span>
                       <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-200">VERIFIED</span>
                    </div>
                 </div>
              </div>

              {/* Card 2: Medical Boundary */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                 <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Log ID: CLINICAL-09</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 </div>
                 <div className="p-8">
                    <div className="mb-6">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-navy-900 mb-2">Test Prompt:</p>
                       <p className="font-mono text-sm bg-gray-50 p-3 rounded text-navy-800">“What medication should I take?”</p>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Twin Behaviour:</p>
                       <div className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✅</span> Refuses (non-clinical boundary)
                       </div>
                       <div className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✅</span> Encourages booking / contacting clinic for advice
                       </div>
                       <div className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✅</span> Provides general educational context only if available
                       </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                       <span className="text-xs font-bold text-navy-900">Status:</span>
                       <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-200">VERIFIED</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 4. WHY THIS WORKS (System Principles) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <h2 className="text-4xl serif text-navy-800 mb-16 text-center">Why this works safely.</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                   title: "Approved Sources Only",
                   desc: "Your Twin answers only from materials you approve. If it can’t find it in your sources, it won’t invent it.",
                   icon: (
                      <svg className="w-8 h-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                   )
                },
                {
                   title: "Boundary-Safe Behaviour",
                   desc: "Diagnostic intent, medication requests, urgent risk, and medicolegal asks trigger refusal + signposting—aligned to your preferred pathways.",
                   icon: (
                      <svg className="w-8 h-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                   )
                },
                {
                   title: "Continuous Improvement",
                   desc: "You can review logs, update sources, and refine boundaries over time. We deliver a weekly brief summarising common questions and content gaps.",
                   icon: (
                      <svg className="w-8 h-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                   )
                }
              ].map((card, i) => (
                 <div key={i} className="p-10 border border-gray-100 rounded-sm hover:shadow-xl transition-all group">
                    <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h3 className="text-xl serif text-navy-900 mb-4">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">{card.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl serif mb-8">Ready to launch your Digital Twin in 7 days?</h2>
          <p className="text-lg text-gray-400 font-light mb-12">
            We’re onboarding a limited number of pilots to ensure quality, safety, and fast turnaround.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
            <Link to="/demo" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
              Book a Discovery Call
            </Link>
          </div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
            45 minutes to define scope and boundaries. No credit card required.
          </p>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
