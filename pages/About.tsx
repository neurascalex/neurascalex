import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

interface Leader {
  tag: string;
  name: string;
  bio: string;
}

const About: React.FC = () => {
  const leadership: Leader[] = [
    {
      tag: "SP · FOUNDER & CEO",
      name: "Shyam Pitla",
      bio: "Spent two years embedded in UK private specialist clinics — building content strategy, operationalising practices, and watching the same gap appear in every deployment: educational content that didn’t convert. Founded NeuraScaleX to close the gap between expertise and visibility — so no patient searching at 11pm is met with silence."
    },
    {
      tag: "DR · CHIEF MEDICAL ADVISOR",
      name: "Prof. Deepak Ravindran",
      bio: "Consultant in Pain Medicine. BSLM Trustee. Royal College fellow. Penguin author. Founder of Berkshire Pain Clinic. Deployed the first Ask Page in his own practice and co-designed every safety boundary, refusal pattern, and escalation pathway from the inside."
    },
    {
      tag: "SK · STRATEGIC PARTNER – EDUCATION & ADOPTION",
      name: "Dr Sunil Kumar",
      bio: "Lifestyle Medicine physician. Forbes Coaches Council. Builder of one of the UK’s leading executive health practices. Helps NeuraScaleX shape what \"patient trust\" actually means across orientation, content, and the moment a patient decides to book."
    },
    {
      tag: "VA · STRATEGIC ADVISOR",
      name: "Vikas Arora",
      bio: "15+ years building go-to-market and growth strategy across Microsoft, LinkedIn, Vodafone, and BetterUp. Advises NeuraScaleX on category creation, founder operating cadence, and scaling the commercial engine alongside the product."
    }
  ];

  const principles = [
    {
      title: "APPROVED SOURCES ONLY",
      desc: "Every response is grounded in clinician-approved content. Not the open internet. Not generic AI training. The clinician’s voice. The clinician’s judgement. The clinician’s words."
    },
    {
      title: "NON-CLINICAL BY DESIGN",
      desc: "The Ask page never diagnoses, prescribes, or gives personalised clinical advice. Architecture prevents it. Boundaries are defined before deployment. Refusal patterns are built in."
    },
    {
      title: "CLINICIAN-OWNED",
      desc: "Nothing goes live without clinician review. Clinicians can update their materials, review conversations, and refine boundaries as practice evolves."
    },
    {
      title: "SPECIALIST-FIRST",
      desc: "We don’t build generic healthcare AI. We build the conversion infrastructure for UK specialist care — calibrated to the economics, standards, and reputation of private practice."
    }
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "name": "About NeuraScaleX", "url": "https://www.neurascalex.com/about" },
      { "@type": "Person", "name": "Shyam Pitla", "jobTitle": "Founder & CEO", "worksFor": { "@type": "Organization", "name": "NeuraScaleX" }, "sameAs": "https://www.linkedin.com/in/shyampitla/" },
      { "@type": "Person", "name": "Deepak Ravindran", "jobTitle": "Chief Medical Advisor", "worksFor": { "@type": "Organization", "name": "NeuraScaleX" } },
      { "@type": "Person", "name": "Sunil Kumar", "jobTitle": "Strategic Partner — Education & Adoption", "worksFor": { "@type": "Organization", "name": "NeuraScaleX" } },
      { "@type": "Person", "name": "Vikas Arora", "jobTitle": "Strategic Advisor", "worksFor": { "@type": "Organization", "name": "NeuraScaleX" } },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.neurascalex.com/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.neurascalex.com/about" }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#F7F4ED] min-h-screen text-ink font-sans pt-24 pb-20 overflow-x-hidden">
      <SEO 
        title="About NeuraScaleX — Built With UK Clinicians"
        description="Built with clinicians, for the calendars they deserve. Founded by Shyam Pitla with Prof. Deepak Ravindran as Chief Medical Advisor. Four principles shape every deployment: approved sources only, non-clinical by design, clinician-owned, specialist-first."
        canonical="https://www.neurascalex.com/about"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogTitle="Built with clinicians, for the calendars they deserve."
        ogDescription="The team and principles behind NeuraScaleX — the first conversation for UK specialist care."
        ogImage="https://www.neurascalex.com/assets/og-about.png"
        jsonLd={aboutJsonLd}
      />
      
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-28 text-center max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase block mb-3">
            ABOUT NEURASCALEX
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-ink mb-8 leading-tight tracking-tight max-w-5xl mx-auto"
        >
          Built with clinicians, <span className="text-[#0D6E6E] italic font-medium">for the calendars they deserve.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-ink/85 leading-relaxed font-serif italic max-w-3xl mx-auto italic-moment"
        >
          NeuraScaleX is the first conversation for UK specialist care. We help clinicians turn years of educational content into patients on the calendar — without compromising the clinical standards their reputation is built on.
        </motion.p>
      </section>

      {/* 2. WHY WE BUILT THIS SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] p-8 md:p-14 lg:p-16 border border-neutral-200/60 shadow-sm"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase block">
                WHY WE BUILT THIS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight tracking-tight">
                Specialist clinicians have spent years building reputations the <span className="text-[#0D6E6E] italic font-medium">market never quite knew how to value.</span>
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-ink/75 leading-relaxed font-sans text-left">
              <p>
                Years of YouTube videos. Books that took weekends and evenings. Articles in the BMJ. Conference talks. Podcast appearances. Patient education FAQs answered a thousand times in clinic.
              </p>
              <p>
                Most of that work has never paid back in bookings. The views came. The calendars stayed half-empty. The competitor with a worse channel but a working conversion layer won the patient who should have been theirs.
              </p>
              <p>
                We built NeuraScaleX as the missing layer — the infrastructure that turns a 20-year career of content into a working revenue engine, while keeping every safety boundary a UK specialist needs.
              </p>
              <p className="font-bold text-ink pt-2 text-lg">
                Without that layer, the work doesn’t stop being important. It just stops being productive.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. THE FOUNDING TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase block mb-4">
            THE FOUNDING TEAM
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink leading-tight tracking-tight max-w-4xl mx-auto">
            Built by people who’ve sat across the table <span className="text-[#0D6E6E] italic font-medium">from UK specialists for two years.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {leadership.map((person, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-neutral-200/60 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#0D6E6E]/10 transition-all duration-300"
            >
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#B45309] uppercase block mb-4">
                  {person.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4 leading-snug">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-ink/75 leading-relaxed font-sans">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. OUR PRINCIPLES SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] p-8 md:p-14 lg:p-16 border border-neutral-200/60 shadow-sm"
        >
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase block mb-4">
            OUR PRINCIPLES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ink mb-12 leading-tight tracking-tight max-w-3xl mx-auto">
            Four principles that <span className="text-[#0D6E6E] italic font-medium">shape every deployment.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {principles.map((p, idx) => (
              <div 
                key={idx} 
                className="border border-neutral-200/60 rounded-2xl p-6 md:p-8 flex flex-col bg-[#FDFDFD] hover:border-[#0D6E6E]/20 transition-all duration-300"
              >
                <h3 className="font-sans text-xs font-bold tracking-[0.1em] text-ink mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed font-sans flex-grow">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-12 text-center max-w-5xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink mb-10 leading-tight tracking-tight"
        >
          Become <span className="text-[#0D6E6E] italic font-medium">impossible to ignore.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <Link 
            to="/demo" 
            className="w-full sm:w-auto bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-sm hover:shadow transition-all text-center"
          >
            Book a founder demo
          </Link>
          <Link 
            to="/free-trial" 
            className="w-full sm:w-auto bg-white border border-ink/20 text-ink px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-sm hover:bg-neutral-50 transition-all text-center"
          >
            Apply for the Founding 20
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
