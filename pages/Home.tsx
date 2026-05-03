
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 bg-paper min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-paper text-ink">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-precise/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          {/* Pill / Target Audience */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-teal-precise/20 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-700 bg-paper">
             <span className="label-mono font-bold text-teal-precise uppercase tracking-[0.4em] text-[10px]">FOR UK SPECIALIST CLINICS</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 tracking-tight text-ink transition-all">
            Your AI front door<br />
            <span className="text-teal-precise italic">for specialist care.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-ink/70 mb-10 leading-relaxed max-w-3xl mx-auto font-serif italic">
            Answer every patient enquiry in your voice, day or night. Turn every conversation into bookings on your calendar.
          </p>
          
          {/* Value Prop */}
          {/* Removed as per request */}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link to="/free-trial" className="w-full sm:w-auto bg-teal-precise text-paper px-10 py-5 font-bold uppercase tracking-widest hover:bg-teal-precise/90 transition-all transform hover:-translate-y-1 shadow-xl shadow-teal-precise/20">
              START FREE TRIAL
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-ink/20 text-ink px-10 py-5 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all">
              BOOK A DEMO
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 label-mono text-[10px] font-bold opacity-60">
             <div className="flex items-center gap-2">
                <span className="text-teal-precise">✓</span> APPROVED SOURCES ONLY
             </div>
             <div className="flex items-center gap-2">
                <span className="text-teal-precise">✓</span> NON-CLINICAL BY DESIGN
             </div>
             <div className="flex items-center gap-2">
                <span className="text-teal-precise">✓</span> LIVE IN 14 DAYS
             </div>
          </div>
        </div>
      </section>

      {/* 1.5. CONTENT GAP SECTION */}
      <section className="py-16 lg:py-24 bg-paper border-b border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-7xl font-sans font-bold leading-[1.1] mb-12 tracking-tight">
                <span className="text-ink">Your content has been working</span> <br />
                <span className="text-ink/20">for the wrong audience.</span>
              </h2>
              
              <div className="space-y-8 text-lg md:text-xl text-ink/70 leading-relaxed font-sans">
                <p>
                  You made the videos. Wrote the articles. Published the book. Recorded the podcasts. Years of unbilled time, hoping it would fill your calendar.
                </p>
                
                <p className="text-ink font-bold">
                  The views came. The bookings didn't.
                </p>
                
                <p>
                  Most patients don't watch a 20-minute video, navigate to your website, fill in a contact form, and wait 48 hours for a reply. They watch halfway. They get distracted. They book someone else next week.
                </p>
                
                <p>
                  NeuraScaleX closes that gap. We unify your existing content into one Knowledge Center, and your AI Clinic Page answers patients using your own materials — at the exact moment they're ready to book.
                </p>
                
                <p className="text-teal-precise italic font-serif text-xl border-l-2 border-teal-precise pl-6 py-2">
                  The content you've already paid for, finally paying you back.
                </p>
              </div>
            </div>
            
            {/* Right Column: Visual Component */}
            <div className="lg:col-span-6 flex flex-col pt-4 font-sans">
              <div className="text-center mb-12">
                <span className="label-mono text-[10px] tracking-[0.4em] text-ink/30 uppercase font-bold mb-4 block">CENTRALIZED SOURCE</span>
                <h3 className="text-3xl font-serif font-bold text-ink">One Knowledge Center</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-t border-ink/5 pt-12">
                <div>
                  <h4 className="label-mono text-[9px] tracking-[0.2em] text-ink/30 uppercase font-bold mb-6">VIDEO LIBRARY</h4>
                  <ul className="space-y-3 text-sm text-ink/60 font-medium">
                    <li>YouTube</li>
                    <li>Webinars</li>
                    <li>Podcasts</li>
                    <li>Conference talks</li>
                  </ul>
                </div>
                
                <div className="border-l border-ink/5 pl-8">
                  <h4 className="label-mono text-[9px] tracking-[0.2em] text-ink/30 uppercase font-bold mb-6">WRITTEN WORK</h4>
                  <ul className="space-y-3 text-sm text-ink/60 font-medium">
                    <li>Articles</li>
                    <li>Book chapters</li>
                    <li>Journal papers</li>
                    <li>FAQs</li>
                  </ul>
                </div>
                
                <div className="border-l border-ink/5 pl-8">
                  <h4 className="label-mono text-[9px] tracking-[0.2em] text-ink/30 uppercase font-bold mb-6">CLINIC KNOWLEDGE</h4>
                  <ul className="space-y-3 text-sm text-ink/60 font-medium">
                    <li>Intake scripts</li>
                    <li>Pricing</li>
                    <li>Service descriptions</li>
                    <li>Insurance pathways</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-teal-precise/5 border border-teal-precise/10 p-10 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-teal-precise/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <p className="text-xl font-bold text-ink mb-2">Every answer routed to a booking.</p>
                  <p className="text-sm text-ink/40 font-serif italic italic-moment">Grounded strictly in your expertise.</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-precise/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-precise/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. THE COST OF DOING NOTHING */}
      <section className="py-16 lg:py-24 bg-paper border-b border-ink/5 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="mb-20 text-center lg:text-left max-w-4xl">
               <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">THE COST OF DOING NOTHING</span>
               <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-[1.1] tracking-tight">
                Every night, patient intent peaks <br/>
                <span className="italic text-teal-precise">and your practice goes silent.</span>
               </h2>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6 text-lg md:text-xl text-ink/70 font-serif italic italic-moment leading-relaxed">
                     <p>
                        Patients don't make decisions at 11am. They make them at 8pm. At midnight. On weekends. On bank holidays. When your team is unavailable.
                     </p>
                     <p>
                        They arrive with questions. They hit the contact form. They abandon it. They book elsewhere.
                     </p>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl text-ink/70 font-serif italic italic-moment leading-relaxed">
                     <p>
                        This isn't a marketing problem. It's an availability problem — the gap between patient intent and practice response.
                     </p>
                     <p className="text-ink font-bold not-italic">
                        The first specialist to answer safely and consistently — wins.
                     </p>
                  </div>
               </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-10 border border-ink/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[300px] group">
                    <div className="w-12 h-1 px-0 bg-ink/10 mb-8 overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-ink transition-all duration-700"></div>
                    </div>
                    <div>
                        <div className="text-7xl font-serif font-bold text-ink mb-6 tracking-tighter">67%</div>
                        <p className="label-mono uppercase tracking-widest text-[11px] text-ink/40 font-bold leading-relaxed">
                            of enquiries happen <br/>outside business hours
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-10 border border-ink/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[300px] group">
                    <div className="w-12 h-1 px-0 bg-teal-precise/10 mb-8 overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-teal-precise transition-all duration-700"></div>
                    </div>
                    <div>
                        <div className="text-7xl font-serif font-bold text-teal-precise mb-6 tracking-tighter">92%</div>
                        <p className="label-mono uppercase tracking-widest text-[11px] text-ink/40 font-bold leading-relaxed">
                            of patients who reach <br/>a contact form abandon it
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-10 border border-ink/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[300px] group">
                    <div className="w-12 h-1 px-0 bg-teal-precise/10 mb-8 overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-teal-precise transition-all duration-700"></div>
                    </div>
                    <div>
                        <div className="text-7xl font-serif font-bold text-ink/20 mb-6 tracking-tighter">£0</div>
                        <p className="label-mono uppercase tracking-widest text-[11px] text-ink/40 font-bold leading-relaxed">
                            return from voicemail once <br/>the patient has moved on
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
              <p className="label-mono opacity-30 uppercase tracking-[0.5em] text-[10px] font-bold italic font-serif italic-moment">The first one to answer wins.</p>
            </div>
        </div>
      </section>

      {/* 3. THE PRODUCT */}
      <section className="py-20 bg-paper text-ink overflow-hidden border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20 text-center">
               <span className="label-mono text-teal-precise mb-6 block opacity-100 font-bold uppercase text-[10px] tracking-[0.4em]">TWO PRODUCTS · ONE PLATFORM</span>
               <h2 className="text-5xl md:text-8xl font-serif text-ink mb-2 leading-tight tracking-tight">
                One front door.
               </h2>
               <h2 className="text-5xl md:text-8xl font-serif text-teal-precise italic mb-10 leading-tight tracking-tight">
                One intelligence layer.
               </h2>
               <p className="text-xl text-ink/60 font-serif italic italic-moment max-w-3xl mx-auto">
                 The first works on your patients. The second works on you.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* FOR PATIENTS - The AI Clinic Page */}
                <div className="bg-white text-ink p-10 md:p-16 rounded-none relative flex flex-col h-full shadow-2xl border border-ink/5">
                    <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-widest opacity-100">For Patients</span>
                    <h3 className="text-4xl font-serif mb-6 leading-tight">The AI Clinic Page</h3>
                    <p className="text-ink/70 leading-relaxed mb-10 font-serif italic italic-moment text-lg">
                        A dedicated, shareable URL that becomes your patient's entry point. Not a website. Not a chatbot widget. A standalone front door that answers in your voice, signposts to bookings, and captures every conversation.
                    </p>
                    
                    <ul className="space-y-6 mb-12 flex-grow">
                        {[
                            { label: "Custom URL — ask.yourname.co.uk", bold: true },
                            { label: "Trained on your approved content only" },
                            { label: "Answers patient questions 24/7 in your voice" },
                            { label: "Signposts to bookings, services, and resources" },
                            { label: "Every conversation captured as a lead" },
                            { label: "Live in 14 days from sign-up" }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm font-medium border-b border-ink/5 pb-4 last:border-0 group">
                                <span className="w-6 h-6 rounded-none bg-teal-precise text-paper flex items-center justify-center text-[10px] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-teal-precise/20">✓</span>
                                <span className={item.bold ? "font-bold text-ink" : "text-ink/60 font-serif italic"}>{item.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-8 mt-auto border-t border-ink/5">
                        <p className="label-mono text-[9px] uppercase tracking-widest font-bold text-ink/30">Your digital reputation, secured.</p>
                    </div>
                </div>

                {/* FOR YOU - The Intelligence Dashboard */}
                <div className="bg-teal-precise/5 text-ink p-10 md:p-16 border border-teal-precise/10 rounded-none relative flex flex-col h-full">
                    <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-widest opacity-100">For You</span>
                    <h3 className="text-4xl font-serif mb-6 leading-tight text-teal-precise">The Intelligence Dashboard</h3>
                    <p className="text-ink/60 leading-relaxed mb-10 font-serif italic text-lg">
                        The clinician-facing intelligence layer. Not a reporting tool. The strategic asset that tells you exactly what your patients want — before they ask, before they book, before they leave.
                    </p>
                    
                    <ul className="space-y-6 mb-12 flex-grow">
                        {[
                            { label: "Top patient questions, ranked by frequency" },
                            { label: "Peak hours analysis — when patients need you" },
                            { label: "Lead capture with full conversation context" },
                            { label: "Content gaps — topics patients ask but you haven't covered" },
                            { label: "Booking intent signals from conversation patterns" },
                            { label: "Weekly intelligence report delivered automatically" }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm font-medium border-b border-ink/5 pb-4 last:border-0 group">
                                <span className="w-6 h-6 rounded-none bg-teal-precise text-paper flex items-center justify-center text-[10px] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-teal-precise/20">✓</span>
                                <span className="text-ink/60 font-serif italic">{item.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-8 mt-auto border-t border-ink/10">
                        <p className="label-mono text-[9px] uppercase tracking-widest font-bold text-ink/20">Actionable signals, zero noise.</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-20 text-center">
                <p className="label-mono opacity-20 uppercase tracking-[0.5em] text-[10px] font-bold">The clinician-led platform.</p>
            </div>
        </div>
      </section>

      {/* 6. LIVE PILOTS */}
      <section className="py-20 bg-paper relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
           <div className="text-center mb-24">
              <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">LIVE PILOTS</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-8 leading-tight tracking-tight">
                Specialist clinics already live <br />
                <span className="text-teal-precise italic">on NeuraScaleX.</span>
              </h2>
              <p className="text-xl text-ink/60 font-serif italic max-w-3xl mx-auto leading-relaxed">
                Interact with secure, specialist-trained AI assistants from our early pilot partners. See exactly what your patients will experience.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Card 1: Berkshire Pain Clinic */}
              <div className="bg-white rounded-none p-10 shadow-2xl border border-ink/5 flex flex-col h-full hover:shadow-3xl transition-all group scale-100 hover:scale-[1.02] duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-none bg-paper flex items-center justify-center border border-ink/10 overflow-hidden shadow-inner">
                      <img src="/images/berkshire-pain-clinic.png" alt="Berkshire Pain Clinic" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-none border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[11px] font-bold tracking-widest text-green-700 uppercase label-mono">LIVE PILOT</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-4xl font-serif font-bold text-ink mb-3 leading-tight text-teal-precise">Berkshire Pain Clinic</h3>
                  <p className="text-[12px] font-bold tracking-[0.2em] text-ink/30 uppercase label-mono">
                    SPECIALIST CLINIC <span className="mx-3 text-ink/10">•</span> READING, UK
                  </p>
                </div>

                <p className="text-xl text-ink/60 leading-relaxed mb-10 flex-grow font-serif italic italic-moment">
                  "A multi-disciplinary clinic using the AI Clinic Page to triage complex referrals, explain insurance pathways, and answer admin queries 24/7."
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  <span className="text-[10px] font-bold tracking-widest text-teal-precise px-4 py-2 border border-teal-precise/20 rounded-none uppercase bg-teal-precise/5 label-mono">AI ASSISTANT</span>
                  <span className="text-[10px] font-bold tracking-widest text-teal-precise px-4 py-2 border border-teal-precise/20 rounded-none uppercase bg-teal-precise/5 label-mono">TRIAGE</span>
                  <span className="text-[10px] font-bold tracking-widest text-teal-precise px-4 py-2 border border-teal-precise/20 rounded-none uppercase bg-teal-precise/5 label-mono">INTAKE</span>
                </div>

                <div className="space-y-4">
                  <a href="https://askdeepak.neurascalex.com/" target="_blank" rel="noopener noreferrer" className="w-full bg-ink text-paper py-6 rounded-none text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-teal-precise transition-all shadow-2xl shadow-ink/10 group active:scale-95 label-mono">
                    Visit the live page
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2: Berkshire Psychiatrist Clinic */}
              <div className="bg-white rounded-none p-10 shadow-2xl border border-ink/5 flex flex-col h-full hover:shadow-3xl transition-all group scale-100 hover:scale-[1.02] duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-none bg-paper flex items-center justify-center border border-ink/10 overflow-hidden shadow-inner">
                      <img src="/images/Psychiatry-Dr-Abrar.png" alt="Berkshire Psychiatrist Clinic" className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-none border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[11px] font-bold tracking-widest text-green-700 uppercase label-mono">LIVE PILOT</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-4xl font-serif font-bold text-ink mb-3 leading-tight text-teal-precise">Berkshire Psychiatrist Clinic</h3>
                  <p className="text-[12px] font-bold tracking-[0.2em] text-ink/30 uppercase label-mono">
                    CONSULTANT PSYCHIATRIST <span className="mx-3 text-ink/10">•</span> UK
                  </p>
                </div>

                <p className="text-xl text-ink/60 leading-relaxed mb-10 flex-grow font-serif italic italic-moment">
                  "Deploying the AI Clinic Page to manage intake for private psychiatry practice and streamline new patient onboarding."
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  <span className="text-[10px] font-bold tracking-widest text-teal-precise px-4 py-2 border border-teal-precise/20 rounded-none uppercase bg-teal-precise/5 label-mono">INTAKE</span>
                  <span className="text-[10px] font-bold tracking-widest text-teal-precise px-4 py-2 border border-teal-precise/20 rounded-none uppercase bg-teal-precise/5 label-mono">ONBOARDING</span>
                </div>

                <div className="space-y-4">
                  <a href="https://askabrar.neurascalex.com/" target="_blank" rel="noopener noreferrer" className="w-full bg-ink text-paper py-6 rounded-none text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-teal-precise transition-all shadow-2xl shadow-ink/10 group active:scale-95 label-mono">
                    Visit the live page
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
           </div>

           <div className="mt-24 text-center border-t border-ink/5 pt-24">
              <div className="flex flex-col items-center gap-8">
                <Link to="/specialist-hub" className="bg-paper border border-ink/10 text-ink px-12 py-5 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all shadow-xl label-mono flex items-center gap-4 group">
                   See all pilots & specialists
                   <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </Link>
                <p className="label-mono text-[10px] text-ink/30 uppercase tracking-[0.3em] font-bold">New pilot partners added weekly</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6.5. WHERE THIS LEADS - TRANSFORMATION */}
      <section className="py-20 lg:py-24 bg-paper border-b border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-24">
            <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">WHERE THIS LEADS</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-[1.1] tracking-tight">
              The specialist who built the system, <br />
              <span className="italic text-teal-precise">not just the content.</span>
            </h2>
            <p className="text-xl md:text-2xl text-ink/60 font-serif italic max-w-3xl mx-auto leading-relaxed">
              In 90 days, the clinicians who deploy <br className="hidden md:block" /> NeuraScaleX go from fragmented to systemic.
            </p>
          </div>

          {/* Transformation Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/5 border border-ink/5 mb-24">
            {/* Headers */}
            <div className="bg-ink/2 pr-12 pl-4 py-6 border-b border-ink/5 hidden md:block">
              <span className="label-mono text-[10px] tracking-[0.5em] text-ink/30 uppercase font-bold">BEFORE</span>
            </div>
            <div className="bg-teal-precise/2 pr-12 pl-12 py-6 border-b border-ink/5 hidden md:block">
              <span className="label-mono text-[10px] tracking-[0.5em] text-teal-precise/50 uppercase font-bold">AFTER</span>
            </div>

            {/* Row 1 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/20 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/40 font-serif italic">Content scattered <br className="hidden sm:block" /> across channels</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/40 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Content unified <br className="hidden sm:block" /> in one Knowledge Center</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/20 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/40 font-serif italic">Patients leaving the <br className="hidden sm:block" /> contact form unanswered</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/40 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Patients booked through <br className="hidden sm:block" /> a 24/7 AI front door</p>
            </div>

            {/* Row 3 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/20 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/40 font-serif italic">Secretary stuck answering <br className="hidden sm:block" /> the same five questions</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/40 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Secretary freed for the <br className="hidden sm:block" /> work that needs a human</p>
            </div>

            {/* Row 4 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/20 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/40 font-serif italic">No idea which content <br className="hidden sm:block" /> converts a patient</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/40 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Every conversation tracked, <br className="hidden sm:block" /> every booking attributed</p>
            </div>
          </div>

          {/* Closing Line */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block h-px w-12 bg-teal-precise/20 mb-12"></div>
            <p className="text-2xl md:text-4xl text-ink font-serif italic leading-snug">
              You stop being a clinician with a content problem. <br className="hidden md:block" />
              <span className="text-teal-precise font-bold not-italic">You become a clinician with a growth system.</span>
            </p>
          </div>

        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-16 bg-[#F9F7F2] border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <span className="label-mono text-teal-precise mb-4 block opacity-100 font-bold uppercase text-[10px] tracking-[0.3em]">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">From application to live<br /><span className="italic text-teal-precise text-3xl md:text-4xl">in fourteen days.</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  num: "01", 
                  title: "Apply", 
                  desc: "Complete the 12-field Free Trial application. Takes under 3 minutes." 
                },
                { 
                  num: "02", 
                  title: "Discovery call", 
                  desc: "30-minute call to understand your practice, your patients, your goals." 
                },
                { 
                  num: "03", 
                  title: "Build & approve", 
                  desc: "We build your AI Clinic Page in 7 days. You review and approve every word." 
                },
                { 
                  num: "04", 
                  title: "Live", 
                  desc: "Page goes live with your custom URL. Conversations start day one. Dashboard populates immediately." 
                }
              ].map((s, i) => (
                <div key={i} className="bg-paper p-10 rounded-none border border-ink/10 flex flex-col min-h-[380px] shadow-sm hover:shadow-md transition-shadow">
                   <span className="label-mono text-teal-precise mb-12 block opacity-100 font-bold tracking-[0.4em] text-xs transition-transform group-hover:translate-x-1">{s.num}</span>
                   <h3 className="text-3xl font-serif text-ink mb-6 tracking-tight pr-4">{s.title}</h3>
                   <p className="text-ink/70 font-light leading-relaxed font-serif text-lg">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. SAFETY */}
      <section className="py-16 bg-teal-precise/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-ink mb-4">Designed to protect trust.</h2>
              <p className="text-lg text-teal-precise font-light italic-moment font-serif italic">Approved sources. Clear boundaries. Controlled behaviour.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Approved Sources Only", text: "Only the materials you approve—website pages, FAQs, documents, and vetted content." },
                { title: "Scope Boundaries You Control", text: "Non-clinical by design. No diagnosis or medication advice. Clear limits defined per clinician and practice." },
                { title: "Safe Refusal & Signposting", text: "If a query crosses into clinical advice or urgent risk, the AI Assistant declines and signposts appropriately." },
                { title: "Conversation Logs & Improvement", text: "Review conversations, refine boundaries, and update approved sources as your practice evolves." },
              ].map((card, i) => (
                <div key={i} className="bg-paper p-8 rounded-none border border-teal-precise/10 shadow-sm hover:border-teal-precise transition-all">
                   <h3 className="label-mono text-ink mb-4 min-h-[40px] opacity-100 font-bold uppercase">{card.title}</h3>
                   <p className="text-sm text-ink/70 leading-relaxed font-light font-serif italic italic-moment">{card.text}</p>
                </div>
              ))}
           </div>
           
           <div className="text-center mt-12 pt-8 border-t border-ink/5">
              <p className="label-mono opacity-100 font-bold uppercase text-[9px] tracking-[0.4em] text-ink/20">Non-clinical. Not medical advice. Not a medical device.</p>
           </div>
        </div>
      </section>

      {/* 9. THE OFFER */}
      <section className="py-20 bg-paper text-ink overflow-hidden border-y border-ink/5" id="offer">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                {/* Left: The Offer Details */}
                <div className="lg:w-2/3">
                    <span className="label-mono text-teal-precise mb-4 block font-bold uppercase text-[10px] tracking-[0.3em] opacity-100">The Offer</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                        Start the trial that <br/>
                        <span className="text-teal-precise italic">fills your calendar.</span>
                    </h2>
                    <p className="text-xl text-teal-precise font-serif mb-8 italic italic-moment">
                        30 days free. No credit card required.
                    </p>
                    <p className="text-ink/60 text-lg leading-relaxed mb-12 max-w-2xl font-serif">
                        30 days free. Live in 14 days. Cancel any time in the first month. We build your AI Clinic Page, you approve every word, and your Knowledge Center starts converting patients from day one.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            "✓ APPROVED SOURCES ONLY",
                            "✓ NON-CLINICAL BY DESIGN",
                            "✓ NO COMMITMENT BEYOND DAY 30",
                            "Full deployment within 14 days",
                            "Direct access to strategy team",
                            "Locked-in pricing for the first year"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm group">
                                <span className={item.startsWith('✓') ? "hidden" : "w-5 h-5 rounded-none bg-teal-precise text-paper flex items-center justify-center text-[10px] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-teal-precise/20"}>
                                  {item.startsWith('✓') ? "" : "✓"}
                                </span>
                                <span className="text-ink/80 font-serif italic">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: The CTA Card */}
                <div className="lg:w-1/3 w-full">
                    <div className="bg-white text-ink p-10 md:p-12 rounded-none shadow-2xl relative border-t-8 border-teal-precise border-x border-b border-ink/5">
                        <span className="label-mono text-teal-precise mb-10 block font-bold uppercase text-[10px] tracking-[0.3em] opacity-100">Free Pilot</span>
                        
                        <div className="mb-12">
                            <div className="text-6xl md:text-7xl font-serif font-bold text-ink mb-2 tracking-tighter">£0</div>
                            <p className="label-mono uppercase tracking-[0.2em] text-[11px] text-ink font-bold mb-4">First 30 days</p>
                            <div className="h-px w-full bg-ink/5 mb-6"></div>
                            <p className="text-ink/60 text-sm leading-relaxed font-serif italic">
                                Then £299/month from day 31. <br/>
                                <span className="font-bold text-ink mt-1 block">Cancel anytime in the first 30 days.</span>
                            </p>
                        </div>

                        <Link to="/free-trial" className="block w-full bg-ink text-paper py-6 text-center text-xs font-bold uppercase tracking-[0.2em] rounded-none hover:bg-teal-precise transition-all shadow-xl mb-8 label-mono opacity-100">
                            Apply now
                        </Link>

                        <div className="space-y-4 pt-6 border-t border-ink/5">
                            <p className="text-[10px] label-mono uppercase text-ink/30 tracking-[0.15em] leading-relaxed font-bold">
                                Application takes under 5 minutes. <br/>
                                We respond within 24 hours.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center lg:text-left">
                        <p className="label-mono text-[9px] uppercase tracking-[0.5em] text-ink/20 font-bold">Pilot cohort now open.</p>
                    </div>
                </div>

            </div>
        </div>
      </section>
      {/* 11. FINAL CTA */}
      <section className="py-20 bg-paper text-ink text-center relative overflow-hidden border-t border-ink/5">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-8xl font-serif mb-8 text-ink leading-tight tracking-tight">Get started with NeuraScaleX today.</h2>
            <p className="text-xl md:text-2xl text-ink/60 font-serif italic mb-16 max-w-2xl mx-auto leading-relaxed">
              Join the UK specialist clinics turning every patient question into a booking on the calendar.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
               <Link to="/demo" className="w-full sm:w-auto bg-ink text-paper px-12 py-6 rounded-none font-bold uppercase tracking-widest shadow-2xl hover:bg-teal-precise transition-all label-mono opacity-100">BOOK A DEMO</Link>
               <Link to="/free-trial" className="w-full sm:w-auto border border-ink/20 text-ink px-12 py-6 rounded-none font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono opacity-100">START FREE TRIAL</Link>
            </div>
            
            <p className="label-mono lowercase opacity-20 font-bold tracking-widest">Onboarding reach-out within 24 hours. No credit card required.</p>
         </div>
      </section>

    </div>
  );
};

export default Home;
