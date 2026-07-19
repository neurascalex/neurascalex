
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, MessageSquare, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import ChatModal from '../components/ChatModal';

const specialists = [
  {
    tag: 'LIVE',
    name: 'Dr. Deepak Ravindran',
    title: 'Pain Medicine Consultant · UK',
    description: "Orienting patients on pain management pathways and 'Long Covid' recovery, reducing repetitive questions before consultation.",
    badges: ['Digital Twin', 'Intelligence'],
    image: 'https://storagfd.blob.core.windows.net/fdablbstdr3/assets/Deepak%20Profile%20pic.jpg?sv=2025-07-05&se=2035-11-22T17%3A53%3A51Z&sr=b&sp=r&sig=PSgWDM2uF04wNXvK85Ujy6SpvO10LKWxtofIqVO7bxQ%3D',
    widgetId: 'ce0e9578-e1e3-4bee-a665-cbf12fc8db84',
    website: 'https://deepakravindran.co.uk/'
  },
  {
    tag: 'LIVE',
    name: 'Dr. Sunil Kumar',
    title: 'Lifestyle Medicine Physician · UK',
    description: 'Educating patients on metabolic health programmes and qualifying suitability before they book a discovery call.',
    badges: ['Digital Twin', 'Education'],
    image: 'https://storagfd.blob.core.windows.net/fdablbstsk13/assets/IMG_9435.jpg?sv=2025-07-05&se=2035-11-09T07%3A18%3A13Z&sr=b&sp=r&sig=X5JekyGQUwmkfiLYuxwXygzHx8pvQ3wkQZG3w1UXlFQ%3D',
    widgetId: 'd53e170c-6283-4fdd-8d53-03cb51083c81',
    website: 'https://drsunilkumar.co.uk/'
  },
  {
    tag: 'LIVE',
    name: 'Dr. Arokia Antonysamy',
    title: 'Consultant Psychiatrist · UK',
    description: 'Providing clear guidance on ADHD assessments and psychiatric pathways, managing patient expectations safely up front.',
    badges: ['Digital Twin', 'Mental Health'],
    image: 'https://storagfd.blob.core.windows.net/fdablbstaa83/assets/Arokia-MindKonnect.png?sv=2025-07-05&se=2035-12-09T14%3A20%3A40Z&sr=b&sp=r&sig=0KN0Jv4OZf5NkpRK7L4xLTkfsV6Ve1a0erKbO%2B3WeXY%3D',
    widgetId: 'b4692909-c2e8-4ccc-b819-a3571d705e3e',
    website: 'https://drarokia.com/'
  },
  {
    tag: 'LIVE',
    name: 'Dr. Abrar Hussain',
    title: 'Consultant Psychiatrist · UK',
    description: 'Deploying a governed Twin to manage intake for private psychiatry practice and streamline new patient onboarding.',
    badges: ['Digital Twin', 'Routing'],
    image: 'https://storagfd.blob.core.windows.net/fdablbstah88/assets/AbrarAI.avif?sv=2025-07-05&se=2036-01-14T15%3A59%3A33Z&sr=b&sp=r&sig=%2B5jOafWH2GI%2FyS9qaJVG0qLx95bOwkIqyTDm7kAK0Kk%3D',
    widgetId: '1ebbc490-8276-43d1-894f-6d5987e17006',
    website: 'https://drabrarhussain.co.uk/'
  },
  {
    tag: 'LIVE',
    name: 'Berkshire Pain Clinic',
    title: 'Specialist Clinic · Reading, UK',
    description: 'A multi-disciplinary clinic using the Twin to triage complex referrals, explain insurance pathways, and answer admin queries 24/7.',
    badges: ['Digital Twin', 'Routing'],
    image: '/images/Berkshire-Pain-Clinic.png',
    widgetId: 'ce0e9578-e1e3-4bee-a665-cbf12fc8db84',
    website: 'https://www.berkshirepainclinic.co.uk/'
  },
  {
    tag: 'LIVE',
    name: 'Berkshire Psychiatrist',
    title: 'Consultant Psychiatrist · UK',
    description: 'Deploying a governed Twin to manage intake for private psychiatry practice and streamline new patient onboarding.',
    badges: ['Digital Twin', 'Routing'],
    image: '/images/Psychiatry-Dr-Abrar.png',
    widgetId: '1ebbc490-8276-43d1-894f-6d5987e17006',
    website: 'https://www.berkshirepsychiatrist.co.uk/'
  }
];

