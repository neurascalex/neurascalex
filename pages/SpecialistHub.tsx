
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ChatModal from '../components/ChatModal';

interface Specialist {
  name: string;
  role: string;
  location: string;
  desc: string;
  tags: string[];
  imageInitials: string;
  imageUrl?: string;
  status: 'LIVE' | 'LAUNCHING';
  websiteUrl: string;
  widgetId: string;
  image: string;
  title: string;
}

const specialists: Specialist[] = [
  {
    name: "Dr. Deepak Ravindran",
    role: "PAIN MEDICINE CONSULTANT",
    location: "UK",
    desc: "Orienting patients on pain management pathways and 'Long Covid' recovery, reducing repetitive questions before consultation.",
    tags: ["AI ASSISTANT", "INTELLIGENCE"],
    imageInitials: "DR",
    status: 'LIVE',
    websiteUrl: "https://deepakravindran.co.uk/",
    widgetId: 'ce0e9578-e1e3-4bee-a665-cbf12fc8db84',
    image: 'https://storagfd.blob.core.windows.net/fdablbstdr3/assets/Deepak%20Profile%20pic.jpg?sv=2025-07-05&se=2035-11-22T17%3A53%3A51Z&sr=b&sp=r&sig=PSgWDM2uF04wNXvK85Ujy6SpvO10LKWxtofIqVO7bxQ%3D',
    title: 'Pain Medicine Consultant · UK'
  },
  {
    name: "Dr. Sunil Kumar",
    role: "LIFESTYLE MEDICINE PHYSICIAN",
    location: "UK",
    desc: "Educating patients on metabolic health programmes and qualifying suitability before they book a discovery call.",
    tags: ["AI ASSISTANT", "EDUCATION"],
    imageInitials: "SK",
    status: 'LIVE',
    websiteUrl: "https://drsunilkumar.co.uk/",
    widgetId: 'd53e170c-6283-4fdd-8d53-03cb51083c81',
    image: 'https://storagfd.blob.core.windows.net/fdablbstsk13/assets/IMG_9435.jpg?sv=2025-07-05&se=2035-11-09T07%3A18%3A13Z&sr=b&sp=r&sig=X5JekyGQUwmkfiLYuxwXygzHx8pvQ3wkQZG3w1UXlFQ%3D',
    title: 'Lifestyle Medicine Physician · UK'
  },
  {
    name: "Dr. Arokia Antonysamy",
    role: "CONSULTANT PSYCHIATRIST",
    location: "UK",
    desc: "Providing clear guidance on ADHD assessments and psychiatric pathways, managing patient expectations safely up front.",
    tags: ["AI ASSISTANT", "MENTAL HEALTH"],
    imageInitials: "AA",
    status: 'LIVE',
    websiteUrl: "https://drarokia.com/",
    widgetId: 'b4692909-c2e8-4ccc-b819-a3571d705e3e',
    image: 'https://storagfd.blob.core.windows.net/fdablbstaa83/assets/Arokia-MindKonnect.png?sv=2025-07-05&se=2035-12-09T14%3A20%3A40Z&sr=b&sp=r&sig=0KN0Jv4OZf5NkpRK7L4xLTkfsV6Ve1a0erKbO%2B3WeXY%3D',
    title: 'Consultant Psychiatrist · UK'
  },
  {
    name: "Dr. Abrar Hussain",
    role: "CONSULTANT PSYCHIATRIST",
    location: "UK",
    desc: "Deploying a governed AI Assistant to manage intake for private psychiatry practice and streamline new patient onboarding.",
    tags: ["AI ASSISTANT", "ROUTING"],
    imageInitials: "AH",
    status: 'LIVE',
    websiteUrl: "#",
    widgetId: '1ebbc490-8276-43d1-894f-6d5987e17006',
    image: 'https://storagfd.blob.core.windows.net/fdablbstah88/assets/AbrarAI.avif?sv=2025-07-05&se=2036-01-14T15%3A59%3A33Z&sr=b&sp=r&sig=%2B5jOafWH2GI%2FyS9qaJVG0qLx95bOwkIqyTDm7kAK0Kk%3D',
    title: 'Consultant Psychiatrist · UK'
  },
  {
    name: "Berkshire Pain Clinic",
    role: "SPECIALIST CLINIC",
    location: "READING, UK",
    desc: "A multi-disciplinary clinic using the AI Assistant to triage complex referrals, explain insurance pathways, and answer admin queries 24/7.",
    tags: ["AI ASSISTANT", "ROUTING"],
    imageInitials: "BP",
    status: 'LIVE',
    websiteUrl: "https://www.berkshirepainclinic.co.uk/",
    widgetId: 'ce0e9578-e1e3-4bee-a665-cbf12fc8db84',
    image: '/images/Berkshire-Pain-Clinic.png',
    title: 'Specialist Clinic · Reading, UK'
  },
  {
    name: "Berkshire Psychiatrist",
    role: "CONSULTANT PSYCHIATRIST",
    location: "UK",
    desc: "Deploying a governed AI Assistant to manage intake for private psychiatry practice and streamline new patient onboarding.",
    tags: ["AI ASSISTANT", "ROUTING"],
    imageInitials: "BP",
    status: 'LIVE',
    websiteUrl: "#",
    widgetId: '1ebbc490-8276-43d1-894f-6d5987e17006',
    image: '/images/Psychiatry-Dr-Abrar.png',
    title: 'Consultant Psychiatrist · UK'
  }
];

