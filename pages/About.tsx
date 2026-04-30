import React from 'react';
import { Link } from 'react-router-dom';

interface Leader {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin?: string;
}

const About: React.FC = () => {
  const leadership: Leader[] = [
    {
      name: "Shyam Pitla",
      role: "Founder & CEO",
      bio: "Spent two years embedded in UK private specialist clinics — building content strategy, operationalising practices, and watching the same gap appear in every deployment: educational content that didn't convert. Founded NeuraScaleX to close that gap at the infrastructure level. Operator-founder. Product-led. Specialist-obsessed.",
      initials: "SP",
      linkedin: "https://www.linkedin.com/in/shyampitla/"
    },
    {
      name: "Dr Deepak Ravindran",
      role: "Chief Clinical Advisor & Co-Architect",
      bio: "Consultant in Pain Medicine. BSLM Trustee. Royal College fellow. Penguin author. Founder of Berkshire Pain Clinic. Deployed the first NeuraScaleX AI Clinic Page in his own practice 12 months before public launch — co-designing every safety boundary, refusal pattern, and escalation pathway from the inside.",
      initials: "DR",
      linkedin: "https://www.linkedin.com/in/deepak-ravindran-b225a61a/"
    },
    {
      name: "Dr Sunil Kumar",
      role: "Strategic Partner · Education & Adoption",
      bio: "Lifestyle Medicine physician. Forbes Coaches Council. Builder of one of the UK's leading executive health practices. Helps NeuraScaleX shape what \"patient trust\" actually means across orientation, content, and the moment a patient decides to book.",
      initials: "SK",
      linkedin: "https://www.linkedin.com/in/drsunilkumarlifestylemedicine/"
    },
    {
      name: "Vikas Arora",
      role: "Strategic Advisor",
      bio: "15+ years building go-to-market and growth strategy across Microsoft, LinkedIn, Vodafone, and BetterUp. Advises NeuraScaleX on category creation, founder operating cadence, and scaling the commercial engine alongside the product.",
      initials: "VA",
      linkedin: "https://www.linkedin.com/in/vikas-arora-7256502/"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-paper font-sans overflow-x-hidden">
      
      {/* 1. HERO */}
      <section className="bg-paper py-16 lg:py-24 text-ink relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">ABOUT NEURASCALEX</span>
          <h1 className="text-6xl md:text-8xl font-serif text-ink mb-12 leading-[1.05] tracking-tight max-w-5xl mx-auto">
            Built with clinicians, <br />
            <span className="italic text-teal-precise">for the calendars they deserve.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink/60 mb-12 font-serif italic italic-moment leading-relaxed max-w-3xl mx-auto">
            NeuraScaleX is the AI front door for UK specialist care. We help clinicians turn years of educational content into patients on the calendar — without compromising the clinical standards their reputation is built on.
          </p>
        </div>
      </section>

      {/* 2. WHY WE BUILT THIS */}
      <section className="py-16 lg:py-24 bg-paper relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">WHY WE BUILT THIS</span>
              <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-[1.1] tracking-tight">
                Specialist clinicians have spent <br className="hidden sm:block" />
                years building reputations the <br className="hidden sm:block" />
                <span className="italic text-teal-precise">market never quite knew how to value.</span>
              </h2>
            </div>
            <div className="space-y-8 text-xl text-ink/60 font-serif italic italic-moment leading-relaxed lg:pt-16 uppercase-first-letter">
              <p>
                Years of YouTube videos. Books that took weekends and evenings. Articles in BMJ. Conference talks. Podcast appearances. Patient education FAQs answered a thousand times in clinic.
              </p>
              <p>
                Most of that work has never paid back in bookings. The views came. The calendars stayed half-empty. The competitor with a worse YouTube channel but a working conversion layer won the patient who should have been theirs.
              </p>
              <p>
                We built NeuraScaleX as the missing layer — the infrastructure that turns a 20-year career of content into a working revenue engine, while keeping every safety boundary a UK specialist needs.
              </p>
              <p className="text-ink font-bold not-italic">
                Without that layer, the work doesn't stop being important. It just stops being productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUNDING TEAM */}
      <section className="py-16 lg:py-24 bg-paper border-y border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-24">
            <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">THE FOUNDING TEAM</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ink leading-tight tracking-tight max-w-4xl">
              Built by people who've sat across <br className="hidden md:block" /> the table from UK specialists for <br className="hidden md:block" /> <span className="italic text-teal-precise">two years.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/5 border border-ink/5">
            {leadership.map((person, i) => (
              <div key={i} className="bg-white p-10 md:p-16 group hover:bg-teal-precise/[0.02] transition-all duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-20 h-20 bg-paper border border-ink/10 flex items-center justify-center text-2xl font-serif font-bold text-ink shadow-inner group-hover:border-teal-precise/30 transition-colors">
                    {person.initials}
                  </div>
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink/20 hover:text-teal-precise transition-colors">
                       <span className="label-mono text-[10px] tracking-widest font-bold uppercase">LinkedIn →</span>
                    </a>
                  )}
                </div>
                <div className="mb-8">
                  <h3 className="text-3xl font-serif text-ink mb-2">{person.name}</h3>
                  <p className="label-mono text-teal-precise text-[10px] tracking-widest uppercase font-bold">{person.role}</p>
                </div>
                <p className="text-lg text-ink/60 font-serif italic italic-moment leading-relaxed flex-grow">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PRINCIPLES */}
      <section className="py-16 lg:py-24 bg-paper relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">OUR PRINCIPLES</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ink leading-tight tracking-tight max-w-4xl mx-auto">
              Four principles that <br className="hidden md:block" /> <span className="italic text-teal-precise font-bold">shape every deployment.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "p1",
                title: "Approved sources only",
                desc: "Every response is grounded in clinician-approved content. Not the open internet. Not GPT's general training. The clinician's voice. The clinician's judgement. The clinician's words."
              },
              {
                id: "p2",
                title: "Non-clinical by design",
                desc: "The AI never diagnoses, prescribes, or gives personalised clinical advice. Architecture prevents it. Boundaries are defined before deployment. Refusal patterns are built in."
              },
              {
                id: "p3",
                title: "Clinician-owned",
                desc: "Nothing goes live without clinician review. Clinicians can update their materials, review conversations, and refine boundaries as practice evolves."
              },
              {
                id: "p4",
                title: "Specialist-first",
                desc: "We don't build generic healthcare AI. We build the conversion infrastructure for UK specialist care — calibrated to the economics, standards, and reputation of private practice."
              }
            ].map((p) => (
              <div key={p.id} className="bg-white border border-ink/5 p-12 hover:border-teal-precise transition-all duration-500 group flex flex-col h-full shadow-sm hover:shadow-2xl">
                <div className="mb-10 inline-block h-px w-12 bg-teal-precise/20 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-bold font-sans text-ink mb-6 uppercase tracking-wider">{p.title}</h3>
                <p className="text-base text-ink/50 font-serif italic italic-moment leading-relaxed flex-grow">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
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

export default About;
