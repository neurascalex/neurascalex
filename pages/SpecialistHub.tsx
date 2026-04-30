
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
    className="bg-white rounded-none p-8 shadow-2xl border border-ink/5 flex flex-col h-full hover:shadow-3xl transition-all group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-none border border-ink/10 overflow-hidden shadow-inner bg-paper">
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
          <div className="w-full h-full items-center justify-center text-xl font-bold text-ink font-serif" style={{ display: 'none' }}>
            {specialist.imageInitials}
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 bg-teal-precise/5 rounded-none border border-teal-precise/20 label-mono">
        <div className="w-1.5 h-1.5 bg-teal-precise rounded-full"></div>
        <span className="text-[9px] font-bold tracking-widest text-teal-precise uppercase">{specialist.status}</span>
      </div>
    </div>

    <div className="mb-4">
      <h3 className="text-2xl font-serif font-bold text-teal-precise mb-1 leading-tight">{specialist.name}</h3>
      <p className="text-[10px] font-bold tracking-widest text-ink/30 uppercase label-mono">
        {specialist.role} <span className="mx-1 text-ink/10">•</span> {specialist.location}
      </p>
    </div>

    <p className="text-base text-ink/60 leading-relaxed mb-6 flex-grow font-serif italic italic-moment">
      {specialist.desc}
    </p>

    <div className="flex flex-wrap gap-2 mb-8">
      {specialist.tags.map((tag) => (
        <span key={tag} className="text-[9px] font-bold tracking-widest text-teal-precise px-2 py-1 border border-teal-precise/10 rounded-none uppercase bg-teal-precise/5 label-mono">
          {tag}
        </span>
      ))}
    </div>

    <div className="space-y-4">
      <button onClick={() => onOpenChat(specialist)} className="w-full bg-ink text-paper py-5 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-teal-precise transition-all shadow-xl shadow-ink/10 active:scale-95 label-mono opacity-100">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
        CHAT WITH AI ASSISTANT
      </button>
      <a 
        href={specialist.websiteUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-ink/40 uppercase hover:text-teal-precise transition-colors label-mono opacity-100"
      >
        VISIT CLINIC WEBSITE
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
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
    <div className="bg-paper min-h-screen">
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
      <section className="pt-20 pb-16 border-b border-ink/5 bg-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-center mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-paper border border-teal-precise/20 rounded-none mb-12 shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-teal-precise uppercase label-mono">
                THE SPECIALIST HUB
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif font-bold text-ink mb-10 leading-[1.1] tracking-tight"
            >
              See the AI front door <br />
              <span className="italic text-teal-precise">in action.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-ink/60 font-serif italic italic-moment leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Interact with secure, specialist-trained AI assistants from the UK clinics already live on NeuraScaleX. The same experience your patients will have on day one.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-12"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => document.getElementById('pilots-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-teal-precise text-paper px-12 py-6 rounded-none text-xs font-bold tracking-[0.2em] uppercase hover:brightness-110 transition-all shadow-2xl shadow-teal-precise/20 flex items-center justify-center gap-3 group label-mono opacity-100"
                >
                  EXPLORE THE LIVE PILOTS
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <Link to="/demo" className="w-full sm:w-auto border border-ink/20 text-ink px-12 py-6 rounded-none text-xs font-bold tracking-[0.2em] uppercase hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono opacity-100">
                  BOOK A DEMO
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 label-mono text-[10px] font-bold opacity-40">
                <div className="flex items-center gap-2">
                  <span className="text-teal-precise">✓</span> APPROVED SOURCES ONLY
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-precise">✓</span> NON-CLINICAL BY DESIGN
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-precise">✓</span> 24/7 AVAILABILITY
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialist Grid Section */}
      <section id="pilots-grid" className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">LIVE PILOTS</span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-ink mb-8 tracking-tight">UK specialist clinics <br /> already live on NeuraScaleX.</h2>
            <p className="text-xl md:text-2xl text-ink/40 font-serif italic italic-moment max-w-3xl mx-auto leading-relaxed">
              Each AI assistant is trained only on its clinician's approved content. Click any card to interact, ask questions, and see how the front door responds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {specialists.map((specialist, idx) => (
              <SpecialistCard key={idx} specialist={specialist} onOpenChat={openChat} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Outcome Section */}
      <section className="py-16 md:py-24 bg-paper border-t border-ink/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-4xl md:text-7xl font-serif text-ink leading-tight tracking-tight">
              Every conversation <span className="italic text-teal-precise font-bold">logged.</span>
            </h2>
            <h2 className="text-4xl md:text-7xl font-serif text-ink leading-tight tracking-tight">
              Every booking <span className="italic text-teal-precise font-bold">attributed.</span>
            </h2>
            <h2 className="text-4xl md:text-7xl font-serif text-ink leading-tight tracking-tight">
              Every safety boundary <span className="italic text-teal-precise font-bold">held.</span>
            </h2>
          </div>
          <div className="mt-20 inline-block h-px w-24 bg-teal-precise/20"></div>
        </div>
      </section>

      {/* 9. FOR CLINICIANS */}
      <section className="py-16 lg:py-24 bg-paper border-t border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
            <div>
              <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">FOR CLINICIANS</span>
              <h2 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-[1.1] tracking-tight">
                You've seen what it does <br />
                <span className="italic text-teal-precise">for their patients.</span> <br />
                Now imagine it on yours.
              </h2>
              <div className="space-y-6 text-xl text-ink/60 font-serif italic italic-moment leading-relaxed">
                <p>
                  Every clinic above started where you are now. Years of patient education content. Strong referral networks. Loyal patients. And the same gap between content and conversion that every UK specialist faces.
                </p>
                <p>
                  NeuraScaleX is the layer they added to close that gap.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Card 1 */}
              <div className="bg-white border border-ink/5 p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col group">
                <h4 className="label-mono text-[10px] tracking-[0.3em] text-teal-precise uppercase font-bold mb-6">RAPID DEPLOYMENT</h4>
                <p className="text-lg text-ink font-bold mb-4 font-sans">Live in 14 days.</p>
                <p className="text-base text-ink/50 font-serif italic italic-moment leading-relaxed">
                  We build the AI Clinic Page. We calibrate the safety boundaries. You review and approve every word. Your existing content becomes the foundation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-ink/5 p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col group">
                <h4 className="label-mono text-[10px] tracking-[0.3em] text-teal-precise uppercase font-bold mb-6">GOVERNED FROM DAY ONE</h4>
                <p className="text-lg text-ink font-bold mb-4 font-sans">Trained only on your approved content.</p>
                <p className="text-base text-ink/50 font-serif italic italic-moment leading-relaxed">
                  Non-clinical by design. Glass Box transparency on every response. High safety, zero hallucination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
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

export default SpecialistHub;
