
import React from 'react';
import { Link } from 'react-router-dom';

const WhyNeuraScaleX: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-paper min-h-screen font-sans">
      
      {/* 1. HERO */}
      <section className="bg-paper py-24 lg:py-32 text-ink relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            The NeuraScaleX Advantage
          </h1>
          <p className="text-xl md:text-2xl text-ink/60 mb-12 font-light leading-relaxed font-serif italic-moment">
            Trust infrastructure for clinicians who want to scale clarity and protect clinical time—without compromising boundaries.
          </p>

          <div className="inline-flex flex-wrap justify-center items-center gap-x-6 gap-y-3 px-8 py-4 bg-teal-precise/5 border border-teal-precise/10 backdrop-blur-sm mb-12">
             <div className="label-mono text-ink/60 opacity-100 font-bold">
                <span className="w-1.5 h-1.5 bg-teal-precise rounded-full mr-3 inline-block"></span>
                Approved sources only
             </div>
             <div className="hidden sm:block text-ink/10">•</div>
             <div className="label-mono text-ink/60 opacity-100 font-bold">
                <span className="w-1.5 h-1.5 bg-teal-precise rounded-full mr-3 inline-block"></span>
                Non-clinical by design
             </div>
             <div className="hidden sm:block text-ink/10">•</div>
             <div className="label-mono text-ink/60 opacity-100 font-bold">
                <span className="w-1.5 h-1.5 bg-teal-precise rounded-full mr-3 inline-block"></span>
                Clinician sign-off before launch
             </div>
          </div>

          <div className="bg-white p-10 border border-ink/5 max-w-3xl mx-auto shadow-2xl relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-precise text-paper px-4 py-1 label-mono text-[9px] font-bold uppercase tracking-widest">The Pilot Advantage</div>
             <h2 className="text-3xl font-serif text-teal-precise mb-4">Scale what you do best—without adding more work.</h2>
             <p className="text-ink/60 font-light leading-relaxed mb-8 font-serif italic">
                NeuraScaleX helps you extend your clear explanations, consistent standards, and firm boundaries—without creating new tasks for your day.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/demo" className="bg-teal-precise text-paper px-8 py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-teal-precise/20">Request a Demo</Link>
                <Link to="/free-trial" className="border border-ink/20 text-ink px-8 py-4 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all">Start a Free Pilot</Link>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE FIRST MILE FRICTION */}
      <section className="py-24 bg-paper">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-serif text-ink mb-6">The moment NeuraScaleX exists for.</h2>
                 <p className="text-lg text-ink/60 font-light leading-relaxed mb-6 font-serif italic">
                    Patients don’t meet your expertise in the consultation room first. They meet it online—often late at night, uncertain, and looking for clarity. That first mile shapes trust.
                 </p>
                 <p className="text-lg text-ink/60 font-light leading-relaxed font-serif italic">
                    Meanwhile, high-value care and complex judgement wait while the surface layer consumes attention.
                 </p>
              </div>
              <div className="bg-ink/[0.02] p-10 border-l-4 border-teal-precise/30">
                 <h3 className="label-mono text-ink mb-6 opacity-100 font-bold">In practice, the same orientation questions repeat daily:</h3>
                 <ul className="space-y-4">
                    {["fees and availability", "suitability and pathways", "approach and programmes", "how to book"].map((item, i) => (
                       <li key={i} className="flex items-center text-ink font-medium font-serif italic">
                          <span className="w-6 h-6 rounded-full bg-white border border-ink/10 flex items-center justify-center text-teal-precise text-xs mr-4 shadow-sm">?</span>
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 3. ONE SYSTEM. TWO LAYERS. */}
      <section className="py-24 bg-teal-precise/5 border-y border-teal-precise/10">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif text-ink mb-4">One system. Two layers.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Layer 1 */}
               <div className="bg-paper p-10 border-t-4 border-teal-precise shadow-sm">
                  <span className="label-mono text-teal-precise mb-4 block font-bold opacity-100">Layer 1 — Patient Facing</span>
                  <h3 className="text-2xl font-serif text-ink mb-4">Digital Twin</h3>
                  <p className="text-ink/60 font-light mb-8 h-20">
                     A 24/7 assistant that answers routine questions in your tone, using only approved materials.
                  </p>
                  <div className="bg-ink/[0.02] p-6 border border-ink/5">
                     <p className="label-mono text-ink mb-2 opacity-100 font-bold">Boundary behaviour:</p>
                     <p className="text-sm text-ink/60 font-serif italic">
                        If a question crosses into clinical advice (e.g., “Should I stop medication?”), the Twin declines and signposts to your preferred next step.
                     </p>
                  </div>
               </div>

               {/* Layer 2 */}
               <div className="bg-paper p-10 border-t-4 border-teal-precise/30 shadow-sm">
                  <span className="label-mono text-teal-precise mb-4 block font-bold opacity-100">Layer 2 — Clinician Facing</span>
                  <h3 className="text-2xl font-serif text-ink mb-4">Intelligence</h3>
                  <p className="text-ink/60 font-light mb-8 h-20">
                     A dashboard that shows what patients are actually asking—so you can reduce confusion and improve the right information.
                  </p>
                  <div className="bg-teal-precise/5 p-6 border border-teal-precise/10">
                     <p className="label-mono text-teal-precise mb-3 opacity-100 font-bold">You see:</p>
                     <ul className="text-sm text-ink/70 space-y-2 label-mono">
                        <li>• Repeated friction points (fees, booking, insurance)</li>
                        <li>• Demand patterns over time</li>
                        <li>• Where clarity is missing (content gaps)</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. GOVERNANCE IS THE PRODUCT */}
      <section className="py-24 bg-paper">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif text-ink mb-6">Governance is the product.</h2>
               <p className="text-lg text-ink/60 font-light max-w-3xl mx-auto font-serif italic text-balance">
                  Generic AI can sound confident without standards. NeuraScaleX is deliberately non-clinical by design—because clinician reputation depends on predictable boundaries.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-10 border border-ink/5 group hover:border-teal-precise transition-all">
                  <div className="w-12 h-12 mx-auto bg-teal-precise/5 rounded-full flex items-center justify-center text-teal-precise mb-6 border border-teal-precise/10">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="label-mono text-ink mb-3 opacity-100 font-bold">Approved sources only</h3>
                  <p className="text-sm text-ink/60 font-light">No “internet knowledge.” Answers come from clinician-approved materials.</p>
               </div>
               <div className="p-10 border border-ink/5 group hover:border-teal-precise transition-all">
                  <div className="w-12 h-12 mx-auto bg-teal-precise/5 rounded-full flex items-center justify-center text-teal-precise mb-6 border border-teal-precise/10">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="label-mono text-ink mb-3 opacity-100 font-bold">Hard boundaries</h3>
                  <p className="text-sm text-ink/60 font-light">We define what your Twin will not do—and enforce refusal + signposting by design.</p>
               </div>
               <div className="p-10 border border-ink/5 group hover:border-teal-precise transition-all">
                  <div className="w-12 h-12 mx-auto bg-teal-precise/5 rounded-full flex items-center justify-center text-teal-precise mb-6 border border-teal-precise/10">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h3 className="label-mono text-ink mb-3 opacity-100 font-bold">Clinician control</h3>
                  <p className="text-sm text-ink/60 font-light">Nothing goes live until you review and sign off.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. WHITE GLOVE SETUP */}
      <section className="py-24 bg-paper text-ink relative border-y border-ink/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl font-serif mb-6 text-ink">45 minutes with you. <br/><span className="text-teal-precise italic">A system that runs without you.</span></h2>
                  <p className="text-ink/40 font-light leading-relaxed mb-10 font-serif italic">
                     Even with a great platform, most clinicians don’t have time to curate content, calibrate tone, test edge cases, and maintain safety. That’s what we handle.
                  </p>
                  <blockquote className="border-l-2 border-teal-precise pl-6 italic text-lg text-ink/70 font-serif">
                     “Spend one hour with us, and you get your time back multiple times over.”
                     <footer className="label-mono text-teal-precise mt-3 not-italic opacity-100 font-bold">— Prof. Dr. Deepak Ravindran</footer>
                  </blockquote>
               </div>
               <div className="space-y-8">
                  {[
                     { title: "Discovery (45 mins)", desc: "We capture your scope, boundaries, tone, and preferred pathways." },
                     { title: "Build & calibration (7 days)", desc: "We curate and structure your approved sources—website pages, documents, videos, FAQs—so responses are consistent and boundary-safe." },
                     { title: "Verification (15 mins)", desc: "A short review to confirm behaviour before deployment." }
                  ].map((step, i) => (
                     <div key={i} className="flex">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-teal-precise flex items-center justify-center text-teal-precise text-xs font-bold mr-6 shadow-sm">{i+1}</div>
                        <div>
                           <h4 className="text-lg font-serif text-ink mb-2">{step.title}</h4>
                           <p className="text-ink/40 text-sm font-light">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. BUILT WITH CLINICIANS */}
      <section className="py-24 bg-paper">
         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-serif text-ink mb-6">Validated in real workflows.</h2>
            <p className="text-lg text-ink/60 font-light mb-12 font-serif italic text-balance">
               NeuraScaleX is developed with practising clinicians and clinics—pressure-testing tone, boundaries, and usefulness in the real world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
               {[
                  { name: "Prof. Dr. Deepak Ravindran", role: "Pain Medicine", status: "Live" },
                  { name: "Dr. Sunil Kumar", role: "Lifestyle Medicine", status: "Live" },
                  { name: "Dr. Arokia Antonysamy", role: "Mental Health", status: "Live" },
                  { name: "Berkshire Pain Clinic", role: "Clinic Pilot", status: "Live" },
                  { name: "Private Practice Psychiatry", role: "Feb 9, 2026", status: "Launching" },
               ].map((c, i) => (
                  <div key={i} className="bg-white p-6 border border-ink/5 shadow-sm flex items-center justify-between text-left group hover:border-teal-precise/30 transition-all">
                     <div>
                        <h4 className="text-sm font-bold text-ink label-mono opacity-100">{c.name}</h4>
                        <p className="text-[10px] text-ink/40 label-mono opacity-100 font-bold uppercase">{c.role}</p>
                     </div>
                     <span className={`label-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 border ${c.status === "Live" ? "bg-teal-precise/5 text-teal-precise border-teal-precise/10" : "bg-teal-precise/5 text-teal-precise border-teal-precise/10"}`}>
                        {c.status}
                     </span>
                  </div>
               ))}
            </div>
            
            <Link to="/#pilots" className="text-teal-precise font-bold uppercase tracking-widest text-[10px] border-b border-teal-precise/30 pb-1 hover:text-ink transition-all">
               View live deployments →
            </Link>
         </div>
      </section>

      {/* 7. WHAT SUCCESS LOOKS LIKE */}
      <section className="py-24 bg-paper border-y border-ink/5">
         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-serif text-ink mb-12">What success looks like.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
               {[
                  "Fewer repeat orientation questions reaching your team",
                  "Clearer enquiries from better-prepared patients",
                  "Visibility into real demand (so you know what to clarify next)",
                  "Safe signposting when questions cross clinical boundaries"
               ].map((item, i) => (
                  <div key={i} className="flex items-start">
                     <span className="text-teal-precise mr-4 text-xl">✓</span>
                     <p className="text-ink/60 font-serif italic text-sm">{item}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 bg-paper text-ink text-center relative overflow-hidden border-t border-ink/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl md:text-7xl font-serif mb-6 text-ink leading-tight">Ready to deploy a governed <br/><span className="text-teal-precise italic">Digital Twin?</span></h2>
           <p className="text-xl text-ink/60 font-serif italic mb-12">
             Simple, safe, and live in 14 days.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
              <Link to="/demo" className="w-full sm:w-auto bg-teal-precise text-paper px-12 py-6 font-bold uppercase tracking-widest shadow-2xl hover:brightness-110 transition-all label-mono">
                Request a Demo
              </Link>
              <Link to="/free-trial" className="w-full sm:w-auto border border-ink/20 text-ink px-12 py-6 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono">
                Start a Free Pilot
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default WhyNeuraScaleX;
