
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Leader {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin?: string;
  longBio?: string;
}

const About: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leadership: Leader[] = [
    {
      name: "Shyam Pitla",
      role: "Founder, Product & Strategy",
      bio: "Operator-founder building NeuraScaleX as a governed platform: Digital Twin + Intelligence, clinician onboarding, and product-led deployment.",
      initials: "SP",
      linkedin: "https://www.linkedin.com/in/shyampitla/",
      longBio: "Operator-founder building NeuraScaleX as a governed platform: Digital Twin + Intelligence, clinician onboarding, and product-led deployment."
    },
    {
      name: "Dr. Deepak Ravindran",
      role: "Chief Medical Advisor",
      bio: "Consultant in Pain Medicine and founder of Berkshire Pain Clinic. Guides scope boundaries, safe refusal patterns, and clinical realism across deployments.",
      initials: "DR",
      linkedin: "https://www.linkedin.com/in/deepak-ravindran-b225a61a/",
      longBio: "Consultant in Pain Medicine and founder of Berkshire Pain Clinic. Guides scope boundaries, safe refusal patterns, and clinical realism across deployments."
    },
    {
      name: "Dr. Sunil Kumar",
      role: "Strategic Partner (Education & Adoption)",
      bio: "Supports patient education and clinician adoption—helping shape what “trust and usability” means in practice across orientation, programmes, and patient-facing content.",
      initials: "SK",
      linkedin: "https://www.linkedin.com/in/drsunilkumarlifestylemedicine/",
      longBio: "Supports patient education and clinician adoption—helping shape what “trust and usability” means in practice across orientation, programmes, and patient-facing content."
    },
    {
      name: "Vikas Arora",
      role: "Advisory Board - GTM & Founder Transformation",
      bio: "Business strategist and transformation coach with 15+ years across Microsoft, LinkedIn, Vodafone and BetterUp. Supports NeuraScaleX with go-to-market clarity.",
      initials: "VA",
      linkedin: "https://www.linkedin.com/in/vikas-arora-7256502/",
      longBio: "Vikas Arora is a business strategist and transformation coach with 15+ years’ experience helping global organisations and high-growth startups scale through sharper go-to-market strategy, partnerships, and operational clarity. With leadership experience across Microsoft, LinkedIn, Vodafone and BetterUp, he brings a rare blend of enterprise discipline and founder-centric execution.\n\nAt NeuraScaleX, Vikas advises on strategic positioning, growth systems, and leadership development—so the platform’s clinical trust standard translates into real adoption and durable market momentum."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white font-sans">
      
      {/* 1. HERO */}
      <section className="bg-navy-900 py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-8 leading-tight">Trust infrastructure for clinician expertise.</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed font-serif">
            NeuraScaleX builds governed Digital Twins from clinician-approved materials—expressed in their voice, designed to stay within scope, and verified before launch.
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Non-clinical by design. Not medical advice.</p>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl serif text-navy-900 mb-8">Bring clarity to the first mile of care.</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Before patients book, they look for answers: fees, pathways, suitability, what to expect. When that clarity is missing, they arrive anxious—or they don’t arrive at all.
            <br/><br/>
            NeuraScaleX helps clinicians provide trusted orientation at scale, while protecting time for clinical judgement.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="py-24 bg-softgreen border-y border-teal-100/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif text-navy-900 mb-4">A Digital Twin for patients. <br/>An Intelligence layer for clinicians.</h2>
            <p className="text-gray-600">NeuraScaleX is built as two practical layers:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-10 rounded-sm shadow-sm border border-teal-100">
               <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 mb-4 block">Patient-Facing</span>
               <h3 className="text-2xl serif text-navy-900 mb-4">Digital Twin</h3>
               <p className="text-gray-600 font-light leading-relaxed">
                 A 24/7 website assistant that answers routine questions using clinician-approved sources—fees, pathways, services, programmes, booking—expressed in the clinician’s voice.
               </p>
            </div>
            <div className="bg-white p-10 rounded-sm shadow-sm border border-teal-100">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 mb-4 block">Clinician-Facing</span>
               <h3 className="text-2xl serif text-navy-900 mb-4">Intelligence</h3>
               <p className="text-gray-600 font-light leading-relaxed">
                 A dashboard that shows what patients are actually asking, where confusion happens, and what to clarify next—so teams improve the right page, the right FAQ, the right pathway.
               </p>
            </div>
          </div>

          <div className="bg-navy-900 text-white p-8 rounded-sm max-w-3xl mx-auto text-center border border-white/10">
             <h4 className="text-gold-500 font-serif text-xl italic mb-3">What “knows where to stop” means:</h4>
             <p className="text-gray-300 text-sm font-light leading-relaxed">
               It does not diagnose, prescribe, or give personalised treatment advice. When a question crosses into clinical advice, it declines and signposts to the clinician’s preferred next step.
             </p>
          </div>
        </div>
      </section>

      {/* 4. HOW WE BUILD */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
             <h2 className="text-4xl serif text-navy-900 mb-6">Governance before scale.</h2>
             <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
               We’re not building generic healthcare AI. We’re building clinician-owned, governed digital experiences.
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Approved sources only", desc: "Answers come from materials the clinician has verified." },
               { title: "Clear boundaries", desc: "Scope is defined up front; refusal + signposting is built in." },
               { title: "Clinician control", desc: "Nothing goes live without clinician review and sign-off." },
               { title: "Workflow-true onboarding", desc: "Designed for busy clinicians; live in days, not months." }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-gray-100 rounded-sm hover:border-gold-500 transition-colors">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-3">{item.title}</h3>
                 <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. BUILT WITH CLINICIANS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl serif text-navy-900 mb-6">Developed alongside practising clinicians.</h2>
          <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
            NeuraScaleX is shaped through real deployments with clinicians who care deeply about standards. We use clinician feedback to refine tone, refusal patterns, and the Intelligence signals that are genuinely useful—then standardise what works into the platform.
          </p>
          <Link to="/#pilots" className="text-teal-800 font-bold uppercase tracking-widest text-xs border-b border-teal-800 pb-1 hover:text-navy-900 transition-colors">
            Explore pilots →
          </Link>
        </div>
      </section>

      {/* 6. LEADERSHIP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <h2 className="text-4xl serif text-navy-900 mb-16 text-center">Leadership</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
             {leadership.map((person, i) => (
               <div key={i} className="flex flex-col items-center text-center h-full">
                 {/* Initials */}
                 <div className="w-24 h-24 bg-navy-50 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-navy-900 mb-6 border border-gray-100 shadow-sm">
                   {person.initials}
                 </div>
                 <div className="flex items-center gap-2 mb-2 justify-center">
                    <h3 className="text-xl serif text-navy-900 font-bold">{person.name}</h3>
                    {person.linkedin && (
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#005582] transition-colors" title="LinkedIn Profile">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                 </div>
                 <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-4 h-8 flex items-center justify-center">{person.role}</p>
                 <p className="text-sm text-gray-600 leading-relaxed font-light mb-6 flex-grow">{person.bio}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 7. SAFETY IS THE PRODUCT */}
      <section className="py-24 bg-softgreen">
         <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl serif text-teal-800 mb-6">Designed to protect trust.</h2>
           <p className="text-lg text-gray-600 font-light leading-relaxed mb-0">
             NeuraScaleX is non-clinical by design and built from approved sources only. Every Twin is verified privately before launch, and clinicians can review conversations and update approved materials over time—so behaviour stays aligned as practice needs evolve.
           </p>
         </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-32 bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl md:text-6xl serif mb-6">Want to see how NeuraScaleX works in practice?</h2>
           <p className="text-xl text-gray-300 font-light mb-12">
             Explore live pilot examples or request a walkthrough of the Digital Twin + Intelligence layer.
           </p>
           
           <div className="flex justify-center mb-10">
              <Link to="/demo" className="bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
                Request a Walkthrough
              </Link>
           </div>
           
           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
             No hard sell. We’ll show the product, the boundaries, and what the Intelligence looks like.
           </p>
        </div>
      </section>

      {/* LEADER BIO MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedLeader(null)}></div>
          <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
             <button 
               onClick={() => setSelectedLeader(null)}
               className="absolute top-4 right-4 text-gray-400 hover:text-navy-900 transition-colors p-2"
             >
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
             
             <div className="p-10 md:p-14">
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-20 h-20 bg-navy-50 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-navy-900 border border-gray-100 shadow-sm flex-shrink-0">
                      {selectedLeader.initials}
                   </div>
                   <div>
                      <h3 className="text-3xl serif text-navy-900 mb-2">{selectedLeader.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-gold-600">{selectedLeader.role}</p>
                   </div>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  {selectedLeader.longBio ? (
                    selectedLeader.longBio.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 font-light leading-relaxed mb-4 text-base">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600 font-light leading-relaxed mb-4 text-base">
                       {selectedLeader.bio}
                    </p>
                  )}
                </div>

                {selectedLeader.linkedin && (
                   <div className="mt-8 pt-8 border-t border-gray-100">
                      <a href={selectedLeader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-navy-900 font-bold uppercase tracking-widest text-xs hover:text-teal-800 transition-colors">
                         <svg className="w-4 h-4 fill-[#0077b5] mr-2" viewBox="0 0 24 24">
                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                         </svg>
                         Connect on LinkedIn
                      </a>
                   </div>
                )}
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;
