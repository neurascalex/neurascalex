
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // Animation loop for Hero Visual
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen">
      
      {/* Hero Section - Centered, Spacious, Authoritative */}
      <section id="overview" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-900 text-white">
        
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30">
              <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-teal-900/40 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px]"></div>
           </div>
           {/* Grid Pattern Overlay */}
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          {/* Trust Badge / Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 animate-in fade-in slide-in-from-bottom-3 duration-700 backdrop-blur-sm">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">Accepting New Pilots</span>
          </div>

          {/* Main Headline - Large & Readable */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl serif leading-[1.05] mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Your Expertise. Scaled. <br />
            Your Authority. Elevated. <br />
            <span className="text-gold-500 italic">Your Digital Twin.</span>
          </h1>

          {/* Tagline - The Promise */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 font-serif italic">
            A 24/7 website assistant that answers routine questions safely—plus an Intelligence dashboard showing what patients need and what to do next.
          </p>
          
          {/* Description - The Mechanism */}
          <p className="text-base md:text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            NeuraScaleX reduces repetitive admin, protects boundaries, and guides people to the right next step—so you can focus on care, not your inbox.
          </p>

          {/* Primary CTAs - Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
            <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1">
              Start Free Trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all hover:border-white/40">
              Request a Demo
            </Link>
          </div>

          {/* Trust Indicators - Reassurance */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <div className="flex items-center gap-2 group cursor-default">
                <svg className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="group-hover:text-white transition-colors">Approved sources only</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <svg className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <span className="group-hover:text-white transition-colors">Non-clinical by design</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <svg className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="group-hover:text-white transition-colors">Live in 7 days</span>
              </div>
          </div>
        </div>

        {/* Central Visual - The Interface Anchor */}
        <div className="mt-20 max-w-6xl mx-auto px-6 relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
           <div className="bg-navy-800 rounded-t-xl shadow-2xl border border-white/10 p-2 pb-0 relative">
             <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
             
             {/* Browser/Window Chrome */}
             <div className="bg-navy-950 rounded-t-lg h-8 flex items-center px-4 space-x-2 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-4 bg-white/5 rounded-md h-4 w-64 hidden sm:block"></div>
             </div>

             <div className="bg-warm-white h-[400px] md:h-[500px] rounded-b-lg overflow-hidden flex relative">
                
                {/* Simulated Website Content (Background) */}
                <div className="flex-grow p-8 md:p-12 opacity-80 blur-[1px] md:blur-0 transition-all duration-500">
                   <div className="max-w-3xl mx-auto">
                      <div className="flex items-center gap-4 mb-12">
                         <div className="w-16 h-16 bg-navy-100 rounded-full"></div>
                         <div className="space-y-2">
                            <div className="h-4 w-48 bg-navy-200 rounded"></div>
                            <div className="h-3 w-32 bg-gray-200 rounded"></div>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <div className="h-8 w-3/4 bg-navy-900/10 rounded"></div>
                         <div className="h-4 w-full bg-gray-100 rounded"></div>
                         <div className="h-4 w-full bg-gray-100 rounded"></div>
                         <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
                      </div>
                      <div className="mt-12 grid grid-cols-3 gap-6">
                         <div className="h-32 bg-gray-50 rounded border border-gray-100"></div>
                         <div className="h-32 bg-gray-50 rounded border border-gray-100"></div>
                         <div className="h-32 bg-gray-50 rounded border border-gray-100"></div>
                      </div>
                   </div>
                </div>

                {/* The Digital Twin Overlay (Foreground) */}
                <div className="absolute bottom-0 right-4 md:right-12 w-[340px] md:w-[380px] bg-navy-900 rounded-t-xl shadow-2xl border-x border-t border-white/10 flex flex-col transform translate-y-0 transition-transform duration-500">
                    {/* Twin Header */}
                    <div className="p-4 border-b border-white/10 bg-navy-950 rounded-t-xl flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="relative">
                             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-navy-900 border border-white/20 flex items-center justify-center text-white font-serif font-bold">SC</div>
                             <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-navy-900 rounded-full"></div>
                          </div>
                          <div>
                             <p className="text-white text-xs font-bold">Dr. Sarah Chen (Twin)</p>
                             <p className="text-[9px] text-gold-500 uppercase tracking-wider">Approved Sources Only</p>
                          </div>
                       </div>
                       <button className="text-gray-500 hover:text-white">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                       </button>
                    </div>

                    {/* Twin Body */}
                    <div className="p-5 h-[320px] bg-navy-900 flex flex-col space-y-4">
                       {/* Message 1 */}
                       <div className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0"></div>
                          <div className="bg-white/5 p-3 rounded-lg rounded-tl-none border border-white/5">
                             <p className="text-xs text-gray-300 leading-relaxed">
                                Hello. I am Dr. Chen's Digital Twin. I can answer questions about the clinic, fees, and pathways based on her approved material.
                             </p>
                          </div>
                       </div>

                       {/* Message 2 (Dynamic) */}
                       <div className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0"></div>
                          <div className="bg-white/5 p-3 rounded-lg rounded-tl-none border border-white/5">
                             <p className="text-xs text-gray-300 leading-relaxed">
                                {activeStep === 0 ? "How can I help you today?" : 
                                 activeStep === 1 ? "Dr. Chen's initial assessment is 60 minutes. We cover clinical history and lifestyle factors." : 
                                 "I cannot provide a diagnosis here, but I can help you book an assessment."}
                             </p>
                          </div>
                       </div>

                       {/* User Reply Simulation */}
                       {activeStep > 0 && (
                          <div className="flex items-start justify-end gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                             <div className="bg-teal-900/50 p-3 rounded-lg rounded-tr-none border border-teal-500/20">
                                <p className="text-xs text-teal-100 leading-relaxed">
                                   {activeStep === 1 ? "How long is the first appointment?" : "Can you diagnose my back pain?"}
                                </p>
                             </div>
                             <div className="w-6 h-6 rounded-full bg-teal-500 flex-shrink-0"></div>
                          </div>
                       )}

                       {/* Interactive Chips */}
                       <div className="mt-auto pt-2 grid grid-cols-2 gap-2">
                          <div className="bg-white/5 border border-white/10 p-2 rounded text-[9px] text-center text-gray-400 hover:bg-white/10 cursor-pointer transition-colors">
                             Fees & Insurance
                          </div>
                          <div className="bg-gold-500/10 border border-gold-500/20 p-2 rounded text-[9px] text-center text-gold-500 hover:bg-gold-500/20 cursor-pointer transition-colors">
                             Book Consultation
                          </div>
                       </div>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* The Tension (Repetition & Misrepresentation) - UPDATED SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl serif text-navy-900 mb-6 leading-tight">
              You Are the Bottleneck. <br />
              <span className="text-gray-400 font-light">(And That's Costing You 40% of Your Time.)</span>
            </h2>
            <p className="text-xl md:text-2xl text-navy-800 font-medium mb-6 max-w-3xl mx-auto">
              Your value is clinical judgment—not answering the same questions daily or explaining your fees for the 47th time.
            </p>
            <p className="text-base text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              But here's the real risk: Generic AI is already generating answers in your domain without your standards. You're not just invisible. You're being misrepresented.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Card: Manual Chaos */}
            <div className="bg-[#FFF5F5] rounded-[2rem] p-10 md:p-12 border border-red-100 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl serif text-navy-900 font-bold">Manual Chaos Today</h3>
              </div>

              <ul className="space-y-6 mb-10 flex-grow">
                {[
                  "\"How much is a consult?\"",
                  "\"Do you treat children?\"",
                  "\"Are you covered by AXA?\"",
                  "\"What's your approach to [condition]?\"",
                  "\"Can I book for next week?\""
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-red-900/70 italic font-medium text-lg">
                    <span className="text-red-400 mr-4 mt-2 text-[8px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-red-200/50">
                <p className="text-xs font-bold text-red-900 uppercase tracking-widest leading-relaxed">
                  Repeated endlessly. Your expertise fragmented. Your time consumed by orientation.
                </p>
              </div>
            </div>

            {/* Right Card: Digital Twin */}
            <div className="bg-[#F0F7FF] rounded-[2rem] p-10 md:p-12 border border-blue-100 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl serif text-navy-900 font-bold">With Your Digital Twin</h3>
              </div>

              <ul className="space-y-6 mb-10 flex-grow">
                {[
                  "Your expertise—organized, accessible, safe",
                  "Patients arrive informed, fees understood",
                  "Questions answered from YOUR content only",
                  "High-intent enquiries reach your inbox",
                  "You focus on clinical judgment only"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-navy-800 font-medium text-lg">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-blue-200/50">
                <p className="text-xs font-bold text-blue-900 uppercase tracking-widest leading-relaxed">
                  Your Twin handles the repetition. You handle what matters.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legacy Timeline (MOVED UP) */}
      <section className="py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl serif mb-6 leading-tight">
              You Give Us 45 Minutes. <br />
              <span className="text-gold-500 italic">We Give You a Legacy.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/50 to-transparent hidden md:block"></div>
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-white/10 md:hidden"></div>

            <div className="space-y-20">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                 {/* Icon - Center aligned on desktop */}
                 <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                 </div>
                 
                 {/* Content - Alternating sides on desktop */}
                 <div className="pl-20 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2 block">Day 1</span>
                    <h3 className="text-2xl serif text-white mb-3">The Download</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      45-minute interview to map 'Hard Boundaries' and voice.
                    </p>
                 </div>
                 {/* Empty side for layout balance */}
                 <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                 <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                 </div>
                 
                 <div className="hidden md:block md:w-1/2"></div>
                 <div className="pl-20 md:pl-16 md:w-1/2 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2 block">Days 2-5</span>
                    <h3 className="text-2xl serif text-white mb-3">The Ghost Build</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      Zero effort from you. We research your papers, videos, and website to build the knowledge base.
                    </p>
                 </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                 <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                 </div>
                 
                 <div className="pl-20 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2 block">Day 7</span>
                    <h3 className="text-2xl serif text-white mb-3">The Handover</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      15-minute verification call. You log in, you verify, we deploy.
                    </p>
                 </div>
                 <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          </div>
          
          {/* Optional background dots like in image */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>
      </section>

      {/* The 3 Modules (One System. Three Layers.) */}
      <section id="modules" className="py-32 bg-softgreen border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl serif text-navy-800 mb-8 leading-tight">One System. Three Layers. <br/><span className="italic">Zero Hallucinations.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "1",
                title: "FRONT DOOR",
                subtitle: "Deflect & Educate",
                intro: "Embedded on your website, your Digital Twin answers:",
                bullets: [
                  "What's your approach to [condition]?",
                  "How much does a consultation cost?",
                  "Do you work with [insurance provider]?",
                  "What programmes do you offer?"
                ],
                result: "Result: Patients arrive informed. Staff stops repeating."
              },
              {
                num: "2",
                title: "SIGNALS",
                subtitle: "Intelligence Dashboard",
                intro: "See what patients are really asking:",
                bullets: [
                  "12 people asked about ADHD protocols",
                  "Top concern: medication side effects",
                  "Content gap identified: insurance",
                  "Peak question time: Sundays at 10 PM"
                ],
                result: "Result: You know what to create before they ask.",
                dark: true
              },
              {
                num: "3",
                title: "ACTIONS",
                subtitle: "Smart Routing",
                intro: "High-intent patients get the right next step:",
                bullets: [
                  "Booking links (when ready)",
                  "Programme enrollment (when qualified)",
                  "Safety escalation (clinical advice)",
                  "Resource library (seeking info)"
                ],
                result: "Result: Your inbox has only qualified enquiries."
              }
            ].map((module, i) => (
              <div key={i} className={`p-10 rounded-[24px] shadow-2xl border flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 ${module.dark ? 'bg-navy-900 border-navy-800 text-white' : 'bg-white border-gray-100'}`}>
                <div className={`absolute top-0 right-0 p-6 text-6xl serif opacity-10 font-bold ${module.dark ? 'text-gold-500' : 'text-teal-800'}`}>
                  {module.num}
                </div>
                <h3 className={`text-2xl font-bold uppercase tracking-widest mb-2 ${module.dark ? 'text-gold-500' : 'text-navy-900'}`}>{module.title}</h3>
                <p className={`text-lg serif italic mb-8 ${module.dark ? 'text-white' : 'text-teal-800'}`}>{module.subtitle}</p>
                
                <p className={`text-sm mb-6 font-medium ${module.dark ? 'text-gray-300' : 'text-gray-600'}`}>{module.intro}</p>

                <ul className="space-y-3 mb-12 flex-grow">
                  {module.bullets.map((b, j) => (
                    <li key={j} className="text-sm flex items-start leading-relaxed">
                      <span className="text-gold-500 mr-3 mt-0.5">●</span> 
                      <span className={module.dark ? 'text-gray-400' : 'text-gray-500'}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className={`pt-6 border-t ${module.dark ? 'border-white/10' : 'border-gray-50'}`}>
                   <span className={`text-[10px] font-bold uppercase tracking-widest ${module.dark ? 'text-gold-500' : 'text-teal-800'}`}>{module.result}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto italic leading-relaxed">
              "Your Digital Twin doesn't just answer questions—it learns what your patients need and routes them intelligently."
            </p>
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
            {/* Card 1: Website Widget */}
            <div className="bg-warm-white p-12 rounded-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-teal-800">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl serif text-navy-900 mb-4">Website Widget</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Primary placement. Works with Webflow, WordPress, Squarespace, and custom sites.
              </p>
            </div>

            {/* Card 2: Shareable Link */}
            <div className="bg-warm-white p-12 rounded-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-teal-800">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-2.46-4.743l5.353-5.353" />
                </svg>
              </div>
              <h4 className="text-2xl serif text-navy-900 mb-4">Shareable Link</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Use in LinkedIn bios, email footers, WhatsApp, or direct messages.
              </p>
            </div>

            {/* Card 3: QR Code */}
            <div className="bg-warm-white p-12 rounded-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-teal-800">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="text-2xl serif text-navy-900 mb-4">QR Code</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Perfect for clinics, events, printed guides, and physical touchpoints.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/free-trial" className="bg-navy-800 text-gold-500 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-navy-950 transition-all shadow-xl">Start free trial</Link>
            <Link to="/demo" className="bg-white border border-gray-200 text-navy-800 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">Request demo</Link>
          </div>
        </div>
      </section>

      {/* NEW PRICING SECTION (Replacing separate Pricing Page) */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-navy-900 rounded-[2rem] p-8 md:p-16 text-white relative shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Column */}
              <div>
                <h2 className="text-4xl md:text-5xl serif mb-4 leading-tight">Start Your 30-Day Free Trial Today</h2>
                <p className="text-gray-300 mb-8 font-light">Try your Digital Twin risk-free:</p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Full platform access for 30 days",
                    "Built from your content (45-min setup call)",
                    "Live on your website in 7 days",
                    "No credit card required to start",
                    "Cancel anytime—no questions asked"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-light text-gray-100">{feature}</span>
                    </li>
                  ))}
                  {/* Added White-Glove Item */}
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-light text-gray-100">
                       <strong className="font-bold text-white">White-Glove Build:</strong> Personal setup & calibration <span className="text-gold-500 font-bold">(Value: £3,000)</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-center lg:items-end">
                 <div className="text-center lg:text-right mb-8">
                   <div className="flex flex-col items-end mb-4">
                      <span className="text-gray-400 text-sm line-through decoration-red-500/50">Setup Fee: £3,000</span>
                      <span className="text-gold-500 font-bold uppercase tracking-widest text-sm bg-white/10 px-2 py-1 rounded">Waived (First 50 Customers)</span>
                   </div>
                   <p className="text-6xl font-serif font-bold text-white mb-2">£99<span className="text-2xl font-light text-gray-400">/mo</span></p>
                   <p className="text-xs text-gray-400 uppercase tracking-widest">Then just one simple price. <br/>No hidden fees. No lock-in.</p>
                 </div>
                 
                 <div className="w-full max-w-sm flex flex-col gap-4">
                   <Link 
                     to="/free-trial"
                     className="w-full bg-gold-500 text-navy-950 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-gold-600 transition-all shadow-xl text-center"
                   >
                     Start Free Trial
                   </Link>
                 </div>
              </div>
            </div>
            
            {/* Limited Capacity Banner */}
            <div className="mt-12 bg-navy-800/50 border border-orange-500/30 rounded-lg p-6 text-center max-w-3xl mx-auto">
               <p className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2">Limited Onboarding Capacity</p>
               <p className="text-sm text-gray-300 font-light">
                 We personally onboard every practitioner to ensure clinical safety. Currently accepting 10 practitioners this quarter.
               </p>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Safety & Governance Pillars */}
      <section id="safety" className="py-32 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl serif mb-8 leading-tight">Built for Clinical Integrity. <br/><span className="italic">Not Just "Another AI Tool."</span></h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Your Digital Twin is engineered with defense-first architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { t: "Approved Sources Only", d: "No web scraping. No hallucinations. Only your verified content—papers, videos, website, FAQs." },
              { t: "Hard-Coded Boundaries", d: "Cannot give medical advice or diagnosis—by design. Built with clinical safety protocols." },
              { t: "Intelligent Refusal", d: "Knows when to say: 'I can't answer that—please contact the clinic directly for clinical questions.'" },
              { t: "Full Auditability", d: "Review every conversation log. Refine boundaries. Maintain complete control over what your Twin says." }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-navy-900 border border-white/10 rounded-sm hover:border-gold-500/50 transition-colors">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-6">{p.t}</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] text-center">
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