const PatientHub: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState<any>(null);

  const openChat = (specialist: any) => {
    setSelectedSpecialist(specialist);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] font-sans selection:bg-teal-100 selection:text-teal-900">
      <ChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        specialist={selectedSpecialist} 
      />
      
      {/* Section 1: The Patient Hero (B2C) */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-neutral-200/60">
        {/* Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-softgreen rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                GOVERNED • APPROVED SOURCES ONLY • NON-CLINICAL BY DESIGN
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl serif text-navy-900 leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Instant Orientation with <br />
              <span className="text-teal-800 italic">Leading UK Specialists.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Don't wait on hold or fill out blind forms. Interact with secure, specialist-trained AI assistants to get instant orientation on fees, eligibility, booking pathways and next steps — 24/7.
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <button 
                onClick={() => {
                  document.getElementById('specialists')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-navy-900 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-navy-800 transition-all flex items-center gap-2 group cursor-pointer border-none"
              >
                Find Your Specialist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                24/7 Availability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Specialist Grid (The Hub) */}
      <section id="specialists" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl serif text-navy-900 mb-4">The Specialist Hub</h2>
            <p className="text-gray-500 font-light">Select a specialist below to begin your secure orientation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-3xl border border-neutral-200/60 p-8 hover:shadow-md hover:border-teal-100 transition-all duration-500 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <img 
                      src={specialist.image} 
                      alt={specialist.name}
                      className="w-20 h-20 rounded-2xl object-cover transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-xl shadow-sm border border-neutral-200/60">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100">
                    🟢 {specialist.tag}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl serif text-navy-900 mb-1 group-hover:text-teal-800 transition-colors">{specialist.name}</h3>
                  <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">{specialist.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-light line-clamp-3">
                    {specialist.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {specialist.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="text-[10px] font-medium text-gray-400 uppercase tracking-wider bg-[#F7F4ED] px-2 py-1 rounded-xl">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-4">
                  <button 
                    onClick={() => openChat(specialist)}
                    className="w-full bg-navy-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-900/20 transition-all transform group-hover:-translate-y-1"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat with AI Assistant
                  </button>
                  {specialist.website && (
                    <a 
                      href={specialist.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-navy-900 transition-colors"
                    >
                      Visit Clinic Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The B2B Trojan Horse (Footer/Lead Gen Section) */}
      <section className="bg-navy-950 py-24 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-geometric"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl serif text-white mb-6 leading-tight">
                Clinicians: Stop losing high-intent enquiries to website bounce.
              </h2>
              <p className="text-xl text-teal-100/70 font-light leading-relaxed mb-10">
                We don't just deploy your Digital Avatar — we help convert website visitors into qualified enquiries. The NeuraScaleX Hub actively routes people to the right next step and reduces repetitive admin load.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Rapid Deployment</h4>
                    <p className="text-gray-400 text-sm font-light">We do the build + calibration. You approve the scope and boundaries. Go live in 7 days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Governed Intelligence</h4>
                    <p className="text-gray-400 text-sm font-light">Built on approved sources only, with clear refusals and safe routing — designed to protect clinical standards and brand integrity.</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/free-trial" 
                className="inline-block bg-gold-500 text-navy-950 px-10 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gold-400 hover:shadow-md hover:shadow-teal-900/20 transition-all transform hover:-translate-y-1"
              >
                Secure Your Spot: Next Deployment Wave
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="mb-8">
                  <div className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">B2B Value Proposition</div>
                  <h3 className="text-2xl serif text-white mb-4 italic">"The Hub routes high-intent visitors to the right next step — booking, enquiry, waitlist or resources — ready for your team."</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-3xl font-serif text-white mb-1">25–40%</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Admin Reduction</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-3xl font-serif text-white mb-1">24/7</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">ORIENTATION</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Strip */}
      <footer className="py-12 bg-navy-950 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">
          NeuraScaleX Patient Hub · Governed Clinical AI · © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default PatientHub;
