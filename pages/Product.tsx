
import React from 'react';
import { Link } from 'react-router-dom';

const Product: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen scroll-smooth">
      {/* 2) Hero Section */}
      <section id="overview" className="relative pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-500 mb-6 block">The Clinician Presence System</span>
              <h1 className="text-5xl lg:text-7xl serif leading-tight mb-8">
                Your digital presence, <br/><span className="italic text-gold-400 font-normal">governed end-to-end.</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-xl">
                NeuraScaleX installs a Clinician Digital Twin on your website and turns every interaction into Signals and Actions—so patients arrive oriented, your team repeats less, and your reputation stays protected.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
                  Start free trial
                </Link>
                <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                  Request a demo
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                 <button onClick={() => scrollTo('modules')} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center">
                   See how it works 
                   <svg className="w-4 h-4 ml-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                   </svg>
                 </button>
              </div>
            </div>

            <div className="relative">
              {/* Composite Visual Representing the System */}
              <div className="bg-navy-800 rounded-2xl shadow-3xl border border-white/10 p-4 aspect-[4/3] relative overflow-hidden group">
                {/* Simulated Website UI */}
                <div className="bg-white rounded-lg h-full w-full overflow-hidden shadow-inner flex flex-col">
                  <div className="h-6 bg-gray-100 flex items-center px-3 space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="h-4 w-1/3 bg-gray-100 rounded-full mb-6"></div>
                    <div className="space-y-3 mb-8">
                      <div className="h-2 w-full bg-gray-50 rounded-full"></div>
                      <div className="h-2 w-5/6 bg-gray-50 rounded-full"></div>
                    </div>
                    {/* Floating Twin Widget */}
                    <div className="absolute bottom-8 right-8 w-48 h-64 bg-navy-900 rounded-xl shadow-2xl border-4 border-gold-500/30 p-4 flex flex-col animate-pulse">
                      <div className="w-8 h-8 bg-gold-500 rounded-full mb-4"></div>
                      <div className="space-y-2 mb-4">
                        <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
                        <div className="h-1.5 w-4/5 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="mt-auto h-8 w-full bg-gold-500 rounded-sm"></div>
                    </div>
                    {/* Signals Strip */}
                    <div className="absolute top-24 left-8 bg-teal-800/90 text-[10px] font-bold text-gold-500 px-4 py-2 rounded-sm shadow-lg tracking-widest uppercase">
                      New Lead Capture: Low Risk
                    </div>
                  </div>
                </div>
              </div>
              {/* Trust Strip Bullets */}
              <div className="mt-12 flex flex-wrap justify-between gap-6">
                {[
                  "Approved sources only",
                  "Non-clinical by design",
                  "Live in 7 days"
                ].map((t, i) => (
                  <div key={i} className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) The Mental Model - 3 Layers */}
      <section id="modules" className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl serif text-navy-800 mb-8 leading-tight">It’s not a chatbot. <br/><span className="italic">It’s clinical-grade architecture.</span></h2>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
            One system with three layers—so you scale trust first, then insight, then execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Module 1: Front Door */}
          <div className="bg-white p-12 rounded-[24px] shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-softgreen rounded-2xl flex items-center justify-center text-teal-800 mb-8 group-hover:bg-teal-800 group-hover:text-gold-500 transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl serif text-navy-900 mb-4">Front Door</h3>
            <p className="text-sm font-bold text-teal-800 uppercase tracking-widest mb-6 italic">Your expertise—available 24/7.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Embedded on your website (or share link)",
                "Answers from your approved material",
                "Explains your specific programmes",
                "Refuses clinical advice safely"
              ].map((b, i) => (
                <li key={i} className="text-sm text-gray-500 flex items-start">
                  <span className="text-gold-500 mr-3 mt-1 text-xs">●</span> {b}
                </li>
              ))}
            </ul>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pt-6 border-t border-gray-50">Deflect routine queries. Improve quality.</p>
          </div>

          {/* Module 2: Signals */}
          <div className="bg-navy-900 p-12 rounded-[24px] shadow-2xl border border-navy-800 flex flex-col group hover:-translate-y-2 transition-all duration-500 text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-3xl serif text-gold-500 mb-4">Signals</h3>
            <p className="text-sm font-bold text-white uppercase tracking-widest mb-6 italic">Insights before they hit your inbox.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Top patient questions & trending topics",
                "Enquiry quality indicators",
                "Self-serve resolution metrics",
                "Content gap analysis"
              ].map((b, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start">
                  <span className="text-gold-500 mr-3 mt-1 text-xs">●</span> {b}
                </li>
              ))}
            </ul>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 pt-6 border-t border-white/5">Turn conversations into priorities.</p>
          </div>

          {/* Module 3: Actions */}
          <div className="bg-white p-12 rounded-[24px] shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-softgreen rounded-2xl flex items-center justify-center text-teal-800 mb-8 group-hover:bg-teal-800 group-hover:text-gold-500 transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl serif text-navy-900 mb-4">Actions</h3>
            <p className="text-sm font-bold text-teal-800 uppercase tracking-widest mb-6 italic">Convert signals into next steps.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Lead routing & structured enquiry capture",
                "Dynamic \"Next Step\" prompts (Book/Apply)",
                "Admin triage logic for practice staff",
                "Handoff alerts based on your rules"
              ].map((b, i) => (
                <li key={i} className="text-sm text-gray-500 flex items-start">
                  <span className="text-gold-500 mr-3 mt-1 text-xs">●</span> {b}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-gray-50">
               <span className="bg-teal-50 text-teal-800 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Available in Pilot / Rolling Release</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Where it lives - Placement options */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl serif text-navy-800 mb-8">It lives where patients already look.</h2>
          <p className="text-lg text-gray-500 font-light mb-20 max-w-3xl mx-auto leading-relaxed">
            The Twin becomes your always-on front door—answering, orienting, and signposting before someone reaches your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { t: "Website Widget", d: "Works with Webflow, WordPress, Squarespace, & custom stacks." },
              { t: "Shareable Link", d: "Use in LinkedIn bios, email footers, or direct messages." },
              { t: "QR Code", d: "Perfect for clinic receptions, printed guides, or keynote slides." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
                <h4 className="text-xl serif text-navy-900 mb-4">{item.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/free-trial" className="bg-navy-800 text-gold-500 px-10 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-navy-950 transition-all shadow-xl">Start free trial</Link>
            <Link to="/demo" className="bg-white border border-gray-200 text-navy-800 px-10 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">Request demo</Link>
          </div>
        </div>
      </section>

      {/* 5) Ingestion - Content types */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl serif text-navy-800 mb-8 leading-tight">Built only from <br/><span className="italic">what you approve.</span></h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
                Your knowledge is currently scattered. We unify it into a governed, searchable voice that represents your professional standards.
              </p>
              <div className="bg-softgreen p-8 rounded-sm border border-teal-100 mb-12">
                <p className="text-xs text-teal-800 leading-relaxed italic font-medium">
                   "We do not 'make things up.' If it isn’t supported by your approved material, the Twin is programmed to refuse or signpost safely."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { t: "PDFs", d: "Handouts, guides, clinic brochures." },
                { t: "Web Pages", d: "Service pages, FAQs, blogs." },
                { t: "Transcripts", d: "Podcasts, talks, YouTube." },
                { t: "Slides/Docs", d: "Keynotes, teaching slides." },
                { t: "Structured FAQs", d: "Fees, pathways, logistics." },
                { t: "Research", d: "Verified papers & studies." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-sm hover:border-gold-500 transition-colors">
                  <h4 className="text-sm font-bold text-navy-900 mb-2 uppercase tracking-widest">{item.t}</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6) The Workflow - Timeline */}
      <section id="workflow" className="py-32 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-500 mb-6 block uppercase">Implementation</span>
            <h2 className="text-4xl lg:text-6xl serif mb-8 leading-tight">Your Twin. Your terms. <br/><span className="italic font-normal">Live in 7 days.</span></h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              You stay in control. Our onboarding team handles the heavy lift.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              { s: "Step 1", t: "Request trial / demo", d: "You share basic details and your primary goal for clinical scale." },
              { s: "Step 2", t: "24h onboarding reach-out", d: "If we need more context (programmes, pathways, tone), we send a short checklist. If ready, we proceed to build immediately." },
              { s: "Step 3", t: "Your private Twin environment", d: "You receive a private preview link (yourname.neurascalex.com), dashboard access, and starter prompts." },
              { s: "Step 4", t: "Calibration with your team", d: "We fine-tune boundaries, refusals, signposting, lead capture prompts, and tone to match your practice." },
              { s: "Step 5", t: "Launch on your website", d: "We provide a lightweight embed snippet and go live with confidence. Support included." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center group">
                <div className="w-24 text-gold-500 font-bold text-[10px] uppercase tracking-widest flex-shrink-0 mb-4 md:mb-0">{step.s}</div>
                <div className="flex-grow pb-12 border-b border-white/10 group-last:border-none">
                  <h3 className="text-2xl serif mb-3">{step.t}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <Link to="/free-trial" className="bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">Start 30-day trial</Link>
          </div>
        </div>
      </section>

      {/* 7) Safety + Governance Pillars */}
      <section id="safety" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl serif text-navy-800 mb-8 leading-tight">Reputation-first by design.</h2>
            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              NeuraScaleX is engineered to protect clinical integrity and avoid unsafe behaviour.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Approved sources only", d: "No generic web scraping or hallucinations." },
              { t: "Non-clinical scope", d: "Hard-coded boundaries against advice/diagnosis." },
              { t: "Refusal + Signposting", d: "Knows exactly where to stop and route back." },
              { t: "Auditability", d: "Continuous review, testing, and iteration of responses." }
            ].map((p, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all">
                <h4 className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-widest">{p.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-12 border-t border-gray-50 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
              Non-clinical. Not medical advice. Not a medical device. Designed for governed orientation and routing.
            </p>
          </div>
        </div>
      </section>

      {/* 8) Use Cases Grid */}
      <section id="use-cases" className="py-32 bg-softgreen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl serif text-navy-800 mb-6">What clinicians use NeuraScaleX for.</h2>
            <p className="text-lg text-teal-900/60 font-light max-w-2xl mx-auto">Practical, high-frequency workflows that reduce admin load and improve patient readiness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Clinic orientation (fees, process, expectations)",
              "Programme & membership triage (fit, next steps)",
              "Voice-matched education (approach, philosophy)",
              "Lead capture & qualification (structured enquiries)",
              "Content concierge (instant search for talks/PDFs)",
              "Team deflection (repeated questions to staff)"
            ].map((u, i) => (
              <div key={i} className="bg-white p-8 border border-teal-800/5 rounded-sm flex items-center shadow-sm">
                <span className="text-gold-500 mr-4 font-serif italic text-2xl">0{i+1}</span>
                <p className="text-sm font-bold text-navy-900 tracking-wide">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9) Dashboard Signals Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl serif text-navy-800 mb-8 leading-tight">Signals that improve <br/><span className="italic">decisions—weekly.</span></h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                Once the Twin is live, your dashboard shows what matters: what people ask, what converts, and where your knowledge gaps are.
              </p>
              <div className="space-y-6">
                {[
                   "Spot content gaps in real-time",
                   "Improve clinical routing based on intent",
                   "Raise the quality of first consultations"
                ].map((l, i) => (
                  <div key={i} className="flex items-center text-sm font-medium text-navy-900 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-4"></span> {l}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy-950 p-8 rounded-[24px] shadow-3xl border border-white/10 overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500">Signals Dashboard</h4>
                  <span className="text-[10px] text-gray-500">Live Updates</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Conversations</p>
                    <p className="text-2xl font-bold text-white">1,284</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Leads Captured</p>
                    <p className="text-2xl font-bold text-gold-500">42</p>
                  </div>
                </div>
                <div className="space-y-4">
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-teal-500"></div>
                   </div>
                   <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest">
                      <span>Self-serve Rate</span>
                      <span className="text-white">67%</span>
                   </div>
                </div>
                {/* Visual Chart Placeholder */}
                <div className="mt-8 h-32 w-full flex items-end gap-1">
                   {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                     <div key={i} style={{ height: `${h}%` }} className="flex-grow bg-white/10 rounded-t-sm"></div>
                   ))}
                </div>
              </div>
              <p className="mt-8 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Data visualised for operational oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10) Outcomes */}
      <section className="py-32 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl serif mb-24">Measured in trust and time saved.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="p-10 border border-white/10 rounded-sm">
              <h3 className="text-2xl serif text-gold-500 mb-4 italic">Less repetition</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light uppercase tracking-wider">Answer routine queries before they hit your team.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-sm">
              <h3 className="text-2xl serif text-gold-500 mb-4 italic">Lower admin load</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light uppercase tracking-wider">Reduce repeated questions across every touchpoint.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-sm">
              <h3 className="text-2xl serif text-gold-500 mb-4 italic">Better enquiries</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light uppercase tracking-wider">Patients arrive more oriented and aligned with your care.</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-[10px] text-gray-500 leading-relaxed italic uppercase tracking-widest">
               * Results depend on your content coverage and routing setup. The system is designed to increase self-serve resolution and enquiry quality over time.
            </p>
          </div>
        </div>
      </section>

      {/* 11) FAQ Section */}
      <section id="faq" className="py-32 bg-white">
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

      {/* 12) Dark CTA Band */}
      <section className="py-32 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl serif mb-12">Ready to install a governed digital front door?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
              Start free trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Request a demo
            </Link>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            Onboarding reach-out within 24 hours. No credit card required.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.05" />
          </svg>
        </div>
      </section>

      {/* 13) Final Compliance Footer */}
      <section className="py-12 bg-white text-center">
         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
           Non-clinical. Not medical advice. Not a medical device. Built for Clinical Integrity.
         </p>
      </section>
    </div>
  );
};

export default Product;
