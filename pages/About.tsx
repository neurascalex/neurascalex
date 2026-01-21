
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const teamMembers = [
    {
      category: "STRATEGY",
      name: "Shyam Pitla",
      role: "Founder & CEO",
      bio: "Operator and product strategist building the Clinician Digital Twin category—governance-first, workflow-true, and adoption-led. Leads product direction, pilots, and go-to-market."
    },
    {
      category: "CLINICAL",
      name: "Prof. Dr. Deepak Ravindran",
      role: "Clinical Advisor & Pioneer",
      bio: "Practicing pain specialist and pilot partner. Guides scope boundaries, safe refusals, and clinical realism—ensuring the Twin reflects how clinicians communicate without drifting into advice."
    },
    {
      category: "PARTNERSHIPS",
      name: "Dr. Sunil Kumar",
      role: "Strategic Partner",
      bio: "Supports market learning and clinician adoption—helping shape what “trust and usability” means in practice for education, programmes, and patient-facing orientation."
    },
    {
      category: "GOVERNANCE",
      name: "Vikas Arora",
      role: "Non-Executive Director",
      bio: "Provides governance oversight and strategic counsel, ensuring NeuraScaleX remains disciplined in its standards, positioning, and long-term defensibility."
    },
    {
      category: "TECHNOLOGY",
      name: "Anil",
      role: "Head of Product & Engineering",
      bio: "Leads engineering delivery, deployment reliability, and security foundations—ensuring the platform is production-ready, auditable, and scalable across multiple clinician deployments."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white">
      {/* HERO */}
      <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-10 leading-tight">Trust infrastructure for clinician expertise.</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-4xl mx-auto">
            NeuraScaleX builds governed Clinician Digital Twins—created only from clinician-approved material, expressed in their voice, and designed to know where to stop.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-16">
            <div>Approved sources only</div>
            <div className="text-gold-500">•</div>
            <div>Non-clinical by design</div>
            <div className="text-gold-500">•</div>
            <div>Designed to know where to stop</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/free-trial" className="bg-gold-500 text-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-xl">
              Start Free Trial
            </Link>
            <Link to="/demo" className="text-white border-b border-white/50 pb-1 text-sm font-bold uppercase tracking-widest">
              Request a Demo
            </Link>
          </div>
          <p className="mt-8 text-[10px] text-gray-500 uppercase tracking-widest">Not medical advice.</p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl serif text-teal-800 mb-8">Our mission</h2>
            <p className="text-xl text-navy-900/70 font-light leading-relaxed mb-10">
              To help trusted clinicians scale their knowledge safely—without diluting standards, compromising boundaries, or needing to be “always on.”
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-6">Outcomes:</h3>
            {[
              "Reduce repetition and admin load",
              "Protect voice, judgement, and reputation",
              "Route people to the right next step—safely"
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="text-gold-500 text-xl mr-6 font-serif italic">0{i+1}</span>
                <p className="text-lg text-navy-800 font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-24 bg-softgreen border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl serif text-navy-800 mb-8">Healthcare doesn’t need more generic AI.</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Clinicians are under pressure to be digitally present, but their expertise is fragmented across platforms—and generic AI can mimic tone without standards. The result is reputational risk, inconsistency, and more time spent correcting misunderstandings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              "Knowledge scattered across PDFs, videos, posts, and talks",
              "Patients arrive misinformed and anxious",
              "Generic AI hallucinates and blurs scope",
              "Clinicians need governed scale that keeps boundaries intact"
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <span className="text-teal-800 mr-4 font-bold">/</span>
                <p className="text-sm font-medium text-navy-800 leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl serif text-teal-800 mb-16">Identity before features. Governance before scale.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {[
              { title: "Approved sources only", desc: "The Twin does not guess." },
              { title: "Voice-matched by design", desc: "Preserves your standards and tone." },
              { title: "Clear boundaries", desc: "Refuses clinical advice and routes safely." },
              { title: "Clinician control", desc: "Nothing goes live without approval." }
            ].map((belief, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-4">{belief.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl serif text-navy-800 mb-4">Built with clinicians. Shipped by operators.</h2>
            <p className="text-lg text-gray-500 font-light">NeuraScaleX is developed with practicing clinician input and delivered through a guided onboarding process designed for real-world workflows.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white p-10 border border-gray-100 rounded-sm flex flex-col h-full group hover:border-gold-500 transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 mb-6">{member.category}</span>
                <h3 className="text-2xl serif text-navy-900 mb-1">{member.name}</h3>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-6">{member.role}</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-center text-[10px] text-gray-400 uppercase tracking-widest italic">
            We collaborate with additional clinicians across specialties during pilots to validate boundaries, language, and workflow fit.
          </p>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl serif text-teal-800 mb-8">Safety is the product.</h2>
          <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
            NeuraScaleX is non-clinical by design, built from approved sources only, and engineered to refuse diagnosis/treatment guidance. Every Twin is tested privately before launch.
          </p>
          <Link to="/safety" className="text-sm font-bold uppercase tracking-widest text-teal-800 border-b border-teal-800/30 pb-1 hover:text-navy-900 transition-colors">
            Read our Safety Approach →
          </Link>
        </div>
      </section>

      {/* JOIN THE COHORT */}
      <section className="py-24 bg-gold-500 text-navy-950 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl serif mb-10">We’re onboarding a UK clinician cohort.</h2>
          <p className="text-lg mb-12 font-medium opacity-80">
            If you’re reputation-sensitive and time-poor, we’ll help you deploy a governed Digital Twin and go live in 7 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-navy-950 text-gold-500 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl">
              Start Free Trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border-2 border-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest">
              Request a Demo
            </Link>
          </div>
          <p className="text-xs uppercase tracking-widest font-bold opacity-70">
            30 days free. No credit card.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
