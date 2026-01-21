
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Animation loop for Hero Visual
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen">
      
      {/* Hero Section - Refined Center Alignment & Clean Visuals */}
      <section id="overview" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl serif leading-[1.1] mb-10">
              A Clinician Digital Twin — <br/>
              <span className="italic text-gold-400 font-normal">built from your approved material, in your voice, designed to know where to stop.</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-3xl">
              NeuraScaleX helps health professionals scale trusted expertise safely: reduce repetition, protect standards, and route people to the right next step — without crossing into clinical advice.
            </p>
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 w-full sm:w-auto">
              <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all text-center">
                Start free trial
              </Link>
              <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center">
                Request a demo
              </Link>
            </div>

            {/* Re-integrated Trust Strip - Clean Presentation */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gold-500/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-20">
              <div className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> Approved sources only</div>
              <div className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> Non-clinical by design</div>
              <div className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> Live in 7 days</div>
            </div>

            {/* Central Visual - Refined Digital Twin UI without floating labels */}
            <div className="relative w-full max-w-3xl">
              <div className="bg-navy-800 rounded-2xl shadow-3xl border border-white/10 p-1 relative overflow-hidden">
                <div className="bg-warm-white rounded-xl overflow-hidden shadow-inner flex flex-col md:flex-row h-[420px]">
                  
                  {/* Website Context (Left Sidebar) */}
                  <div className="hidden md:flex flex-col flex-grow bg-gray-50/50 p-10 text-left border-r border-gray-100">
                    <div className="w-12 h-12 bg-navy-900 rounded-full mb-6 flex items-center justify-center text-gold-500 font-serif font-bold text-lg">SC</div>
                    <h4 className="text-2xl serif text-navy-900 mb-2">Dr. Sarah Chen</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-800 mb-8">Clinical Specialist</p>
                    <div className="space-y-4">
                      <div className="h-2 w-full bg-gray-200/50 rounded-full"></div>
                      <div className="h-2 w-5/6 bg-gray-200/50 rounded-full"></div>
                      <div className="h-2 w-4/6 bg-gray-200/50 rounded-full"></div>
                    </div>
                    
                    {/* Simplified Stats */}
                    <div className="mt-auto grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-1">Deflection</p>
                        <p className="text-xl serif text-teal-800">19.5%</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-1">Enquiries</p>
                        <p className="text-xl serif text-gold-500">{activeStep === 2 ? "09" : "08"}</p>
                      </div>
                    </div>
                  </div>

                  {/* The Digital Twin Interaction Window (Right Side) */}
                  <div className="w-full md:w-[340px] bg-navy-900 flex flex-col p-6 shadow-2xl relative z-20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-0.5">Digital Twin</span>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                          <span className="text-[8px] text-gray-400 uppercase tracking-widest">Governed Identity</span>
                        </div>
                      </div>
                      <div className="bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded-full">
                        <span className="text-[7px] font-bold text-teal-400 uppercase tracking-widest">Non-Clinical</span>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-end space-y-4">
                      <div className="bg-white/5 rounded-xl p-4 text-left border border-white/5 animate-in slide-in-from-bottom-2 duration-700 min-h-[100px]">
                        <p className="text-[11px] text-gray-300 leading-relaxed">
                          {activeStep === 0 ? "I'm Dr. Chen's Digital Twin. I can answer questions about the clinic, fees, and programmes based on her approved material." : 
                           activeStep === 1 ? "An initial assessment typically lasts 60 minutes. We'll review your clinical history and build your personal roadmap." : 
                           "I've shared your interest with our practice coordinator. Would you like to view the available slots for next week?"}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-2 pt-2">
                        {activeStep === 0 ? (
                          ['Appointments & Fees', 'Is this right for me?'].map((btn, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 text-[9px] text-gold-400/80 py-2.5 px-4 rounded-sm text-left font-medium">
                              {btn}
                            </div>
                          ))
                        ) : activeStep === 1 ? (
                          <div className="bg-gold-500 text-navy-950 text-[10px] font-bold py-3 rounded-sm uppercase tracking-widest text-center animate-pulse">
                            Book Assessment
                          </div>
                        ) : (
                          <div className="bg-white/10 text-[9px] text-white/40 py-2.5 px-4 rounded-sm text-center italic">
                            Connecting with practice...
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5">
                      <p className="text-[8px] text-gray-500 italic text-center">Governed by Clinical Integrity Protocols.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* One subtle background context label remaining for clarity without clutter */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-4 rounded-sm shadow-2xl border border-gray-100 hidden lg:block rotate-[-2deg] z-0">
                <p className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">Embedded on your site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tension (Repetition & Misrepresentation) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl serif text-navy-900 mb-10 leading-tight">
                The real risk isn’t being invisible. <br/><span className="italic">It’s being misrepresented.</span>
              </h2>
              <div className="w-20 h-0.5 bg-gold-500 mb-12"></div>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Generic AI can generate answers in your domain without your standards. NeuraScaleX fixes this by anchoring your expertise.
              </p>
            </div>
            <div className="space-y-10">
              {[
                "Your expertise is fragmented across PDFs, YouTube, slides, and FAQs",
                "People arrive misinformed, anxious, and unprepared",
                "You and your team repeat the same orientation questions daily",
                "Reputation is exposed when generic models hallucinate on your behalf"
              ].map((bullet, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-gold-500 text-2xl mr-6 font-serif italic">0{i+1}</span>
                  <p className="text-lg text-navy-800 font-light leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Modules (Mental Model) */}
      <section id="modules" className="py-32 bg-softgreen border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl serif text-navy-800 mb-8 leading-tight">It’s not a chatbot. <br/><span className="italic">It’s a clinical-grade architecture.</span></h2>
            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
              One system with three layers—so you scale trust first, then insight, then execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Front Door",
                oneLiner: "Your expertise—available 24/7.",
                bullets: ["Embedded on your website (or share link)", "Answers from your approved material", "Explains your approach & programmes", "Refuses clinical advice safely"],
                metric: "Deflect routine queries. Improve quality."
              },
              {
                title: "Signals",
                oneLiner: "Insights before they hit your inbox.",
                bullets: ["Top patient questions & trending topics", "Enquiry quality indicators", "Self-serve resolution tracking", "Content gap identification"],
                metric: "Turn conversations into priorities.",
                dark: true
              },
              {
                title: "Actions",
                oneLiner: "Convert signals into next steps.",
                bullets: ["Lead routing & structured enquiry capture", "Dynamic \"Next Step\" prompts inside Twin", "Admin triage pathways for practice staff", "Handoff alerts based on your rules"],
                metric: "Available in pilot / rolling release"
              }
            ].map((module, i) => (
              <div key={i} className={`p-12 rounded-[24px] shadow-2xl border flex flex-col group hover:-translate-y-2 transition-all duration-500 ${module.dark ? 'bg-navy-900 border-navy-800 text-white' : 'bg-white border-gray-100'}`}>
                <h3 className={`text-3xl serif mb-4 ${module.dark ? 'text-gold-500' : 'text-navy-900'}`}>{module.title}</h3>
                <p className={`text-sm font-bold uppercase tracking-widest mb-8 italic ${module.dark ? 'text-white' : 'text-teal-800'}`}>{module.oneLiner}</p>
                <ul className="space-y-4 mb-12 flex-grow">
                  {module.bullets.map((b, j) => (
                    <li key={j} className="text-sm flex items-start">
                      <span className="text-gold-500 mr-3 mt-1 text-xs">●</span> 
                      <span className={module.dark ? 'text-gray-400' : 'text-gray-500'}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className={`pt-6 border-t ${module.dark ? 'border-white/10' : 'border-gray-50'}`}>
                   <span className={`text-[10px] font-bold uppercase tracking-widest ${module.dark ? 'text-gray-500' : 'text-gray-400'}`}>{module.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it lives (Placement) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl serif text-navy-800 mb-8">It lives where patients already look.</h2>
          <p className="text-lg text-gray-500 font-light mb-20 max-w-3xl mx-auto leading-relaxed">
            The Twin becomes your always-on front door—answering, orienting, and signposting before someone reaches your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { t: "Website Widget", d: "Primary placement. Works with Webflow, WordPress, Squarespace, and custom sites.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { t: "Shareable Link", d: "Use in LinkedIn bios, email footers, WhatsApp, or direct messages.", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" },
              { t: "QR Code", d: "Perfect for clinics, events, printed guides, and physical touchpoints.", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-12 rounded-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-teal-800 mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-xl serif text-navy-900 mb-4">{item.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/free-trial" className="bg-navy-800 text-gold-500 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-navy-950 transition-all shadow-xl">Start free trial</Link>
            <Link to="/demo" className="bg-white border border-gray-200 text-navy-800 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">Request demo</Link>
          </div>
        </div>
      </section>

      {/* Safety & Governance Pillars */}
      <section id="safety" className="py-32 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl serif mb-8 leading-tight">Reputation-first by design.</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              NeuraScaleX is engineered to protect clinical integrity and avoid unsafe behavior.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              { t: "Approved sources only", d: "No generic web scraping or hallucinations." },
              { t: "Non-clinical scope", d: "Hard-coded boundaries against advice/diagnosis." },
              { t: "Refusal + signposting", d: "Knows exactly where to stop and route back." },
              { t: "Auditability", d: "Review every response. Continuous safety iteration." }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-4">{p.t}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.4em] text-center">
            Non-clinical. Not medical advice. Not a medical device.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl serif text-navy-800 mb-16 text-center">Platform FAQ</h2>
          <div className="space-y-12">
            {[
              { q: "Is this training on my data?", a: "No. The Twin is built from clinician-approved materials you provide. We do not use your proprietary knowledge to train generic public models." },
              { q: "Does it give medical advice?", a: "No. It is non-clinical by design. It provides orientation, education from approved sources, and signposting to official clinical pathways." },
              { q: "What if someone asks diagnostic questions?", a: "The Twin is programmed to detect diagnostic intent, refuse politely, and route the user to your preferred clinical booking process." },
              { q: "How long to go live?", a: "Typically 7 days with guided onboarding, depending on content readiness and routing complexity." },
              { q: "Can I update content later?", a: "Yes. You can add or remove approved sources at any time via your dashboard, and the Twin updates its knowledge base immediately." }
            ].map((f, i) => (
              <div key={i} className="border-b border-gray-100 pb-10">
                <h4 className="text-lg serif text-navy-900 mb-4 uppercase tracking-wider">{f.q}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
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

      {/* Compliance Footer Strip */}
      <section className="py-12 bg-white text-center border-t border-gray-50">
         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
           Non-clinical. Not medical advice. Not a medical device. Built for Clinical Integrity.
         </p>
      </section>
    </div>
  );
};

export default Home;
