import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Platform: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-paper min-h-screen font-sans overflow-x-hidden pt-20">
      
      {/* 1. HERO */}
      <section className="bg-paper py-16 lg:py-24 text-ink relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">THE PLATFORM</span>
          <h1 className="text-6xl md:text-8xl font-serif text-ink mb-12 leading-[1.05] tracking-tight max-w-5xl mx-auto">
            Two products. <br />
            <span className="italic text-teal-precise">One conversion engine.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink/60 mb-12 font-serif italic italic-moment leading-relaxed max-w-3xl mx-auto">
            The AI Clinic Page works on your patients. The Intelligence Dashboard works on you. Both run on one Knowledge Center — built from your approved content, governed from day one, deployed in 14 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Link to="/free-trial" className="w-full sm:w-auto bg-ink text-paper px-12 py-6 rounded-none font-bold uppercase tracking-widest shadow-2xl hover:bg-teal-precise transition-all label-mono opacity-100">START FREE TRIAL</Link>
            <Link to="/demo" className="w-full sm:w-auto border border-ink/20 text-ink px-12 py-6 rounded-none font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono opacity-100">BOOK A DEMO</Link>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT 01 · FOR YOUR PATIENTS */}
      <section className="py-16 lg:py-24 bg-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-24 items-center"
          >
            {/* Left: Graphic (Browser Mockup) */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-ink text-paper rounded-none shadow-3xl p-1 border border-ink/10 overflow-hidden relative z-10">
                {/* Browser simulation header */}
                <div className="bg-paper/10 px-4 py-3 flex items-center border-b border-paper/5">
                  <div className="flex space-x-1.5 mr-4 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-paper"></div>
                    <div className="w-2 h-2 rounded-full bg-paper"></div>
                    <div className="w-2 h-2 rounded-full bg-paper"></div>
                  </div>
                  <div className="bg-paper/5 px-3 py-1 text-[9px] label-mono opacity-60 flex-grow font-bold tracking-widest uppercase">
                    ask.yourclinic.co.uk
                  </div>
                </div>
                {/* Content area */}
                <div className="bg-ink p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
                  <span className="label-mono text-teal-precise mb-4 block font-bold text-[9px] tracking-widest uppercase">ask the expert</span>
                  <h4 className="text-3xl md:text-4xl font-serif mb-10 text-paper leading-tight">What can I help you understand today?</h4>
                  
                  {/* User message */}
                  <div className="bg-paper/5 p-4 mb-6 border-l-2 border-paper/10 self-end max-w-[80%]">
                    <p className="text-sm font-serif italic text-paper/60 leading-relaxed">"I've been told I have fibromyalgia. Can you help?"</p>
                  </div>

                  {/* AI Message */}
                  <div className="bg-paper p-6 mb-10 border-l-2 border-teal-precise max-w-[90%] shadow-lg">
                    <p className="text-ink text-sm leading-relaxed font-serif italic-moment font-medium mb-6">
                      Yes — fibromyalgia is one of the conditions I see most often in private practice. My approach focuses on understanding the full picture rather than treating symptoms in isolation...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-teal-precise text-paper px-4 py-2 text-[9px] label-mono font-bold uppercase tracking-wider">Book discovery call</button>
                      <button className="border border-ink/10 text-ink/40 px-4 py-2 text-[9px] label-mono font-bold uppercase tracking-wider">Watch related video</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-20 -left-20 w-[140%] h-[140%] bg-teal-precise/[0.03] blur-[120px] rounded-full"></div>
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2">
              <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">PRODUCT 01 · FOR YOUR PATIENTS</span>
              <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-tight">
                The AI <br />
                <span className="italic text-teal-precise">Clinic Page.</span>
              </h2>
              <p className="text-2xl text-ink font-serif italic italic-moment leading-relaxed mb-12">
                A dedicated, shareable URL — ask.yourclinic.co.uk — that becomes your patient's entry point into your practice. Trained only on your approved content. Live in 14 days. Available the moment a patient is ready to book, not the next time your team is free to answer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    title: "01 — Custom domain, your voice",
                    desc: "A subdomain of your own URL, your branding, your tone. Patients arrive at a page that feels like an extension of your practice — not a generic widget hovering on someone else's website."
                  },
                  {
                    title: "02 — Knowledge Center foundation",
                    desc: "Your FAQs, service descriptions, fees, content library, and clinical materials uploaded in week one. The AI answers only from what you've approved. Nothing more. Nothing invented."
                  },
                  {
                    title: "03 — Smart signposting to action",
                    desc: "Every conversation routes the patient to the right next step: book a discovery call, view services, watch a video, contact reception, join a waiting list. No dead ends."
                  },
                  {
                    title: "04 — Lead capture and attribution",
                    desc: "Every conversation captured with names, contact details, questions asked, and the conversion path taken. Delivered to the Intelligence Dashboard in real time. Bookings traced back to the conversation that generated them."
                  }
                ].map((feature, i) => (
                  <div key={i} className="group">
                    <h4 className="text-lg font-bold text-ink mb-4 font-sans tracking-tight leading-tight uppercase group-hover:text-teal-precise transition-colors">{feature.title}</h4>
                    <p className="text-base text-ink/50 font-serif italic italic-moment leading-relaxed opacity-100 transition-opacity">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PRODUCT 02 · FOR YOUR CLINIC */}
      <section className="py-16 lg:py-24 bg-teal-precise/[0.02] border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-24 items-start"
          >
            {/* Left: Copy */}
            <div>
              <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">PRODUCT 02 · FOR YOUR CLINIC</span>
              <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-tight">
                The Intelligence <br />
                <span className="italic text-teal-precise">Dashboard.</span>
              </h2>
              <p className="text-2xl text-ink font-serif italic italic-moment leading-relaxed mb-16">
                Most clinics make content, marketing, and operational decisions based on guesswork. With NeuraScaleX, every patient conversation becomes structured intelligence — and the dashboard turns that intelligence into the playbook that grows your clinic.
              </p>

              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "Question intelligence",
                    desc: "Top patient questions ranked by frequency. Spot the gaps your website doesn't address. See the queries that show up again and again — and the answers your team is repeating manually."
                  },
                  {
                    num: "02",
                    title: "Peak hour analytics",
                    desc: "When patients actually engage with your clinic. Most enquiry spikes happen between 8pm and midnight, on weekends, on bank holidays. The dashboard shows you the truth your calendar has been hiding."
                  },
                  {
                    num: "03",
                    title: "Booking intent signals",
                    desc: "Which conversation patterns precede a booking. Which questions predict conversion. Which content turns a curious visitor into a confirmed appointment."
                  },
                  {
                    num: "04",
                    title: "Content compass",
                    desc: "Topics your patients ask about that you haven't covered yet. Your next 90 days of content, planned by your patients rather than your guesswork."
                  },
                  {
                    num: "05",
                    title: "Weekly intelligence brief",
                    desc: "Delivered every Friday at 4pm. Specific recommendations. What changed this week. What to act on next. Not another dashboard you have to remember to check — intelligence that arrives."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-8 group pb-8 border-b border-ink/5 last:border-0 h-full">
                    <span className="label-mono text-ink/20 text-4xl font-bold opacity-100 group-hover:text-teal-precise/30 transition-colors">{feature.num}</span>
                    <div>
                      <h4 className="text-xl font-bold text-ink mb-3 font-sans tracking-tight uppercase group-hover:text-teal-precise transition-colors">{feature.title}</h4>
                      <p className="text-lg text-ink/50 font-serif italic italic-moment leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard Graphic */}
            <div className="lg:sticky lg:top-32 h-full">
              <div className="bg-white border border-ink/10 p-10 shadow-3xl relative overflow-hidden">
                {/* Header simulation */}
                <div className="flex justify-between items-center mb-12 pb-6 border-b border-ink/5">
                  <div>
                    <h3 className="label-mono text-[9px] font-bold uppercase tracking-widest text-ink/30 mb-1">PRACTICE OVERVIEW</h3>
                    <p className="text-sm font-bold text-ink">Intelligence Dashboard</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-teal-precise"></div>
                    <div className="w-2 h-2 bg-teal-precise/20"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div className="border border-ink/5 p-6 bg-paper/[0.5]">
                      <span className="label-mono text-[8px] font-bold uppercase block mb-2 opacity-30">Admin Reduction</span>
                      <p className="text-3xl font-serif font-bold text-ink">42%</p>
                   </div>
                   <div className="border border-ink/5 p-6 bg-paper/[0.5]">
                      <span className="label-mono text-[8px] font-bold uppercase block mb-2 opacity-30">Qualified Leads</span>
                      <p className="text-3xl font-serif font-bold text-ink">18</p>
                   </div>
                </div>

                {/* Conversation volume graph */}
                <div className="mb-12">
                   <span className="label-mono text-[8px] font-bold uppercase block mb-6 opacity-30 tracking-widest">Conversation Spikes (Peak Hours)</span>
                   <div className="flex items-end gap-1 h-32 border-b border-ink/5 pb-2">
                     {[40, 25, 90, 65, 30, 85, 45, 75, 40, 60, 95, 30].map((h, i) => (
                       <div key={i} className="bg-teal-precise/20 flex-grow hover:bg-teal-precise transition-all duration-300" style={{ height: `${h}%` }}></div>
                     ))}
                   </div>
                   <div className="flex justify-between mt-3 text-[10px] label-mono opacity-20 font-bold uppercase">
                     <span>08:00</span>
                     <span>16:00</span>
                     <span>00:00</span>
                   </div>
                </div>

                {/* Top Questions */}
                <div className="space-y-4">
                  <span className="label-mono text-[8px] font-bold uppercase block mb-4 opacity-30 tracking-widest">Sentiment & Trends</span>
                  {[
                    { label: "Consultation Fees", val: 75 },
                    { label: "Insurance Coverage", val: 60 },
                    { label: "Waitlist Duration", val: 45 }
                  ].map((q, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex justify-between text-[11px] label-mono font-bold uppercase text-ink/60">
                        <span>{q.label}</span>
                        <span>{q.val}%</span>
                      </div>
                      <div className="h-1.5 bg-ink/5 w-full">
                        <div className="h-full bg-teal-precise" style={{ width: `${q.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weekly brief callout overlay mockup */}
                <div className="mt-12 p-8 bg-teal-precise text-paper shadow-2xl relative z-10">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-paper/10 border border-paper/20">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                      </div>
                      <h4 className="text-lg font-bold font-serif italic">Intelligence arriving Friday, 4pm.</h4>
                   </div>
                   <p className="text-sm label-mono opacity-80 leading-relaxed font-bold uppercase tracking-widest">Direct to your inbox. No dashboard fatigue.</p>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-precise/5 blur-[120px] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE FOUNDATION: KNOWLEDGE CENTER */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">THE FOUNDATION</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-tight">
              The <span className="italic text-teal-precise">Knowledge Center.</span>
            </h2>
            <p className="text-2xl text-ink/60 font-serif italic italic-moment leading-relaxed max-w-3xl mx-auto">
              Both products run on one engine — the Knowledge Center. We unify your existing content into a single source of clinical truth, then deploy your AI Clinic Page and Intelligence Dashboard on top of it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/5 border border-ink/5">
            {[
              {
                title: "VIDEO LIBRARY",
                items: ["YouTube videos", "Webinars", "Podcast appearances", "Conference talks", "Patient education"]
              },
              {
                title: "WRITTEN WORK",
                items: ["Articles", "Book chapters", "Journal papers", "FAQ documents", "Patient handouts"]
              },
              {
                title: "CLINIC KNOWLEDGE",
                items: ["Intake scripts", "Pricing sheets", "Service descriptions", "Insurance pathways", "Booking flows"]
              }
            ].map((col, i) => (
              <div key={i} className="bg-white p-12 hover:bg-teal-precise/[0.02] transition-all group">
                <h3 className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.3em] opacity-100 border-b border-teal-precise/20 pb-4">{col.title}</h3>
                <ul className="space-y-4">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-lg text-ink/60 font-serif italic leading-relaxed group-hover:text-ink transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
             <p className="text-xl text-ink/40 font-serif italic italic-moment leading-relaxed">
               Years of fragmented expertise. One searchable, citable, deployable foundation. The content you've already paid for, finally paying you back.
             </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT NEURASCALEX IS NOT */}
      <section className="py-16 lg:py-24 bg-paper border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24 text-center">
            <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">WHAT NEURASCALEX IS NOT</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ink leading-tight tracking-tight">
              We're upfront about <br />
              <span className="italic text-teal-precise font-bold">what this platform doesn't do.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {[
              {
                title: "This is not a clinical decision tool.",
                desc: "The AI never diagnoses, prescribes, or gives personalised medical advice. Architecture prevents it. Boundaries are defined at deployment."
              },
              {
                title: "This is not a marketing chatbot.",
                desc: "We don't generate fake content, simulate consultations, or market to patients in your name. Every word the AI speaks comes from content you've approved."
              },
              {
                title: "This is not enterprise software.",
                desc: "No 6-month implementation. No procurement cycles. No license seats. The platform is built for individual UK specialists and clinic teams under 50 people."
              },
              {
                title: "This is not a replacement for your team.",
                desc: "Your secretary still answers the calls that need a human. The AI handles the 70% of enquiries that don't need clinical judgement — so your team can focus on the 30% that do."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex-shrink-0 w-2 h-2 bg-teal-precise mt-2.5 group-hover:scale-150 transition-transform"></div>
                <div>
                   <h4 className="text-2xl font-bold text-ink mb-4 font-serif italic-moment">{item.title}</h4>
                   <p className="text-lg text-ink/50 font-serif italic leading-relaxed">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
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

export default Platform;
