
import React from 'react';
import { Link } from 'react-router-dom';

interface Deployment {
  name: string;
  role: string;
  location: string;
  status: string;
  desc: string;
  tags: string[];
  imageInitials: string;
  url: string;
}

const Experts: React.FC = () => {
  
  const clinics: Deployment[] = [
    {
      name: "Berkshire Pain Clinic",
      role: "Specialist Clinic",
      location: "Reading, UK",
      status: "Live",
      desc: "A multi-disciplinary clinic using the Twin to triage complex referrals, explain insurance pathways, and answer admin queries 24/7.",
      tags: ["Digital Twin", "Routing"],
      imageInitials: "BP",
      url: "https://www.berkshirepainclinic.co.uk/"
    }
  ];

  const clinicians: Deployment[] = [
    {
      name: "Dr. Deepak Ravindran",
      role: "Pain Medicine Consultant",
      location: "UK",
      status: "Live",
      desc: "Uses his Twin to orient patients on pain management pathways and 'Long Covid' recovery, reducing repetitive questions before consultation.",
      tags: ["Digital Twin", "Intelligence"],
      imageInitials: "DR",
      url: "https://deepakravindran.co.uk/"
    },
    {
      name: "Dr. Sunil Kumar",
      role: "Lifestyle Medicine Physician",
      location: "UK",
      status: "Live",
      desc: "Educates patients on metabolic health programmes and qualifies suitability before they book a discovery call.",
      tags: ["Digital Twin", "Education"],
      imageInitials: "SK",
      url: "https://drsunilkumar.co.uk/"
    },
    {
      name: "Dr. Arokia Antonysamy",
      role: "Consultant Psychiatrist",
      location: "UK",
      status: "Live",
      desc: "Provides clear guidance on ADHD assessments and psychiatric pathways, managing patient expectations safely up front.",
      tags: ["Digital Twin", "Mental Health"],
      imageInitials: "AA",
      url: "https://drarokia.com/"
    },
    {
      name: "Dr. Abrar Hussain",
      role: "Consultant Psychiatrist",
      location: "UK",
      status: "Launching Feb 9",
      desc: "Deploying a governed Twin to manage intake for private psychiatry practice and streamline new patient onboarding.",
      tags: ["Waitlist", "Psychiatry"],
      imageInitials: "AH",
      url: ""
    },
    {
      name: "Private Practice Cohort",
      role: "Multi-Specialty",
      location: "Global",
      status: "Open",
      desc: "Next deployment wave. Secure your spot to launch a governed Digital Twin for your practice.",
      tags: ["Waitlist Open"],
      imageInitials: "NS",
      url: ""
    }
  ];

  const renderCard = (expert: Deployment, i: number) => (
    <div key={i} className="group bg-white border border-gray-200 rounded-sm p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      
      {/* Status Badge */}
      <div className="absolute top-6 right-6">
        {expert.status === 'Live' ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-800">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span> Live
          </span>
        ) : expert.status.includes('Launching') ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-800">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span> {expert.status}
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-800">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-1.5"></span> {expert.status}
          </span>
        )}
      </div>

      {/* Headshot / Identity */}
      <div className="mb-6">
          <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mb-4 border border-gray-200 group-hover:border-gold-500 transition-colors flex items-center justify-center relative">
            <span className="text-2xl font-serif text-teal-900 font-bold">{expert.imageInitials}</span>
          </div>
          <h3 className="text-xl serif text-navy-900 font-bold">{expert.name}</h3>
          <p className="text-[11px] font-bold uppercase tracking-widest text-teal-800 mt-1">
            {expert.role} <span className="text-gray-300 mx-1">•</span> {expert.location}
          </p>
      </div>

      {/* Body */}
      <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow font-light">
        {expert.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {expert.tags.map((tag, t) => (
          <span key={t} className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-gray-100">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="pt-6 border-t border-gray-100">
        {expert.status === 'Live' ? (
          <a 
            href={expert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-navy-900 text-gold-500 px-4 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-navy-800 transition-colors group-hover:shadow-md"
          >
            See Live Twin
            <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        ) : expert.url ? (
            <span className="block w-full text-center border border-gray-200 text-gray-400 px-4 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest cursor-not-allowed">
              Deployment Pending
            </span>
        ) : (
          <Link to="/demo" className="block w-full text-center border border-navy-900 text-navy-900 px-4 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-navy-900 hover:text-white transition-colors">
            Join Waitlist
          </Link>
        )}
      </div>

    </div>
  );

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen font-sans">
      
      {/* 1. HERO */}
      <section className="bg-navy-900 py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-6 leading-tight">
            Live Deployments.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed font-serif max-w-3xl mx-auto">
            Explore live Clinical Digital Twins currently handling patient engagement for leading specialist clinics and independent practitioners.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Link to="/demo" className="bg-gold-500 text-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-gold-600 transition-all">
              Request a Demo
            </Link>
            <Link to="/free-trial" className="text-white border border-white/20 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Start Free Pilot
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm inline-flex">
             <div className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                Approved sources only
             </div>
             <div className="hidden sm:block text-white/20">•</div>
             <div className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                Non-clinical by design
             </div>
             <div className="hidden sm:block text-white/20">•</div>
             <div className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                Live in 7 days
             </div>
          </div>
        </div>
      </section>

      {/* 2. MICRO-INSTRUCTION */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <p className="text-xs text-navy-800 font-medium">
            <span className="font-bold text-teal-800 uppercase tracking-wider mr-2">Evidence First:</span> 
            Click "See Live Twin" to visit these practices and see the widget active in the bottom-right corner.
          </p>
        </div>
      </section>

      {/* 3. LISTINGS */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-gray-100 gap-6">
            <div>
              <h2 className="text-3xl serif text-navy-900 mb-2">Real clinicians. Real patient queries.</h2>
              <p className="text-gray-500 font-light">See how the platform scales across different specialties and clinic structures.</p>
            </div>
            
            {/* Filters UI */}
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
               <span className="text-gray-300">Filter by:</span>
               <button className="hover:text-navy-900 transition-colors flex items-center gap-1">Specialty <span className="text-[10px]">▼</span></button>
               <button className="text-navy-900 flex items-center gap-1">Status <span className="text-[10px]">▼</span></button>
            </div>
          </div>

          {/* SECTION A: PARTNER CLINICS */}
          <div className="mb-20">
             <div className="flex items-center mb-10">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <span className="px-4 text-xs font-bold uppercase tracking-widest text-teal-800">Partner Clinics & Groups</span>
                <div className="h-px bg-gray-200 flex-grow"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clinics.map(renderCard)}
             </div>
          </div>

          {/* SECTION B: SPECIALIST CLINICIANS */}
          <div className="mb-20">
             <div className="flex items-center mb-10">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <span className="px-4 text-xs font-bold uppercase tracking-widest text-gold-600">Specialist Clinicians</span>
                <div className="h-px bg-gray-200 flex-grow"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clinicians.map(renderCard)}
             </div>
          </div>

          {/* 7. WHY THIS MATTERS STRIP */}
          <div className="bg-softgreen rounded-sm border border-teal-100 p-8 text-center max-w-4xl mx-auto mb-20">
             <h3 className="text-2xl serif text-teal-800 mb-2">Your expertise, available when people need it.</h3>
             <p className="text-gray-600 font-light">Patients look for clarity after hours—NSX keeps your standards consistent and your team protected.</p>
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-32 bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl md:text-6xl serif mb-6">Want your own Deployment in the NSX Network?</h2>
           <p className="text-xl text-gray-300 font-light mb-12">
             We do the build and calibration. You approve the scope. Go live in 7 days.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
              <Link to="/free-trial" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
                Start Free Pilot
              </Link>
              <Link to="/demo" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Request a Demo
              </Link>
           </div>
           
           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
             Limited onboarding capacity to protect quality.
           </p>
        </div>
      </section>

    </div>
  );
};

export default Experts;