const SpecialistCard: React.FC<{ specialist: Specialist; onOpenChat: (s: Specialist) => void }> = ({ specialist, onOpenChat }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/60 flex flex-col h-full hover:shadow-md hover:border-[#0D6E6E]/20 transition-all duration-300 group"
  >
    {/* Card Top: LIVE status and Avatar */}
    <div className="flex justify-between items-start mb-8">
      <div className="w-14 h-14 rounded-full bg-[#E6F3F3] border border-[#B3D9D9] overflow-hidden flex items-center justify-center">
        <img
          src={specialist.image}
          alt={specialist.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="text-lg font-serif font-bold text-[#0D6E6E]" style={{ display: 'none' }}>
          {specialist.imageInitials}
        </div>
      </div>
      
      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F3F3] rounded-full border border-[#B3D9D9]">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-sans font-bold tracking-wider text-[#0D6E6E] uppercase">{specialist.status}</span>
      </div>
    </div>

    {/* Specialist Info */}
    <div className="mb-4">
      <h3 className="text-2xl font-serif font-bold text-ink leading-tight mb-1 group-hover:text-[#0D6E6E] transition-colors duration-200">
        {specialist.name}
      </h3>
      <p className="text-[11px] font-sans font-semibold tracking-wider text-[#0D6E6E] uppercase">
        {specialist.role} · {specialist.location}
      </p>
    </div>

    {/* Description */}
    <p className="text-base text-ink/75 leading-relaxed mb-6 flex-grow font-sans">
      {specialist.desc}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-8">
      {specialist.tags.map((tag) => (
        <span key={tag} className="text-[9px] font-sans font-bold tracking-wider text-[#0D6E6E] px-2.5 py-1 rounded-full bg-[#E6F3F3] border border-[#B3D9D9]">
          {tag}
        </span>
      ))}
    </div>

    {/* Interactive Buttons */}
    <div className="space-y-4 pt-4 border-t border-neutral-100">
      <button 
        onClick={() => onOpenChat(specialist)}
        className="w-full bg-[#001A33] hover:bg-[#002B54] text-white py-4 rounded-xl font-sans font-semibold text-center transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
        Chat with AI Assistant →
      </button>
      {specialist.websiteUrl && specialist.websiteUrl !== "#" && (
        <a 
          href={specialist.websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-sans font-bold tracking-wider text-ink/65 uppercase hover:text-[#0D6E6E] transition-colors py-2"
        >
          Visit clinic website ↗
        </a>
      )}
    </div>
  </motion.div>
);

const SpecialistHub: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  const openChat = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F7F4ED] min-h-screen overflow-x-hidden pt-20">
      <ChatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        specialist={selectedSpecialist ? {
          name: selectedSpecialist.name,
          image: selectedSpecialist.image,
          title: selectedSpecialist.title,
          widgetId: selectedSpecialist.widgetId
        } : null}
      />
      {/* Hero Section */}
      <section className="bg-[#F7F4ED] py-20 lg:py-28 text-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F3F3] border border-[#B3D9D9] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D6E6E] animate-pulse"></span>
            <span className="font-sans font-semibold text-[#0D6E6E] uppercase tracking-wider text-[11px]">LIVE PAGES</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-ink mb-8 leading-[1.1] tracking-tight"
          >
            UK specialists already live <br />
            <span className="text-[#0D6E6E] italic font-medium">on NeuraScaleX.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-ink/75 leading-relaxed font-serif italic max-w-4xl mx-auto mb-12"
          >
            Each Ask page is trained only on its clinician's approved content. Click any card and chat with the AI — this is exactly what your patients would experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto mb-12"
          >
            <button 
              onClick={() => document.getElementById('pilots-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-[#0D6E6E] text-white px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-lg hover:bg-[#095050] transition-all flex items-center justify-center gap-2"
            >
              Explore the live pages
              <svg className="w-4 h-4 transition-transform hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <Link to="/demo" className="w-full sm:w-auto bg-white border border-neutral-300 text-ink px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-sm hover:bg-neutral-50 transition-all text-center">
              Book a founder demo
            </Link>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-ink/50 font-sans">
            <div className="flex items-center gap-2">
              <span className="text-[#0D6E6E]">✓</span> Approved sources only
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0D6E6E]">✓</span> Non-clinical by design
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0D6E6E]">✓</span> 24/7 availability
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Grid Section */}
      <section id="pilots-grid" className="py-20 lg:py-28 bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, idx) => (
              <SpecialistCard key={idx} specialist={specialist} onOpenChat={openChat} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Outcome Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-neutral-200/50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-ink leading-tight tracking-tight">
              Every conversation <span className="text-[#0D6E6E] italic font-medium">logged.</span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif text-ink leading-tight tracking-tight">
              Every booking <span className="text-[#0D6E6E] italic font-medium">attributed.</span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif text-ink leading-tight tracking-tight">
              Every safety boundary <span className="text-[#0D6E6E] italic font-medium">held.</span>
            </h2>
          </div>
          <div className="mt-16 inline-block h-px w-16 bg-[#0D6E6E]/20"></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 bg-[#F7F4ED] text-ink text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-ink leading-tight tracking-tight">
              Become <span className="text-[#0D6E6E] italic font-medium">impossible to ignore.</span>
            </h2>
            <p className="text-lg md:text-xl text-ink/75 font-serif italic mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the UK specialist clinics turning every patient question into a booking on the calendar.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Link to="/demo" className="w-full sm:w-auto bg-[#0D6E6E] hover:bg-[#0B5C5C] text-white px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-sm hover:shadow transition-all text-center">
                Book a founder demo
              </Link>
              <Link to="/free-trial" className="w-full sm:w-auto bg-white border border-ink/20 text-ink px-8 py-4 rounded-xl font-sans font-semibold text-base shadow-sm hover:bg-neutral-50 transition-all text-center">
                Apply for the Founding 20
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SpecialistHub;