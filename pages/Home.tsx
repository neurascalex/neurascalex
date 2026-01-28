
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-900 text-white">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-700">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-200">Accepting New Pilots</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl serif leading-[1.05] mb-8 tracking-tight text-white">
            Your Expertise. Scaled.<br />
            Your Authority. Elevated.<br />
            <span className="text-gold-500 italic">Your Digital Twin.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-6 leading-relaxed max-w-4xl mx-auto font-serif">
            A 24/7 website assistant that answers routine questions safely—plus an Intelligence dashboard showing what patients need and what to do next.
          </p>
          
          {/* Value Prop */}
          <p className="text-base md:text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            NeuraScaleX reduces repetitive admin, protects boundaries, and guides people to the right next step—so you can focus on care, not your inbox.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1">
              Start Free Trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all hover:border-white/40">
              Request a Walkthrough
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
             <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Approved sources only
             </div>
             <div className="hidden sm:block text-white/20">•</div>
             <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Non-clinical by design
             </div>
             <div className="hidden sm:block text-white/20">•</div>
             <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Live in 7 days
             </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE EXAMPLE WIDGET (UPDATED: REAL TIME PILOT SIMULATION) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl serif text-navy-900 mb-6">See a Digital Twin in action.</h2>
               <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                 The Twin lives on your website, ready to orient patients 24/7. It looks like you, speaks like you, but knows its boundaries.
               </p>
            </div>

            {/* Browser Simulation Container */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white relative mx-auto max-w-5xl">
                {/* Browser Toolbar */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 bg-white px-3 py-1.5 rounded-sm text-[10px] text-gray-400 flex-grow max-w-xs font-mono border border-gray-200 shadow-sm flex items-center">
                        <svg className="w-3 h-3 mr-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        chen-integrative-health.com
                    </div>
                </div>

                {/* Mock Website Content Area */}
                <div className="relative bg-[#faf9f6] min-h-[550px] lg:min-h-[650px] flex flex-col font-sans">
                    
                    {/* Mock Nav */}
                    <div className="flex justify-between items-center px-6 md:px-12 py-8">
                        <span className="text-xl md:text-2xl font-serif font-bold text-stone-800 tracking-tight">DR. SARAH CHEN</span>
                        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-stone-600">
                            <span className="hover:text-stone-900 cursor-pointer">Specialties</span>
                            <span className="hover:text-stone-900 cursor-pointer">About</span>
                            <span className="hover:text-stone-900 cursor-pointer">Patients</span>
                            <span className="px-6 py-3 bg-teal-900 text-white rounded-sm hover:bg-teal-800 cursor-pointer transition-colors">Book Consultation</span>
                        </div>
                    </div>

                    {/* Mock Hero Content */}
                    <div className="flex-grow flex flex-col justify-center px-6 md:px-16 max-w-3xl pb-32">
                         <h3 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-[1.1]">
                            Personalised care for <br/>
                            <span className="text-teal-800 italic">hormonal health.</span>
                         </h3>
                         <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-xl font-light">
                            A compassionate, evidence-based approach to endocrinology and lifestyle medicine. Specialising in recovery from complex hormonal imbalances.
                         </p>
                         <div className="flex gap-4">
                            <button className="bg-teal-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm shadow-lg hover:bg-teal-800 transition-colors">
                                Begin Your Journey
                            </button>
                            <button className="hidden sm:block border border-stone-300 text-stone-600 px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-stone-200 transition-colors">
                                Learn More
                            </button>
                         </div>
                    </div>
                    
                    {/* Abstract visual element */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-stone-200/40 hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

                    {/* THE WIDGET OVERLAY */}
                    <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 w-[340px] sm:w-[380px] flex flex-col shadow-2xl rounded-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-1000 z-20">
                        {/* Widget Header */}
                        <div className="bg-teal-900 p-5 text-white flex justify-between items-start">
                             <div className="flex items-center gap-3">
                                <div className="relative">
                                     {/* Avatar Image Placeholder */}
                                     <div className="w-12 h-12 rounded-full bg-white border-2 border-white/20 overflow-hidden flex items-center justify-center text-teal-900 font-bold text-lg">
                                        SC
                                     </div>
                                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-teal-900 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Dr. Sarah Chen AI</h4>
                                    <p className="text-[10px] uppercase tracking-wider opacity-80 font-medium">Digital Twin • Non-Clinical</p>
                                </div>
                             </div>
                             <button className="text-white/60 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                             </button>
                        </div>

                        {/* Widget Body */}
                        <div className="bg-white p-5 h-[340px] flex flex-col overflow-y-auto">
                            <div className="text-center text-[10px] text-gray-400 mb-6 font-bold uppercase tracking-widest">Today 09:41</div>
                            
                            {/* Message 1 */}
                            <div className="flex gap-3 mb-6 animate-in slide-in-from-bottom-2 duration-500">
                                <div className="w-8 h-8 rounded-full bg-teal-50 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-teal-900 border border-teal-100">SC</div>
                                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none text-sm text-gray-700 leading-relaxed shadow-sm">
                                    Welcome to Chen Integrative Health.<br/>
                                    You are speaking with the Digital Twin of Dr. Sarah Chen.
                                </div>
                            </div>

                            {/* Message 2 */}
                            <div className="flex gap-3 mb-4 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                                <div className="w-8 h-8 rounded-full bg-teal-50 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-teal-900 border border-teal-100">SC</div>
                                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none text-sm text-gray-700 leading-relaxed shadow-sm">
                                    I can help you understand our services, fees, and insurance coverage using Dr. Chen's approved materials. I cannot provide medical diagnosis.<br/><br/>
                                    How can I help you today?
                                </div>
                            </div>
                        </div>

                        {/* Widget Footer / Actions */}
                        <div className="bg-white px-5 pt-2 pb-6 border-t border-gray-50">
                            <p className="text-[10px] text-gray-400 mb-3 font-medium ml-1">Choose a topic to get started:</p>
                            <div className="flex flex-col gap-2 mb-4">
                                <button className="w-full text-left px-4 py-3 rounded-xl border border-teal-800 text-teal-800 text-sm font-medium hover:bg-teal-50 transition-colors bg-white">
                                    What conditions do you treat?
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-xl border border-teal-800 text-teal-800 text-sm font-medium hover:bg-teal-50 transition-colors bg-white">
                                    How do I book an appointment?
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-xl border border-teal-800 text-teal-800 text-sm font-medium hover:bg-teal-50 transition-colors bg-white">
                                    What are the fees & insurance?
                                </button>
                            </div>
                             <div className="flex items-center gap-2">
                                <input type="text" placeholder="Type your question..." className="flex-grow bg-gray-50 border border-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-teal-800 transition-colors" disabled />
                                <button className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center text-white shadow-md hover:bg-teal-900 transition-colors">
                                    <svg className="w-4 h-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                             </div>
                             <div className="text-center mt-3">
                                <span className="text-[9px] text-gray-300 font-medium">Powered by NeuraScaleX</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl serif text-navy-900 mb-8">Protect your time for clinical judgement.</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Most inbound enquiries are routine: fees, insurance, suitability, pathways, booking, and what to expect. When these are answered consistently up front, patients arrive clearer—and your team spends less time repeating the same information. NeuraScaleX supports the first mile of the patient journey safely, without crossing into clinical advice.
          </p>
        </div>
      </section>

      {/* 4. COMPARISON */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 border border-gray-100 rounded-2xl overflow-hidden shadow-lg">
            
            {/* Left: Problem */}
            <div className="bg-red-50/50 p-12">
               <h3 className="text-2xl serif text-red-900 mb-8 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">?</span>
                 What patients ask every day
               </h3>
               <ul className="space-y-6">
                 {[
                   "“How much is a consultation?”",
                   "“Do you treat children?”",
                   "“Are you covered by AXA / Bupa?”",
                   "“What’s your approach to [condition]?”",
                   "“Can I book for next week?”"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start text-red-900/70 font-medium italic">
                     <span className="mr-3 text-red-300">•</span> {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Right: Solution */}
            <div className="bg-teal-50/50 p-12 relative">
               <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-200 hidden md:block"></div>
               <h3 className="text-2xl serif text-teal-900 mb-8 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-sm font-bold">✓</span>
                 What your Digital Twin delivers
               </h3>
               <ul className="space-y-6">
                 {[
                   "Your expertise—organised and accessible",
                   "Patients arrive informed (fees, pathways, expectations)",
                   "Answers from your approved materials only",
                   "Better-qualified enquiries reach your team",
                   "You focus on judgement; the Twin handles repetition"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start text-teal-900 font-medium">
                     <svg className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm font-bold uppercase tracking-widest text-navy-800">NeuraScaleX delivers this with two layers—one for patients, one for you.</p>
          </div>
        </div>
      </section>

      {/* 5. ONE SYSTEM. TWO LAYERS. */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl serif mb-4">One System. Two Layers.</h2>
            <p className="text-lg text-gray-400 font-light">Patient-facing clarity, plus clinician-facing Intelligence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Layer 1 */}
            <div className="bg-white text-navy-900 p-10 rounded-sm border-t-4 border-teal-500">
               <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-2 block">LAYER 1: DIGITAL TWIN</span>
               <h3 className="text-3xl serif mb-6">Answer & guide (patient-facing)</h3>
               <p className="text-gray-600 leading-relaxed mb-8 h-24">
                 Embedded on your website, your Digital Twin answers routine questions using approved materials—fees, insurance, pathways, programmes, booking, and policies.
               </p>
               <div className="pt-8 border-t border-gray-100">
                 <p className="text-sm font-bold text-navy-900">Result: Patients arrive informed. Your team handles fewer repeat enquiries.</p>
               </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-navy-800 text-white p-10 rounded-sm border-t-4 border-gold-500">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 block">LAYER 2: INTELLIGENCE</span>
               <h3 className="text-3xl serif mb-6">See what patients need (clinician-facing)</h3>
               <p className="text-gray-300 leading-relaxed mb-8 h-24">
                 The Intelligence dashboard shows what patients are asking, where they get stuck, and what needs follow-up—so you know what to clarify, publish, or route next.
               </p>
               <div className="pt-8 border-t border-white/10">
                 <p className="text-sm font-bold text-white">Result: Clear priorities. Less guesswork. Better enquiry quality.</p>
               </div>
            </div>
          </div>

          <div className="text-center space-y-4">
             <p className="text-sm text-gray-400">Built-in next steps: booking links, forms, resources, and boundary-safe signposting—configured to your pathways.</p>
             <p className="text-xs text-gold-500/80 italic">Optional: weekly Practice Brief delivered to your inbox (so you don’t have to check a dashboard).</p>
          </div>
        </div>
      </section>

      {/* 6. LIVE PILOTS */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl serif text-navy-900 mb-4">Live pilots with health professionals.</h2>
              <p className="text-gray-600 font-light">Built for real practice workflows. Refined through clinician feedback.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Dr. Deepak Ravindran", role: "Pain Medicine (Pilot)" },
                { name: "Dr. Abrar Hussain", role: "Psychiatry (Pilot)" },
                { name: "Dr. Arokia Antonysamy", role: "Psychiatry (Pilot)" },
              ].map((doc, i) => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 text-center">
                   <div className="w-16 h-16 bg-navy-50 rounded-full mx-auto mb-4 flex items-center justify-center text-navy-900 font-serif font-bold text-xl">
                      {doc.name.split(' ').map(n => n[0]).join('').substring(0,2)}
                   </div>
                   <h3 className="text-lg font-bold text-navy-900 serif mb-1">{doc.name}</h3>
                   <p className="text-xs uppercase tracking-widest text-teal-800">{doc.role}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. LIVE IN 7 DAYS */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl serif text-navy-900 mb-4">Live in 7 days—with minimal effort from you.</h2>
              <p className="text-lg text-gray-500 font-light">Setup call → build → verify → deploy.</p>
           </div>

           <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:pl-0 space-y-12">
              {[
                { step: "Step 1 — Setup (Day 1)", desc: "45-minute call to capture scope, boundaries, tone, and pathways." },
                { step: "Step 2 — Build & calibration (Days 2–5)", desc: "We assemble your approved knowledge base from your website, documents, FAQs, and content." },
                { step: "Step 3 — Verify & go live (Day 7)", desc: "15-minute verification call. You sign off. We deploy." }
              ].map((s, i) => (
                <div key={i} className="relative pl-12 md:pl-24 group">
                   <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-gold-500 group-hover:scale-110 transition-transform"></div>
                   <h3 className="text-xl serif text-navy-900 mb-2">{s.step}</h3>
                   <p className="text-gray-600 font-light max-w-lg">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. SAFETY */}
      <section className="py-24 bg-softgreen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl serif text-navy-900 mb-4">Designed to protect trust.</h2>
              <p className="text-lg text-teal-900 font-light">Approved sources. Clear boundaries. Controlled behaviour.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Approved Sources Only", text: "Only the materials you approve—website pages, FAQs, documents, and vetted content." },
                { title: "Scope Boundaries You Control", text: "Non-clinical by design. No diagnosis or medication advice. Clear limits defined per clinician and practice." },
                { title: "Safe Refusal & Signposting", text: "If a query crosses into clinical advice or urgent risk, the Twin declines and signposts appropriately." },
                { title: "Conversation Logs & Improvement", text: "Review conversations, refine boundaries, and update approved sources as your practice evolves." },
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-teal-100/50">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-4 min-h-[40px]">{card.title}</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                </div>
              ))}
           </div>
           
           <div className="text-center mt-12 pt-8 border-t border-teal-800/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Non-clinical. Not medical advice. Not a medical device.</p>
           </div>
        </div>
      </section>

      {/* 9. PRICING & PILOT OFFER */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
           <div className="bg-navy-900 text-white rounded-[2rem] p-10 md:p-16 shadow-2xl flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                 <h2 className="text-4xl md:text-5xl serif mb-6">Start with a 30-day pilot.</h2>
                 <p className="text-gray-300 font-light mb-8">Full access for 30 days. No credit card required. Cancel anytime.</p>
                 <ul className="space-y-4 mb-8">
                    {["Full platform access for 30 days", "Built from your content (45-minute setup call)", "Live on your website in 7 days", "Cancel anytime"].map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <svg className="w-5 h-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                 </ul>
                 <p className="text-sm font-bold text-gold-500">White-glove build & calibration included during onboarding.</p>
              </div>

              <div className="flex-1 w-full md:w-auto flex flex-col items-center md:items-end">
                 <div className="mb-10 text-center md:text-right w-full">
                    <div className="mb-8">
                       <p className="text-sm text-gray-400 line-through decoration-red-500/70 mb-3">Setup Fee: £3,000</p>
                       <p className="text-sm font-bold text-gold-500 uppercase tracking-widest">Waived for the first 50 customers</p>
                    </div>
                    
                    <div>
                       <p className="text-6xl md:text-7xl font-serif text-white leading-none mb-3">£149<span className="text-2xl text-gray-500 font-sans">/month</span></p>
                       <p className="text-sm text-gray-500">thereafter</p>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-4 w-full max-w-xs">
                    <Link to="/free-trial" className="bg-gold-500 text-navy-950 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-all shadow-lg text-center">Start Free Trial</Link>
                    <Link to="/demo" className="border border-white/20 text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">Request a Walkthrough</Link>
                 </div>

                 <div className="mt-8 bg-white/5 p-4 rounded-lg border border-white/5 text-left w-full max-w-xs">
                    <p className="text-[10px] text-orange-300 font-bold uppercase tracking-widest mb-1">Capacity note:</p>
                    <p className="text-xs text-gray-400 leading-relaxed">Limited onboarding capacity: we onboard every practitioner personally to ensure safety. Currently accepting 10 this quarter.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 className="text-4xl serif text-navy-900 mb-12 text-center">Common questions. Clear answers.</h2>
            <div className="space-y-12">
               {[
                 { q: "Is this training on my data?", a: "No. The Twin is built from clinician-approved materials you provide. We do not use your proprietary knowledge to train public models." },
                 { q: "Does it give medical advice?", a: "No. It is non-clinical by design. It provides orientation, education from approved sources, and signposting to your pathways." },
                 { q: "What if someone asks diagnostic or medication questions?", a: "The Twin refuses politely and routes the user to your preferred clinical process." },
                 { q: "How long to go live?", a: "Typically 7 days with guided onboarding, depending on content readiness and routing complexity." },
                 { q: "Can I update content later?", a: "Yes. Add or remove approved sources via your dashboard at any time." }
               ].map((item, i) => (
                 <div key={i} className="border-b border-gray-200 pb-8">
                    <h3 className="text-lg font-serif font-bold text-navy-900 mb-3">{item.q}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-32 bg-navy-950 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-6xl serif mb-6">Ready to install your Digital Twin?</h2>
            <p className="text-xl text-gray-300 font-light mb-12">Start your pilot today—go live in 7 days.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
               <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">Start Free Trial</Link>
               <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">Request a Walkthrough</Link>
            </div>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Onboarding reach-out within 24 hours. No credit card required.</p>
         </div>
      </section>

    </div>
  );
};

export default Home;
