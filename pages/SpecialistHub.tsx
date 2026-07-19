import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface Specialist {
  name: string;
  role: string;
  desc: string;
  imageInitials: string;
  status: 'LIVE';
  chatUrl: string;
  websiteUrl: string;
  buttonText: string;
  linkText: string;
}

const specialists: Specialist[] = [
  {
    name: "Prof. Deepak Ravindran",
    role: "Pain Medicine Consultant · Berkshire Pain Clinic",
    desc: "Orienting patients on pain management pathways and long-covid recovery — reducing repetitive questions before consultation.",
    imageInitials: "DR",
    status: 'LIVE',
    chatUrl: "https://askdeepak.neurascalex.com/",
    websiteUrl: "https://deepakravindran.co.uk/",
    buttonText: "Ask Deepak →",
    linkText: "Visit clinic website ↗"
  },
  {
    name: "Dr Abrar Hussain",
    role: "Consultant Psychiatrist · Berkshire Psychiatrist",
    desc: "A governed first conversation for private psychiatry — booking, fees, suitability and admin queries answered safely, around the clock.",
    imageInitials: "AH",
    status: 'LIVE',
    chatUrl: "https://askabrar.neurascalex.com/",
    websiteUrl: "https://www.berkshirepsychiatrist.co.uk/",
    buttonText: "Ask Dr Abrar →",
    linkText: "Visit clinic website ↗"
  },
  {
    name: "Dr Catherine Sampa Muyeba",
    role: "Consultant Psychiatrist · REAPing Women",
    desc: "A first conversation for a community of high-achieving women — routing burnout, clarity and programme questions to the right next step.",
    imageInitials: "CM",
    status: 'LIVE',
    chatUrl: "https://askcathy.neurascalex.com/",
    websiteUrl: "https://reapingwomen.com/",
    buttonText: "Ask Dr Cathy →",
    linkText: "Visit community website ↗"
  }
];

