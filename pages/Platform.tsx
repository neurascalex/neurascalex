import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const Platform: React.FC = () => {
  const platformJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Ask Page & Ask Intelligence",
        "serviceType": "Governed AI first conversation for specialist clinicians",
        "provider": { "@type": "Organization", "name": "NeuraScaleX" },
        "areaServed": { "@type": "Country", "name": "United Kingdom" },
        "description": "Ask Dr [Name]: a governed page answering patient questions from clinician-approved content, with smart signposting, captured contacts and attribution. Ask Intelligence: Top Questions, Top Intents, Actions Taken, Captured Contacts and a Weekly Intelligence Brief."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.neurascalex.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platform", "item": "https://www.neurascalex.com/platform" }
        ]
      }
    ]
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-[#FBF9F4] min-h-screen font-sans overflow-x-hidden pt-20">
      <SEO 
        title="Ask Page & Ask Intelligence — The Platform | NeuraScaleX"
        description="Your Ask Page answers patients from your approved content only. Ask Intelligence shows what they ask, where they came from, and what to do next — delivered weekly. Live within one week, zero integration."
        canonical="https://www.neurascalex.com/platform"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogTitle="Your Ask Page. Your Ask Intelligence. One engine underneath."
        ogDescription="Governed patient conversations plus weekly intelligence — built from your approved content, live within one week."
        ogImage="https://www.neurascalex.com/assets/og-platform.png"
        jsonLd={platformJsonLd}
      />
      
      {/* 1. HERO */}
      <section className="bg-[#FAF7F0] py-20 lg:py-28 text-ink relative overflow-hidden border-b border-neutral-200/50">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-[#0D6E6E] uppercase mb-4 block">THE PLATFORM</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-ink mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Your Ask Page. Your Ask Intelligence. <br />
            <span className="text-[#0D6E6E] italic font-medium block mt-2">One engine underneath.</span>
          </h1>
          <p className="text-lg md:text-2xl text-ink/75 leading-relaxed font-serif italic max-w-4xl mx-auto mb-12">
            The Ask Page works on your patients. Ask Intelligence works on you. Both run on one Knowledge Centre — built from your approved content, governed from day one, live within one week.
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

      {/* 2. PRODUCT 01 & PRODUCT 02 MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-24">
        
        {/* PRODUCT 01 &middot; FOR YOUR PATIENTS */}
        <section className="bg-white p-8 md:p-16 rounded-3xl border border-neutral-200/60 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Ask Deepak Live Example (Browser Mockup) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-[#0B1520] text-white rounded-2xl shadow-xl overflow-hidden border border-neutral-800">
                {/* Browser top header bar */}
                <div className="bg-[#111C24] px-4 py-3.5 flex items-center border-b border-neutral-800">
                  <div className="flex space-x-1.5 mr-4 opacity-40">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded text-[10px] font-mono opacity-50 flex-grow font-semibold tracking-wider text-center">
                    ask.yourclinic.co.uk
                  </div>
                </div>
                {/* Simulated Conversation UI */}
                <div className="p-8 min-h-[460px] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[#0D6E6E] font-bold uppercase tracking-[0.2em] mb-3 block">ASK DEEPAK &middot; LIVE EXAMPLE</span>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 leading-tight">What can I help you understand today?</h4>
                    
                    {/* User inquiry */}
                    <div className="border-l-2 border-white/20 pl-4 py-1 mb-8">
                      <p className="text-sm font-serif italic text-white/60 leading-relaxed">
                        "I've been told I have fibromyalgia. Can you help?"
                      </p>
                    </div>

                    {/* AI Response Card */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                      <p className="text-white/80 text-sm leading-relaxed font-sans mb-5">
                        Yes — fibromyalgia is one of the conditions I see most often in private practice. My approach focuses on understanding the full picture rather than treating symptoms in isolation...
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        <button className="bg-[#0D6E6E] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#095050] transition-colors">
                          Book discovery call
                        </button>
                        <button className="border border-white/20 text-white/80 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white/10 transition-colors">
                          Watch related video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div>
                <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase mb-3 block">PRODUCT 01 &middot; FOR YOUR PATIENTS</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink leading-tight mb-6">
                  Ask Dr <span className="text-[#0D6E6E] italic font-medium">[Your Name]</span>
                </h2>
                <p className="text-base md:text-lg text-ink/75 leading-relaxed font-sans">
                  A dedicated, shareable page that becomes your patient's entry point into your practice. Trained only on your approved content. Available the moment a patient is ready to book &mdash; not the next time your team is free to answer.
                </p>
              </div>

              {/* Sub-features list */}
              <div className="divide-y divide-neutral-200/60 border-t border-b border-neutral-200/60">
                {[
                  {
                    title: "01 &mdash; Your own Ask address",
                    desc: "askyourname.neurascalex.com, your branding, your voice &mdash; or your own domain on request. Patients arrive at a page that feels like an extension of your practice."
                  },
                  {
                    title: "02 &mdash; Knowledge Centre foundation",
                    desc: "Your FAQs, service descriptions, fees, content library and clinical materials, unified. The page answers only from what you've approved. Nothing invented."
                  },
                  {
                    title: "03 &mdash; Smart signposting to action",
                    desc: "Every conversation routes the patient to the right next step: book a discovery call, view services, watch a video, contact reception. No dead ends."
                  },
                  {
                    title: "04 &mdash; Captured contacts & attribution",
                    desc: "Real enquiries with names and contact details, delivered to you in real time &mdash; and bookings traced back to the conversation that generated them."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="py-5">
                    <h4 className="text-base font-bold text-ink mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-sm md:text-base text-ink/70 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* PRODUCT 02 &middot; FOR YOUR CLINIC */}
        <section className="bg-white p-8 md:p-16 rounded-3xl border border-neutral-200/60 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Copy & Features */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase mb-3 block">PRODUCT 02 &middot; FOR YOUR CLINIC</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink leading-tight mb-6">
                  Ask <span className="text-[#0D6E6E] italic font-medium">Intelligence.</span>
                </h2>
                <p className="text-base md:text-lg text-ink/75 leading-relaxed font-sans">
                  Most clinics make content, marketing and operational decisions on guesswork. With NeuraScaleX, every patient conversation becomes structured understanding &mdash; and that understanding becomes the playbook that grows your clinic.
                </p>
              </div>

              {/* Sub-features list */}
              <div className="divide-y divide-neutral-200/60 border-t border-b border-neutral-200/60">
                {[
                  {
                    title: "01 &mdash; Top Questions",
                    desc: "What patients ask most &mdash; ranked honestly, by conversation, not by message. The gaps your website doesn't address, made visible."
                  },
                  {
                    title: "02 &mdash; Top Intents",
                    desc: "What patients are actually trying to achieve before they book &mdash; booking, fees, suitability, trust."
                  },
                  {
                    title: "03 &mdash; Actions Taken",
                    desc: "Which next steps patients choose after asking. Proof the page is doing the routing work of a receptionist."
                  },
                  {
                    title: "04 &mdash; Captured Contacts",
                    desc: "The patients who left real contact details &mdash; your follow-up list, exported or delivered."
                  },
                  {
                    title: "05 &mdash; Weekly Intelligence Brief",
                    desc: "Delivered every week. What changed, what to act on next. Not another dashboard you have to remember to check &mdash; intelligence that arrives."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="py-5">
                    <h4 className="text-base font-bold text-ink mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-sm md:text-base text-ink/70 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Weekly View Mockup */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white border border-neutral-200 rounded-2xl shadow-md p-8 space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                  <span className="font-mono text-xs font-bold text-[#0D6E6E] uppercase tracking-wider">ASK INTELLIGENCE &middot; WEEKLY VIEW</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0D6E6E]"></span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50/50 p-5 rounded-xl border border-neutral-100 text-center">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-ink mb-1 block">42%</span>
                    <span className="font-mono text-[9px] font-bold text-ink/50 uppercase tracking-widest block">ASKED ABOUT BOOKING</span>
                  </div>
                  <div className="bg-neutral-50/50 p-5 rounded-xl border border-neutral-100 text-center">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-ink mb-1 block">18</span>
                    <span className="font-mono text-[9px] font-bold text-ink/50 uppercase tracking-widest block">CAPTURED CONTACTS</span>
                  </div>
                </div>

                {/* Trend List */}
                <div className="space-y-4">
                  {[
                    { rank: "1", query: "How do I book an appointment?", count: "17 conversations" },
                    { rank: "2", query: "What are your fees & insurance?", count: "9 conversations" },
                    { rank: "3", query: "Can you help with my condition?", count: "8 conversations" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start py-2">
                      <div className="flex space-x-3">
                        <span className="font-mono text-xs font-bold text-ink/60">{item.rank} &middot;</span>
                        <span className="text-sm md:text-base font-bold text-ink/85">{item.query}</span>
                      </div>
                      <span className="text-xs text-ink/50 font-mono text-right flex-shrink-0">{item.count}</span>
                    </div>
                  ))}
                </div>

                {/* Intelligence Insight Callout */}
                <div className="bg-[#FAF7F0] border border-[#0D6E6E]/10 rounded-xl p-5">
                  <p className="text-xs md:text-sm text-ink/80 leading-relaxed font-serif italic">
                    <strong className="text-[#0D6E6E] not-italic font-bold font-mono text-[10px] tracking-wider block mb-1">THIS WEEK</strong>
                    fee and suitability questions precede most booking clicks &mdash; a clear "fees & what to expect" page would convert your warmest visitors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* 4. THE FOUNDATION: KNOWLEDGE CENTRE */}
      <section className="py-24 bg-white border-t border-b border-neutral-200/50 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-[#0D6E6E] uppercase mb-4 block">THE FOUNDATION</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6 leading-tight">
            The <span className="text-[#0D6E6E] italic font-medium">Knowledge Centre.</span>
          </h2>
          <p className="text-lg md:text-2xl text-ink/75 leading-relaxed font-serif italic max-w-4xl mx-auto mb-16">
            Both products run on one engine. We unify your existing content into a single source of clinical truth, then deploy your Ask Page and Ask Intelligence on top of it.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "VIDEO LIBRARY",
                items: "YouTube videos &middot; webinars &middot; podcast appearances &middot; conference talks &middot; patient education"
              },
              {
                title: "WRITTEN WORK",
                items: "Articles &middot; book chapters &middot; journal papers &middot; FAQ documents &middot; patient handouts"
              },
              {
                title: "CLINIC KNOWLEDGE",
                items: "Intake scripts &middot; pricing sheets &middot; service descriptions &middot; insurance pathways &middot; booking flows"
              }
            ].map((col, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col justify-between items-center text-center">
                <div>
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0D6E6E] uppercase mb-6 block border-b border-neutral-100 pb-3">{col.title}</span>
                  <p className="text-sm md:text-base text-ink/80 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: col.items }} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-ink/60 font-serif italic max-w-2xl mx-auto mt-16 leading-relaxed">
            Years of fragmented expertise. One searchable, citable, deployable foundation. The content you've already paid for, finally paying you back.
          </p>
        </div>
      </section>

      {/* 5. WHAT NEURASCALEX IS NOT */}
      <section className="py-24 bg-[#FAF7F0] border-b border-neutral-200/50 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-ink/60 uppercase mb-4 block">WHAT NEURASCALEX IS NOT</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink leading-tight tracking-tight">
              We're upfront about <span className="text-[#0D6E6E] italic font-medium">what this platform doesn't do.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "NOT A CLINICAL DECISION TOOL",
                desc: "The Ask page never diagnoses, prescribes, or gives personalised medical advice. Architecture prevents it. Boundaries are defined before deployment."
              },
              {
                title: "NOT A MARKETING CHATBOT",
                desc: "We don't generate fake content or simulate consultations. Every word your Ask page speaks comes from content you've approved."
              },
              {
                title: "NOT ENTERPRISE SOFTWARE",
                desc: "No 6-month implementation. No procurement cycles. No licence seats. Built for individual UK specialists and clinic teams under 50 people."
              },
              {
                title: "NOT A REPLACEMENT FOR YOUR TEAM",
                desc: "Your secretary still answers the calls that need a human. The Ask page handles the 70% of enquiries that don't need clinical judgement &mdash; so your team can focus on the 30% that do."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-mono font-bold text-[#0D6E6E] tracking-wider mb-3">{item.title}</h4>
                  <p className="text-xs md:text-sm text-ink/75 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-[#FBF9F4] text-ink overflow-hidden border-b border-ink/5 relative">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-ink mb-6 leading-tight tracking-tight">
            Become <span className="text-[#0D6E6E] italic font-medium">impossible to ignore.</span>
          </h2>
          <p className="text-lg md:text-2xl text-ink/75 leading-relaxed font-serif italic max-w-4xl mx-auto mb-12">
            Join the UK specialists turning every patient question into a booking on the calendar.
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

    </div>
  );
};

export default Platform;

