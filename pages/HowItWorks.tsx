
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
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen scroll-smooth">
      {/* 1. HERO - Focus on Mechanics */}
      <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-block border border-gold-500/30 rounded-full px-4 py-1 mb-8 bg-navy-800/50 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">System Architecture</span>
          </div>
          <h1 className="text-5xl md:text-7xl serif mb-10 leading-tight">
            From Static Content <br/>
            <span className="italic text-gray-400 font-normal">to Active Triage.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-4xl mx-auto">
            See exactly how NeuraScaleX ingests your expertise, enforces clinical boundaries, and turns patient questions into structured data.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button onClick={() => scrollTo('ingestion')} className="bg-white text-navy-900 px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-lg">
               See the Engine
             </button>
             <Link to="/demo" className="border border-white/20 text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
               Request Demo
             </Link>
          </div>
        </div>
        
        {/* Abstract Technical Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <defs>
               <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                 <circle cx="1" cy="1" r="0.5" fill="white" />
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
      </section>

      {/* 2. THE ENGINE: INPUT (Ingestion) */}
      <section id="ingestion" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-teal-800 mb-6 block">01. Ingestion Layer</span>
              <h2 className="text-4xl lg:text-5xl serif text-navy-800 mb-8 leading-tight">We digitise your brain,<br/><span className="italic">not the internet.</span></h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                Most AI tools scrape the web, leading to hallucinations. NeuraScaleX is "containerized"—it only knows what you upload. We unify your scattered assets into a single, searchable Knowledge Vault.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-2">Supported Formats:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Clinical Guidelines (PDF)",
                    "Patient Leaflets (DOCX)",
                    "Website URLs (Scraped)",
                    "Video Transcripts (MP4)",
                    "Lecture Slides (PPT)",
                    "FAQ Lists (CSV)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500 font-medium">
                      <svg className="w-4 h-4 mr-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Visual: Document Funnel */}
            <div className="relative h-[400px] bg-gray-50 rounded-sm border border-gray-100 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 <div className="w-[500px] h-[500px] border border-navy-900 rounded-full"></div>
                 <div className="w-[300px] h-[300px] border border-navy-900 rounded-full absolute"></div>
               </div>
               
               <div className="relative z-10 flex flex-col items-center">
                 <div className="flex gap-4 mb-8 animate-pulse">
                    <div className="bg-white p-3 shadow-md rounded-sm border border-gray-200 text-[10px] uppercase font-bold text-gray-400">PDF</div>
                    <div className="bg-white p-3 shadow-md rounded-sm border border-gray-200 text-[10px] uppercase font-bold text-gray-400">Video</div>
                    <div className="bg-white p-3 shadow-md rounded-sm border border-gray-200 text-[10px] uppercase font-bold text-gray-400">Web</div>
                 </div>
                 <svg className="w-6 h-6 text-teal-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                 </svg>
                 <div className="w-48 h-32 bg-navy-900 rounded-sm shadow-2xl flex flex-col items-center justify-center text-gold-500 border border-navy-800">
                    <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Knowledge Vault</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ENGINE: PROCESSING (Boundaries) */}
      <section className="py-24 bg-navy-900 text-white border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-navy-950 rounded-sm border border-white/10 flex items-center justify-center p-8">
               {/* Visual: Logic Gate */}
               <div className="w-full max-w-sm space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-full bg-white/5 p-4 rounded-sm border border-white/10 text-xs text-gray-400">"What are the symptoms of X?"</div>
                     <span className="text-green-500 font-mono text-xs">→ PASS</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-full bg-white/5 p-4 rounded-sm border border-white/10 text-xs text-gray-400">"How much is a consultation?"</div>
                     <span className="text-green-500 font-mono text-xs">→ PASS</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-full bg-red-900/20 p-4 rounded-sm border border-red-500/50 text-xs text-red-200">"Should I take this medication?"</div>
                     <span className="text-red-500 font-mono text-xs">→ BLOCK</span>
                  </div>
                  <div className="mt-6 p-4 bg-teal-900/30 border border-teal-500/30 rounded-sm text-center">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Refusal Protocol Activated</p>
                     <p className="text-[10px] text-gray-400 mt-2 italic">"I cannot provide medical advice. Please book a consultation..."</p>
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-500 mb-6 block">02. Boundary Layer</span>
              <h2 className="text-4xl lg:text-5xl serif mb-8 leading-tight">Hard-coded boundaries.<br/><span className="italic text-gray-400">Zero ambiguity.</span></h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                The Twin is not "creative." It is a retrieval engine wrapped in a safety protocol. We configure the system to detect clinical intent (e.g., "diagnose me") and trigger a pre-written refusal script that routes the patient to professional care.
              </p>
              <ul className="space-y-6">
                {[
                  "System Prompting: Hard rules on what it acts as (an educator, not a doctor).",
                  "Retrieval Limits: It only answers if the answer exists in your Vault.",
                  "Refusal Signposting: Blocking advice while still being helpful (e.g., offering a booking link)."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300 font-light">
                    <span className="text-gold-500 mr-4 font-bold">/</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ENGINE: OUTPUT (Signals) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-teal-800 mb-6 block">03. Intelligence Layer</span>
              <h2 className="text-4xl lg:text-5xl serif text-navy-800 mb-8 leading-tight">Conversations become <br/><span className="italic">structured data.</span></h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                Every interaction is anonymized and categorized. Instead of guessing what patients are worrying about, you see exactly what they ask, where they get stuck, and what content you are missing.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                   <h4 className="text-sm font-bold text-navy-900">Demand Heatmaps</h4>
                   <p className="text-xs text-gray-500">See which topics spike on weekends vs. weekdays.</p>
                </div>
                <div className="flex flex-col gap-2">
                   <h4 className="text-sm font-bold text-navy-900">Content Gap Alerts</h4>
                   <p className="text-xs text-gray-500">"15 people asked about [Topic], but your Vault has no answer."</p>
                </div>
                <div className="flex flex-col gap-2">
                   <h4 className="text-sm font-bold text-navy-900">Triage Effectiveness</h4>
                   <p className="text-xs text-gray-500">Track how many conversations end in a booking vs. a drop-off.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-950 p-8 rounded-sm shadow-3xl border border-white/10 relative overflow-hidden">
               {/* Visual: Dashboard UI */}
               <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Signals</span>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-sm flex justify-between items-center">
                     <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Top Topic (24h)</p>
                        <p className="text-white font-serif text-lg">Post-Op Recovery</p>
                     </div>
                     <span className="text-green-400 text-xs font-bold">↑ 12%</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-sm flex justify-between items-center">
                     <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Lead Intent</p>
                        <p className="text-white font-serif text-lg">High (Booking)</p>
                     </div>
                     <span className="text-gold-500 text-xs font-bold">42 Leads</span>
                  </div>
                  
                  <div className="mt-6">
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Content Gaps Detected</p>
                     <div className="flex gap-2">
                        <span className="px-3 py-1 bg-red-500/20 text-red-200 text-[10px] rounded-full border border-red-500/30">Insurance: AXA</span>
                        <span className="px-3 py-1 bg-red-500/20 text-red-200 text-[10px] rounded-full border border-red-500/30">Pediatric Age Limits</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPLEMENTATION PROTOCOL */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-600 mb-6 block">The Timeline</span>
            <h2 className="text-4xl serif text-navy-800 mb-6">The 7-Day Implementation Protocol.</h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              We don’t just hand you a login. We guide you through a disciplined onboarding process to ensure your Twin is safe, accurate, and ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

             {[
               {
                 step: "01",
                 title: "Ingestion & Audit",
                 desc: "You identify your core materials (PDFs, URLs). We index them and run a gap analysis to see what's missing.",
                 days: "Days 1-2"
               },
               {
                 step: "02",
                 title: "Scope Calibration",
                 desc: "We configure the boundary layer. You approve the 'refusal scripts' and tone settings.",
                 days: "Days 3-5"
               },
               {
                 step: "03",
                 title: "Stress-Test & Launch",
                 desc: "Private sandbox testing. Once you sign off on accuracy, we provide the embed code.",
                 days: "Days 6-7"
               }
             ].map((s, i) => (
               <div key={i} className="relative z-10 bg-white p-10 border border-gray-100 shadow-sm rounded-sm">
                  <div className="w-12 h-12 bg-navy-900 text-gold-500 flex items-center justify-center text-lg font-bold rounded-full mb-6 border-4 border-gray-50">
                    {s.step}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">{s.days}</span>
                  <h3 className="text-xl serif text-navy-900 mb-4">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{s.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. USE CASES (Concrete Application) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl serif text-navy-800 mb-8">Where does this fit?</h2>
              <p className="text-lg text-gray-600 mb-10 font-light">
                The Twin isn't a replacement for you. It's a replacement for the repetitive, low-value orientation tasks that burn you out.
              </p>
              <Link to="/demo" className="text-sm font-bold uppercase tracking-widest text-teal-800 border-b border-teal-800/30 pb-1 hover:text-navy-900 transition-colors">
                Book a use-case demo →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
               {[
                 { t: "The 24/7 Front Desk", d: "Handles fees, location, and insurance queries instantly." },
                 { t: "Programme Triage", d: "Qualifies patients for high-ticket programmes before they book." },
                 { t: "Post-Op Reassurance", d: "Answers routine 'is this normal?' questions using your recovery guides." },
                 { t: "Waitlist Education", d: "Keeps patients engaged and educated while they wait for an appointment." }
               ].map((u, i) => (
                 <div key={i} className="flex items-start p-6 border border-gray-100 rounded-sm hover:border-gold-500 transition-colors">
                    <span className="text-gold-500 font-serif text-xl mr-4 italic">0{i+1}</span>
                    <div>
                       <h4 className="text-sm font-bold text-navy-900 mb-1">{u.t}</h4>
                       <p className="text-xs text-gray-500 font-light">{u.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - Aligned */}
      <section className="py-32 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl serif mb-10">Ready to build your vault?</h2>
          <p className="text-lg text-gray-400 font-light mb-12">
            Start with the 30-day pilot. Experience the governance engine firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
              Start Free Trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Request a Demo
            </Link>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            Full data sovereignty. ISO 27001 aligned.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
