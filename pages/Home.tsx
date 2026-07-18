
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "NeuraScaleX",
        "url": "https://www.neurascalex.com"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Ask Dr [Name] by NeuraScaleX",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A governed AI first-conversation page for UK specialist clinicians. Answers patient questions 24/7 from clinician-approved content only; educational and signposting, never diagnostic.",
        "audience": { "@type": "Audience", "audienceType": "UK specialist clinicians and clinician educators" },
        "provider": { "@type": "Organization", "name": "NeuraScaleX" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is it safe to put my name on an AI?",
            "acceptedAnswer": { "@type": "Answer", "text": "That question is why we exist. Your Ask page answers only from content you've approved, never diagnoses or prescribes, and holds tested refusal boundaries — including safe crisis signposting. You review every word before it goes live." } },
          { "@type": "Question", "name": "Does it give medical advice?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. It's educational and signposting only — non-clinical by design. Architecture prevents diagnosis, prescribing and personalised clinical advice." } },
          { "@type": "Question", "name": "Where does its knowledge come from?",
            "acceptedAnswer": { "@type": "Answer", "text": "From you. Your videos, book, articles, FAQs, service and fee information — unified into one Knowledge Centre. Nothing from the open internet. Nothing invented." } },
          { "@type": "Question", "name": "What about my patients' data?",
            "acceptedAnswer": { "@type": "Answer", "text": "UK-hosted, GDPR-aligned, and built for the standards of private practice. Conversations serve your patients and your intelligence reports — never sold, never shared." } },
          { "@type": "Question", "name": "How long does it take to go live?",
            "acceptedAnswer": { "@type": "Answer", "text": "Within one week. We build, you approve every word, it goes live — no integration into your clinic systems required." } },
          { "@type": "Question", "name": "What does it cost?",
            "acceptedAnswer": { "@type": "Answer", "text": "Founding-cohort terms are agreed on a founder call, because every build is white-glove. Book a demo and we'll give you a straight answer in thirty minutes." } }
        ]
      }
    ]
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-paper min-h-screen font-sans">
      <SEO 
        title="Ask Dr You — Patient Questions Answered in Your Voice | NeuraScaleX"
        description="A governed AI first conversation for UK specialist clinicians. Every patient question answered in your voice, day or night — and guided to the next step that grows your practice."
        canonical="https://www.neurascalex.com/"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogTitle="Ask Dr You — every patient question answered in your voice."
        ogDescription="Governed AI first conversations for UK specialist clinicians. Live within one week. Every safety boundary held."
        ogImage="https://www.neurascalex.com/assets/og-home.png"
        jsonLd={homeJsonLd}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-paper text-ink">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-precise/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          {/* Pill / Target Audience */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-teal-precise/20 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-700 bg-paper">
             <span className="label-mono font-bold text-teal-precise uppercase tracking-[0.4em] text-[10px]">FOR UK SPECIALIST CLINICIANS</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 tracking-tight text-ink transition-all">
            Ask <span className="text-teal-precise italic">Dr You.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-ink/70 mb-10 leading-relaxed max-w-3xl mx-auto font-serif italic">
            Patients find you, watch half a video, and drift. <br className="hidden md:block" /> Your Ask page answers every question in your voice, day or night and guides every conversation to the next step that grows your practice.
          </p>
          
          {/* Value Prop */}
          {/* Removed as per request */}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link 
              to="/demo" 
              className="w-full sm:w-auto bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white px-10 py-5 font-sans font-semibold rounded-lg shadow-xl shadow-teal-precise/20 transition-all hover:-translate-y-0.5 text-center text-lg"
            >
              Book a founder demo
            </Link>
            <Link 
              to="/specialist-hub" 
              className="w-full sm:w-auto bg-white hover:bg-neutral-50 border border-ink text-ink px-10 py-5 font-sans font-semibold rounded-lg transition-all text-center text-lg flex items-center justify-center gap-2 shadow-sm"
            >
              See the live Ask pages <span className="font-sans">→</span>
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 label-mono text-[10px] font-bold opacity-60 max-w-4xl mx-auto leading-relaxed">
            <span>BUILT WITH UK CONSULTANTS AND CLINICIAN EDUCATORS</span>
            <span>·</span>
            <span>GOVERNED FROM DAY ONE</span>
            <span>·</span>
            <span>LIVE WITHIN ONE WEEK</span>
          </div>
        </div>
      </section>

      {/* 1.5. TONIGHT, 11PM SECTION */}
      <section className="py-24 bg-paper border-b border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#0D6E6E] uppercase mb-4 block">TONIGHT, 11PM</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink leading-tight tracking-tight">
                Someone is searching <br />
                <span className="text-[#0D6E6E] italic font-medium">for exactly you.</span> <br />
                And finding silence.
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-6 lg:pt-8">
              <div className="space-y-6 text-lg md:text-xl text-ink/70 leading-relaxed font-sans">
                <p>
                  They found your video at 11pm. One question — <span className="italic font-serif">is this for someone like me?</span> — and nowhere to ask it.
                </p>
                
                <p>
                  A contact form. A 48-hour wait. They drifted — and booked someone else.
                </p>
                
                <p className="font-bold text-ink text-xl pt-2 border-t border-ink/5">
                  The gap isn't your medicine or your marketing. It's the moment between their question and your answer.
                </p>
              </div>
            </div>
            
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20 lg:mt-28 pt-16 border-t border-ink/5">
            {/* Stat 1 */}
            <div className="bg-white p-8 border border-neutral-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0D6E6E] mb-3">1 in 4</div>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed font-sans">
                conversations in a founding clinic's first weeks were patients actively trying to book.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-8 border border-neutral-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0D6E6E] mb-3">4 in 10</div>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed font-sans">
                conversations in a founding community asked about the clinician's own programmes.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-8 border border-neutral-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0D6E6E] mb-3">24/7</div>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed font-sans">
                every question answered in your voice, routed to one clear next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TURNING POINT SECTION */}
      <section className="py-24 bg-paper border-b border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#0D6E6E] uppercase mb-4 block">THE TURNING POINT</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-8 tracking-tight">
            What if the first conversation <br />
            <span className="text-[#0D6E6E] italic font-medium">happened in your voice?</span>
          </h2>
          <p className="text-lg md:text-xl text-ink/75 leading-relaxed font-sans max-w-3xl mx-auto">
            Your knowledge, your boundaries, your name — meeting every question instantly, warmly, safely. 
            We spent two years inside UK clinics watching this moment leak. Then we built the way across — with 
            clinicians, boundary by boundary, word by approved word.
          </p>
        </div>
      </section>

      {/* 3. THE PRODUCT (THE PLATFORM) */}
      <section className="py-24 bg-paper text-ink overflow-hidden border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20 text-center">
               <span className="font-mono text-xs font-semibold tracking-widest text-[#0D6E6E] uppercase mb-4 block">THE PLATFORM</span>
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6 tracking-tight">
                 Your Ask Page. Your Ask Intelligence.
               </h2>
               <p className="text-lg md:text-xl text-ink/60 font-serif italic max-w-4xl mx-auto leading-relaxed">
                 The first works on your patients. The second works on you. Both run on one Knowledge Centre — built from your approved content, governed from day one.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* PRODUCT 01 - Ask Dr [Your Name] */}
                <div className="bg-white text-ink p-8 md:p-12 rounded-2xl relative flex flex-col h-full shadow-md border border-neutral-200/60">
                    <span className="font-mono text-[11px] text-[#0D6E6E] font-bold uppercase tracking-wider mb-2 block">PRODUCT 01 &middot; FOR YOUR PATIENTS</span>
                    <h3 className="text-3xl font-serif font-bold mb-4">Ask Dr [Your Name]</h3>
                    <p className="text-ink/70 leading-relaxed mb-8 font-sans text-base">
                      A dedicated, shareable page that becomes your patient's first conversation. Your name, your voice, your approved content only. It educates, reassures, and signposts — it never diagnoses. Live within one week.
                    </p>
                    
                    <ul className="space-y-5 mb-10 flex-grow">
                        {[
                            { label: "Your own Ask address: askyourname.neurascalex.com — or your own domain on request.", bold: true },
                            { label: "Smart signposting to action: Every conversation routes to the right next step. No dead ends.", bold: false },
                            { label: "Captured contacts & attribution: Real enquiries with names and emails — and every booking traced to the conversation that created it.", bold: false }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm font-medium border-b border-neutral-100 pb-4 last:border-0">
                                <span className="w-5 h-5 rounded-full bg-[#E6F3F3] text-[#0D6E6E] flex items-center justify-center text-[10px] mr-3 flex-shrink-0 font-sans font-bold">✓</span>
                                <span className={item.bold ? "font-bold text-ink" : "text-ink/70 font-sans"}>{item.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6 mt-auto border-t border-neutral-100">
                        <p className="font-mono text-[9px] uppercase tracking-widest font-bold text-ink/60">Your digital reputation, secured.</p>
                    </div>
                </div>

                {/* PRODUCT 02 - Ask Intelligence */}
                <div className="bg-[#F9F7F2] text-ink p-8 md:p-12 border border-[#E9E4D9] rounded-2xl relative flex flex-col h-full">
                    <span className="font-mono text-[11px] text-[#0D6E6E] font-bold uppercase tracking-wider mb-2 block">PRODUCT 02 &middot; FOR YOUR CLINIC</span>
                    <h3 className="text-3xl font-serif font-bold mb-4 text-[#0D6E6E]">Ask Intelligence</h3>
                    <p className="text-ink/70 leading-relaxed mb-8 font-sans text-base">
                      Every conversation becomes understanding — what your audience really asks, where they came from, which next steps they take. Delivered weekly, with what to do about it.
                    </p>
                    
                    <ul className="space-y-5 mb-10 flex-grow">
                        {[
                            { label: "Top Questions & Top Intents: What they ask, and what they're trying to achieve — ranked honestly, by conversation." },
                            { label: "Actions Taken & Captured Contacts: Patients moved to a next step — and the ones who left real contact details." },
                            { label: "Weekly Intelligence Brief: Arrives every week with specific recommendations. Not a dashboard you have to remember to check." }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm font-medium border-b border-neutral-200/30 pb-4 last:border-0">
                                <span className="w-5 h-5 rounded-full bg-[#E6F3F3] text-[#0D6E6E] flex items-center justify-center text-[10px] mr-3 flex-shrink-0 font-sans font-bold">✓</span>
                                <span className="text-ink/70 font-sans">{item.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6 mt-auto border-t border-[#E9E4D9]">
                        <p className="font-mono text-[9px] uppercase tracking-widest font-bold text-ink/60">Actionable signals, zero noise.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. SEE INSIDE (DASHBOARD PREVIEW) */}
      <section className="py-24 bg-paper border-b border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#0D6E6E] uppercase mb-4 block">SEE INSIDE</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">What your week looks like.</h2>
            <p className="text-lg text-ink/60 font-sans max-w-2xl mx-auto">
              This is Ask Intelligence — the weekly view your practice has never had.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-100 pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#0D6E6E] uppercase bg-[#E6F3F3] px-2.5 py-1 rounded-full">
                  ASK INTELLIGENCE &middot; WEEKLY VIEW
                </span>
                <h4 className="text-xl font-serif font-bold text-ink mt-2">Practice Report for Your Clinic</h4>
              </div>
              <div className="text-xs text-ink/50 font-sans font-medium bg-neutral-50 border border-neutral-200/60 px-3 py-1.5 rounded-lg">
                Date: 10 Jul — 17 Jul 2026
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#F9F7F2] border border-[#E9E4D9] rounded-xl p-5">
                <div className="text-3xl font-serif font-bold text-[#0D6E6E] mb-1">42%</div>
                <p className="text-xs font-sans font-bold text-ink/60 uppercase tracking-wider mb-2">Asked about Booking</p>
                <div className="w-full bg-[#E9E4D9] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#0D6E6E] h-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              
              <div className="bg-[#F9F7F2] border border-[#E9E4D9] rounded-xl p-5">
                <div className="text-3xl font-serif font-bold text-[#0D6E6E] mb-1">18</div>
                <p className="text-xs font-sans font-bold text-ink/60 uppercase tracking-wider mb-2">Captured Contacts</p>
                <p className="text-[11px] text-[#0D6E6E] font-semibold font-sans flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  8 new patient enquiries today
                </p>
              </div>

              <div className="bg-[#F9F7F2] border border-[#E9E4D9] rounded-xl p-5">
                <div className="text-3xl font-serif font-bold text-[#0D6E6E] mb-1">66</div>
                <p className="text-xs font-sans font-bold text-ink/60 uppercase tracking-wider mb-2">Actions Taken</p>
                <p className="text-[11px] text-ink/70 font-sans">Clicks on booking, links & materials</p>
              </div>
            </div>

            {/* Core insights & Questions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Top Questions */}
              <div className="lg:col-span-7">
                <h5 className="text-xs font-sans font-bold text-ink/60 uppercase tracking-wider mb-4">Top Patient Intent & Questions</h5>
                <div className="space-y-3">
                  {[
                    { q: "How do I book an appointment?", count: 17, intent: "Booking Request" },
                    { q: "What are your fees & insurance?", count: 9, intent: "Financial/Admin" },
                    { q: "Do you work with ADHD diagnosis?", count: 7, intent: "Clinical Scope" },
                    { q: "Where can I find your Long Covid paper?", count: 5, intent: "Resource Search" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 border border-neutral-100 rounded-lg hover:bg-neutral-50/50 transition-colors">
                      <div className="min-w-0 pr-4">
                        <p className="text-sm font-sans font-medium text-ink truncate">{item.q}</p>
                        <span className="text-[10px] font-sans font-bold text-[#0D6E6E] uppercase tracking-wider bg-[#E6F3F3] px-1.5 py-0.5 rounded">
                          {item.intent}
                        </span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-sm font-sans font-bold text-ink">{item.count}</span>
                        <p className="text-[10px] text-ink/60 font-sans">chats</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Recommendation Box */}
              <div className="lg:col-span-5">
                <div className="bg-[#E6F3F3]/60 border border-[#B3D9D9]/50 rounded-xl p-5 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-sans font-bold text-[#0D6E6E] uppercase tracking-wider">
                        AI CLINIC RECOMMENDATION
                      </span>
                    </div>
                    <p className="text-sm text-ink/80 leading-relaxed font-sans italic">
                      "This week: fee and suitability questions precede most booking clicks — a clear 'fees & what to expect' page would convert your warmest visitors."
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#B3D9D9]/30 text-[11px] text-[#0D6E6E] font-semibold font-sans">
                    NeuraScaleX Platform Suggestion &middot; Live Insight
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIVE PAGES */}
      <section className="py-24 bg-paper relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
           <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F3F3] border border-[#B3D9D9] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D6E6E] animate-pulse"></span>
                <span className="font-sans font-semibold text-[#0D6E6E] uppercase tracking-wider text-[11px]">LIVE PAGES</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6 tracking-tight">
                UK specialists already live <br />
                <span className="text-[#0D6E6E] italic">on NeuraScaleX.</span>
              </h2>
              <p className="text-lg md:text-xl text-ink/60 font-serif italic max-w-3xl mx-auto leading-relaxed">
                Each Ask page is trained only on its clinician's approved content. Click any card and ask it anything — this is exactly what your patients would experience.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Card 1: Prof. Deepak Ravindran */}
              <div className="bg-white rounded-2xl p-8 shadow-md shadow-neutral-100 border border-neutral-200/60 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#E6F3F3] flex items-center justify-center text-lg font-bold text-[#0D6E6E] border border-[#B3D9D9] font-serif">
                      DR
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F3F3] rounded-full border border-[#B3D9D9]">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] font-sans font-bold tracking-wider text-[#0D6E6E] uppercase">LIVE</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-ink leading-tight mb-1">Prof. Deepak Ravindran</h3>
                  <p className="text-[11px] font-sans font-semibold tracking-wider text-[#0D6E6E] uppercase">
                    PAIN MEDICINE CONSULTANT &middot; BERKSHIRE PAIN CLINIC
                  </p>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-base text-ink/70 leading-relaxed mb-6 font-serif italic">
                    "When you understand what's happening, you feel less fearful, more hopeful, and far more in control."
                  </p>
                  
                  <div className="pt-4 border-t border-neutral-100 mb-8">
                    <p className="text-xs text-ink/50 font-sans leading-relaxed">
                      <span className="font-semibold text-[#0D6E6E]">In his first weeks:</span> 1 in 4 conversations was a patient trying to book.
                    </p>
                  </div>
                </div>

                <a 
                  href="https://askdeepak.neurascalex.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white py-4 rounded-lg font-sans font-semibold text-center transition-all flex items-center justify-center gap-2"
                >
                  Ask Deepak <span className="font-sans">&rarr;</span>
                </a>
              </div>

              {/* Card 2: Dr Abrar Hussain */}
              <div className="bg-white rounded-2xl p-8 shadow-md shadow-neutral-100 border border-neutral-200/60 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#E6F3F3] flex items-center justify-center text-lg font-bold text-[#0D6E6E] border border-[#B3D9D9] font-serif">
                      AH
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F3F3] rounded-full border border-[#B3D9D9]">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] font-sans font-bold tracking-wider text-[#0D6E6E] uppercase">LIVE</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-ink leading-tight mb-1">Dr Abrar Hussain</h3>
                  <p className="text-[11px] font-sans font-semibold tracking-wider text-[#0D6E6E] uppercase">
                    CONSULTANT PSYCHIATRIST &middot; BERKSHIRE PSYCHIATRIST
                  </p>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-base text-ink/70 leading-relaxed mb-6 font-serif italic">
                    "Booking, fees and suitability answered around the clock &mdash; with every clinical boundary held, including safe crisis signposting."
                  </p>
                  
                  <div className="pt-4 border-t border-neutral-100 mb-8">
                    <p className="text-xs text-ink/50 font-sans leading-relaxed">
                      <span className="font-semibold text-[#0D6E6E]">Outcome:</span> Governed front door managing intake and patient onboarding.
                    </p>
                  </div>
                </div>

                <a 
                  href="https://askabrar.neurascalex.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white py-4 rounded-lg font-sans font-semibold text-center transition-all flex items-center justify-center gap-2"
                >
                  Ask Dr Abrar <span className="font-sans">&rarr;</span>
                </a>
              </div>

              {/* Card 3: Dr Catherine Sampa Muyeba */}
              <div className="bg-white rounded-2xl p-8 shadow-md shadow-neutral-100 border border-neutral-200/60 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#E6F3F3] flex items-center justify-center text-lg font-bold text-[#0D6E6E] border border-[#B3D9D9] font-serif">
                      CM
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F3F3] rounded-full border border-[#B3D9D9]">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] font-sans font-bold tracking-wider text-[#0D6E6E] uppercase">LIVE</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-ink leading-tight mb-1">Dr Catherine Sampa Muyeba</h3>
                  <p className="text-[11px] font-sans font-semibold tracking-wider text-[#0D6E6E] uppercase">
                    CONSULTANT PSYCHIATRIST &middot; REAPING WOMEN
                  </p>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-base text-ink/70 leading-relaxed mb-6 font-serif italic">
                    "A community's first conversation &mdash; burnout, clarity and programme questions routed to the right next step."
                  </p>
                  
                  <div className="pt-4 border-t border-neutral-100 mb-8">
                    <p className="text-xs text-ink/50 font-sans leading-relaxed">
                      <span className="font-semibold text-[#0D6E6E]">Traffic insights:</span> 4 in 10 conversations asked about her programmes.
                    </p>
                  </div>
                </div>

                <a 
                  href="https://askcathy.neurascalex.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white py-4 rounded-lg font-sans font-semibold text-center transition-all flex items-center justify-center gap-2"
                >
                  Ask Dr Cathy <span className="font-sans">&rarr;</span>
                </a>
              </div>

           </div>
 
           <div className="mt-16 text-center border-t border-ink/5 pt-16">
              <div className="flex flex-col items-center gap-6">
                <Link to="/specialist-hub" className="bg-white hover:bg-neutral-50 border border-ink text-ink px-10 py-5 font-sans font-semibold rounded-lg transition-all text-center text-lg flex items-center justify-center gap-2 shadow-sm">
                   See the live Ask pages <span className="font-sans">&rarr;</span>
                </Link>
                <p className="text-xs font-semibold text-ink/65 font-sans tracking-wide">New pilot partners added weekly</p>
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
              <span className="label-mono text-[10px] tracking-[0.5em] text-ink/55 uppercase font-bold">BEFORE</span>
            </div>
            <div className="bg-teal-precise/2 pr-12 pl-12 py-6 border-b border-ink/5 hidden md:block">
              <span className="label-mono text-[10px] tracking-[0.5em] text-teal-precise/55 uppercase font-bold">AFTER</span>
            </div>

            {/* Row 1 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/50 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/55 font-serif italic">Content scattered <br className="hidden sm:block" /> across channels</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/50 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Content unified <br className="hidden sm:block" /> in one Knowledge Center</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/50 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/55 font-serif italic">Patients leaving the <br className="hidden sm:block" /> contact form unanswered</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/50 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Patients booked through <br className="hidden sm:block" /> a 24/7 AI front door</p>
            </div>

            {/* Row 3 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/50 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/55 font-serif italic">Secretary stuck answering <br className="hidden sm:block" /> the same five questions</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/50 mb-4 tracking-widest">AFTER</div>
              <p className="text-xl text-ink font-bold font-sans">Secretary freed for the <br className="hidden sm:block" /> work that needs a human</p>
            </div>

            {/* Row 4 */}
            <div className="bg-white p-10 md:p-12">
              <div className="md:hidden label-mono text-[9px] text-ink/50 mb-4 tracking-widest">BEFORE</div>
              <p className="text-xl text-ink/55 font-serif italic">No idea which content <br className="hidden sm:block" /> converts a patient</p>
            </div>
            <div className="bg-white p-10 md:p-12 md:pl-12 border-l border-ink/5">
              <div className="md:hidden label-mono text-[9px] text-teal-precise/50 mb-4 tracking-widest">AFTER</div>
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
              <p className="label-mono opacity-100 font-bold uppercase text-[9px] tracking-[0.4em] text-ink/50">Non-clinical. Not medical advice. Not a medical device.</p>
           </div>
        </div>
      </section>

      {/* 9. THE OFFER (FOUNDING 20 ONBOARDING) */}
      <section className="py-24 bg-[#FBF9F4] text-ink overflow-hidden border-t border-ink/5 relative" id="offer">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-[#0D6E6E] uppercase mb-4 block">FOUNDING COHORT &middot; 20 PLACES</span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-ink mb-8 leading-[1.15] tracking-tight">
            We're onboarding <span className="text-[#0D6E6E] italic font-medium">our Founding 20.</span>
          </h2>
          <p className="text-lg md:text-2xl text-ink/75 leading-relaxed font-serif italic max-w-4xl mx-auto mb-12">
            Twenty UK specialist clinicians, founder-led and white-glove, at founding terms — built with you, live within one week, and your name on it.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <Link to="/demo" className="w-full sm:w-auto bg-[#0D6E6E] text-white px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-lg hover:bg-[#095050] transition-all text-center">
              Book a founder demo
            </Link>
            <Link to="/free-trial" className="w-full sm:w-auto bg-white border border-neutral-300 text-ink px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-sm hover:bg-neutral-50 transition-all text-center">
              Apply for the Founding 20
            </Link>
          </div>
        </div>
      </section>

      {/* 10. ASKED, ANSWERED (FAQ SECTION) */}
      <section className="py-24 bg-[#F5F2EA] text-ink overflow-hidden border-b border-ink/5 relative" id="faq">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-[#0D6E6E] uppercase mb-4 block">QUESTIONS CLINICIANS ASK US</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-ink mb-4 tracking-tight">
              Asked, <span className="text-[#0D6E6E] italic font-medium">answered.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                q: "Is it safe to put my name on an AI?",
                a: "That question is why we exist. Your Ask page answers only from content you've approved, never diagnoses or prescribes, and holds tested refusal boundaries — including safe crisis signposting. You review every word before it goes live."
              },
              {
                q: "Does it give medical advice?",
                a: "No. It's educational and signposting only — non-clinical by design. Architecture prevents diagnosis, prescribing and personalised clinical advice."
              },
              {
                q: "Where does its knowledge come from?",
                a: "From you. Your videos, book, articles, FAQs, service and fee information — unified into one Knowledge Centre. Nothing from the open internet. Nothing invented."
              },
              {
                q: "What about my patients' data?",
                a: "UK-hosted, GDPR-aligned, and built for the standards of private practice. Conversations are used to serve your patients and your intelligence reports — never sold, never shared."
              },
              {
                q: "How long does it take to go live?",
                a: "Within one week. We build, you approve every word, it goes live — no integration into your clinic systems required."
              },
              {
                q: "What does it cost?",
                a: "Founding-cohort terms are agreed on a founder call, because every build is white-glove. Book a demo and we'll give you a straight answer in thirty minutes."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-sans font-bold text-ink mb-4 leading-snug">{faq.q}</h3>
                  <p className="text-sm md:text-base text-ink/75 leading-relaxed font-sans">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