const SpecialistCard: React.FC<{ specialist: Specialist }> = ({ specialist }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm flex flex-col h-full hover:shadow-md hover:border-[#0D6E6E]/20 transition-all duration-300 group text-left"
  >
    {/* Card Top: LIVE status and Avatar */}
    <div className="flex justify-between items-start mb-8">
      <div className="w-14 h-14 rounded-full bg-[#E6F3F3] flex items-center justify-center text-lg font-serif font-bold text-[#0D6E6E] border border-[#B3D9D9]">
        {specialist.imageInitials}
      </div>
      
      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F3F3] rounded-full border border-[#B3D9D9]">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-sans font-bold tracking-wider text-[#0D6E6E] uppercase">LIVE</span>
      </div>
    </div>

    {/* Specialist Info */}
    <div className="mb-4">
      <h3 className="text-2xl font-serif font-bold text-ink leading-tight mb-1 group-hover:text-[#0D6E6E] transition-colors duration-200">
        {specialist.name}
      </h3>
      <p className="text-[11px] font-sans font-semibold tracking-wider text-[#0D6E6E] uppercase">
        {specialist.role}
      </p>
    </div>

    {/* Description */}
    <p className="text-base text-ink/75 leading-relaxed mb-8 flex-grow font-sans">
      {specialist.desc}
    </p>

    {/* Interactive Buttons */}
    <div className="space-y-4 pt-4 border-t border-neutral-100">
      <a 
        href={specialist.chatUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-[#001A33] hover:bg-[#002B54] text-white py-4 rounded-xl font-sans font-semibold text-center transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
      >
        {specialist.buttonText}
      </a>
      {specialist.websiteUrl && (
        <a 
          href={specialist.websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-sans font-bold tracking-wider text-ink/65 uppercase hover:text-[#0D6E6E] transition-colors py-2"
        >
          {specialist.linkText}
        </a>
      )}
    </div>
  </motion.div>
);

const SpecialistHub: React.FC = () => {
  const specialistHubJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "Live Ask pages on NeuraScaleX",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ask Deepak — Prof. Deepak Ravindran, Pain Medicine", "url": "https://askdeepak.neurascalex.com" },
          { "@type": "ListItem", "position": 2, "name": "Ask Dr Abrar — Dr Abrar Hussain, Consultant Psychiatrist", "url": "https://askabrar.neurascalex.com" },
          { "@type": "ListItem", "position": 3, "name": "Ask Dr Cathy — Dr Catherine Sampa Muyeba, Consultant Psychiatrist", "url": "https://askcathy.neurascalex.com" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.neurascalex.com/" },
          { "@type": "ListItem", "position": 2, "name": "Specialist Hub", "item": "https://www.neurascalex.com/specialist-hub" }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#F7F4ED] min-h-screen overflow-x-hidden pt-20">
      <SEO 
        title="Live Ask Pages — Real UK Specialists | NeuraScaleX"
        description="Meet the live Ask pages: Prof. Deepak Ravindran (pain medicine), Dr Abrar Hussain (psychiatry) and Dr Catherine Sampa Muyeba (REAPing Women). Ask them anything — exactly what your patients would experience."
        canonical="https://www.neurascalex.com/specialist-hub"
        robots="index, follow, max-image-preview:large"
        ogType="website"
        ogTitle="Meet the live Ask pages — real UK specialists, real governed conversations."
        ogDescription="Click any page and ask it anything. Every conversation logged. Every booking attributed. Every safety boundary held."
        ogImage="https://www.neurascalex.com/assets/og-hub.png"
        jsonLd={specialistHubJsonLd}
      />
      
      {/* Hero Section */}
      <section className="bg-[#F7F4ED] py-20 lg:py-28 text-ink relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4"
          >
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#0D6E6E] uppercase block mb-3">
              THE SPECIALIST HUB
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-ink mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
          >
            Meet the <span className="text-[#0D6E6E] italic font-medium">live Ask pages.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-ink/80 leading-relaxed font-sans max-w-3xl mx-auto mb-10"
          >
            Real UK specialists. Real governed conversations. Ask them anything — this is exactly what your patients would experience on day one.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-10"
          >
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <button 
                onClick={() => document.getElementById('pilots-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white px-8 py-4 rounded-xl font-sans font-semibold text-sm transition-all flex items-center justify-center gap-1 shadow-sm text-center tracking-wide cursor-pointer"
              >
                Explore the live pages ↓
              </button>
              <Link 
                to="/demo" 
                className="w-full sm:w-auto bg-[#F7F4ED] border border-ink/20 text-ink px-8 py-4 rounded-xl font-sans font-semibold text-sm hover:bg-neutral-50 transition-all text-center tracking-wide"
              >
                Book a founder demo
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 font-sans text-[10px] font-bold text-ink/65 tracking-[0.1em] uppercase">
              <span>APPROVED SOURCES ONLY</span>
              <span className="opacity-40">•</span>
              <span>NON-CLINICAL BY DESIGN</span>
              <span className="opacity-40">•</span>
              <span>24/7 AVAILABILITY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialist Grid Section */}
      <section id="pilots-grid" className="pb-28 max-w-7xl mx-auto px-6 lg:px-12 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.name} specialist={specialist} />
          ))}
        </div>
      </section>

      {/* Trust & Outcome Section */}
      <section className="py-28 bg-[#13222D] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative min-h-[220px] md:min-h-[260px]">
          <div className="absolute left-6 md:left-24 top-6">
            <span className="text-4xl md:text-7xl font-serif italic text-[#3BA5A5] leading-none tracking-tight block">logged.</span>
          </div>
          <div className="absolute right-6 md:right-24 top-12">
            <span className="text-4xl md:text-7xl font-serif italic text-[#3BA5A5] leading-none tracking-tight block">attributed.</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6">
            <span className="text-4xl md:text-7xl font-serif italic text-[#3BA5A5] leading-none tracking-tight block">held.</span>
          </div>
        </div>
      </section>

      {/* For Clinicians Section */}
      <section className="py-24 bg-[#F7F4ED] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-left">
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-[#0D6E6E] uppercase mb-4 block">FOR CLINICIANS</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-8 leading-[1.15] tracking-tight">
                You’ve seen what it does <br />
                <span className="text-[#0D6E6E] italic font-medium">for their patients.</span> Now <br />
                imagine it on yours.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-ink/70 leading-relaxed font-sans">
                <p>
                  Every clinic above started where you are now. Years of patient education content. Strong referral networks. Loyal patients. And the same gap between content and conversion that every UK specialist faces.
                </p>
                <p className="font-bold text-ink">
                  NeuraScaleX is the layer they added to close that gap.
                </p>
              </div>
            </div>

            <div className="space-y-6 max-w-xl lg:ml-auto w-full text-left">
              {/* Card 1 */}
              <div className="bg-white border border-neutral-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#0D6E6E] uppercase mb-3">RAPID DEPLOYMENT</h4>
                <p className="text-lg font-bold text-ink mb-2">Live within one week.</p>
                <p className="text-sm text-ink/60 leading-relaxed font-sans">
                  We build your Ask Page. We calibrate the safety boundaries. You review and approve every word. Your existing content becomes the foundation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-neutral-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#0D6E6E] uppercase mb-3">GOVERNED FROM DAY ONE</h4>
                <p className="text-lg font-bold text-ink mb-2">Trained only on your approved content.</p>
                <p className="text-sm text-ink/60 leading-relaxed font-sans">
                  Non-clinical by design. Transparency on every response. High safety, zero invention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 bg-[#F7F4ED] text-ink text-center relative border-t border-neutral-200/20">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-ink mb-10 leading-tight tracking-tight">
            Become <span className="text-[#0D6E6E] italic font-medium">impossible to ignore.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialistHub;
