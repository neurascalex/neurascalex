
import React from 'react';
import { Link } from 'react-router-dom';

const Platform: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen font-sans">
      
      {/* 1. HERO */}
      <section className="bg-navy-900 py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-6 leading-tight">
            The NeuraScaleX Platform
          </h1>
          <h2 className="text-2xl md:text-3xl text-gold-500 serif mb-10 italic">
            Your Clinical Identity, Scaled — governed by the NSX Standard.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            NeuraScaleX deploys a governed Digital Twin to handle the first mile of patient engagement: orientation, education from your approved material, and safe signposting.
            <br/><br/>
            At the same time, the Intelligence layer turns real patient questions into clear signals—so your practice knows what patients need and what to do next.
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
                Clinician sign-off required
             </div>
          </div>
          <p className="mt-4 text-[9px] text-gray-600 uppercase tracking-widest">Not medical advice.</p>
        </div>
      </section>

      {/* 2. TWO LAYERS. ONE SYSTEM. */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif text-navy-900 mb-4">Two layers that work together—patient clarity + clinician control.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card A - Twin */}
            <div className="bg-softgreen p-10 rounded-sm border border-teal-100 flex flex-col h-full hover:shadow-lg transition-shadow">
               <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 mb-4 block">Front Door</span>
               <h3 className="text-3xl serif text-navy-900 mb-4">Digital Twin</h3>
               <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                 A 24/7 website assistant that answers routine questions in your voice using only approved sources—reducing repeat admin and improving patient readiness.
               </p>
               <Link to="#layer1" className="text-teal-800 font-bold uppercase tracking-widest text-xs border-b border-teal-800 pb-1 self-start">See details ↓</Link>
            </div>

            {/* Card B - Intelligence */}
            <div className="bg-navy-900 p-10 rounded-sm border border-navy-800 flex flex-col h-full hover:shadow-lg transition-shadow text-white">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-4 block">Signals + Next Steps</span>
               <h3 className="text-3xl serif text-white mb-4">Intelligence</h3>
               <p className="text-gray-300 font-light leading-relaxed mb-6 flex-grow">
                 A clinician-facing layer that surfaces demand patterns, friction points, and knowledge gaps—so you can strengthen pathways, pages, and routing with evidence.
               </p>
               <Link to="#layer2" className="text-gold-500 font-bold uppercase tracking-widest text-xs border-b border-gold-500 pb-1 self-start">See details ↓</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYER 1 — DIGITAL TWIN */}
      <section id="layer1" className="py-24 bg-warm-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           
           {/* Visual: Digital Twin Widget Mock */}
           <div className="relative flex justify-center">
              {/* Widget Container */}
              <div className="w-[360px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transform hover:translate-y-[-5px] transition-transform duration-500">
                
                {/* Header */}
                <div className="bg-[#004d4d] p-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/20">
                         {/* Placeholder Avatar */}
                         <svg className="w-8 h-8 text-[#004d4d]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#004d4d] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Dr. Alistair AI</h3>
                      <p className="text-[10px] opacity-80 uppercase tracking-wide">Digital Assistant</p>
                    </div>
                  </div>
                  <button className="text-white/70 hover:text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                {/* Body */}
                <div className="bg-[#F8FAF9] p-5 h-[360px] flex flex-col gap-4 overflow-y-auto">
                  
                  {/* Timestamp */}
                  <div className="text-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Today 12:42 PM</span>
                  </div>

                  {/* Message 1 (Twin) */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E6F4F1] border border-[#d1e8e3] flex-shrink-0 flex items-center justify-center text-[#004d4d] text-[10px] font-bold">DA</div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm text-gray-700 leading-relaxed max-w-[85%]">
                      Hello. I am Dr. Alistair's digital assistant. I can help you understand our services, fees, and insurance coverage. How can I help you today?
                    </div>
                  </div>

                  {/* Suggestion Chips */}
                  <div className="flex flex-col items-end gap-2 pr-2">
                    <button className="text-xs bg-white border border-[#004d4d]/30 text-[#004d4d] px-3 py-2 rounded-full hover:bg-[#004d4d]/5 transition-colors">
                      What conditions do you treat?
                    </button>
                    <button className="text-xs bg-white border border-[#004d4d]/30 text-[#004d4d] px-3 py-2 rounded-full hover:bg-[#004d4d]/5 transition-colors">
                      How do I book an appointment?
                    </button>
                  </div>

                  {/* Message 2 (User) */}
                  <div className="flex justify-end mt-2">
                     <div className="bg-[#004d4d] text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%]">
                       Can you prescribe medication for ADHD?
                     </div>
                  </div>

                   {/* Message 3 (Twin - Refusal) */}
                   <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E6F4F1] border border-[#d1e8e3] flex-shrink-0 flex items-center justify-center text-[#004d4d] text-[10px] font-bold">DA</div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border-l-4 border-l-gold-500 shadow-sm text-sm text-gray-700 leading-relaxed max-w-[85%]">
                      <p className="text-[10px] font-bold text-navy-900 uppercase mb-1">Out of Scope</p>
                      I cannot provide prescriptions or specific medical advice via this chat. Medication can only be discussed during a consultation.
                    </div>
                  </div>

                </div>

                {/* Quick Actions (Updated) */}
                <div className="px-5 py-3 bg-white border-t border-gray-50 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                   <button className="flex-shrink-0 text-[11px] font-bold text-[#004d4d] border border-[#004d4d] rounded-full px-4 py-2 hover:bg-[#004d4d] hover:text-white transition-colors">
                     Book Assessment
                   </button>
                   <button className="flex-shrink-0 text-[11px] font-bold text-[#004d4d] border border-[#004d4d] rounded-full px-4 py-2 hover:bg-[#004d4d] hover:text-white transition-colors">
                     Request Appointment
                   </button>
                   <button className="flex-shrink-0 text-[11px] font-bold text-[#004d4d] border border-[#004d4d] rounded-full px-4 py-2 hover:bg-[#004d4d] hover:text-white transition-colors">
                     Send an Email
                   </button>
                </div>

                {/* Footer Input */}
                <div className="bg-white p-3 pt-1 border-t border-gray-100">
                   <div className="relative">
                     <input type="text" placeholder="Type your question..." className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:border-[#004d4d]" disabled />
                     <button className="absolute right-2 top-2 p-1.5 bg-[#004d4d] rounded-full text-white">
                       <svg className="w-4 h-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                     </button>
                   </div>
                   <div className="text-center mt-2">
                     <span className="text-[9px] text-gray-300 font-medium">Powered by NeuraScaleX</span>
                   </div>
                </div>

              </div>
           </div>

           {/* Content */}
           <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800 mb-4 block">Layer 1</span>
              <h2 className="text-4xl serif text-navy-900 mb-6">Your expertise, always accessible. <br/>Your boundaries, always enforced.</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Your Digital Twin is a governed assistant. It doesn’t “guess.” It responds from what you approve—and it knows how to refuse safely when a request crosses scope.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-4">Typical Coverage:</h4>
                <ul className="space-y-3">
                  {[
                    "Practice essentials: fees, insurance, booking, location, services",
                    "Fit & pathways: “Do you treat X?” “What happens next?”",
                    "Education & clarification: clear explanations you already stand behind"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-gold-500 mr-3 mt-1">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-sm">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-red-800 mb-2">NSX Safety Gate</h4>
                 <p className="text-sm text-gray-700 leading-relaxed">
                   If someone asks for diagnosis, medication changes, crisis help, or medicolegal work, the Twin declines and routes them to the right next step.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. LAYER 2 — INTELLIGENCE */}
      <section id="layer2" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           
           {/* Section Header */}
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-4 block">Layer 2</span>
              <h2 className="text-4xl serif text-navy-900 mb-6">Stop guessing. <br/>Start seeing what patients actually need.</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                You don’t need more dashboards. You need signals that translate into action.
              </p>
           </div>

           {/* Dashboard Visual - Full Width for Clarity */}
           <div className="max-w-5xl mx-auto mb-20">
              <div className="bg-[#f0f2f5] p-3 rounded-xl border border-gray-300 shadow-2xl">
                 <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    
                    {/* Dash Header */}
                    <div className="border-b border-gray-100 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white gap-4">
                        <div>
                           <h3 className="text-xl serif text-navy-900 font-bold">Welcome to Dr. Alistair</h3>
                           <p className="text-xs text-gray-500 mt-1">Operational Overview • Last 7 Days</p>
                        </div>
                        <span className="text-[10px] text-green-700 bg-green-100 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center whitespace-nowrap">
                           <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                           System Operational
                        </span>
                    </div>

                    {/* Stats Row - Spacious */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#FAFAFA] border-b border-gray-100">
                       <div className="bg-white p-5 rounded border border-gray-100 shadow-sm">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Total Conversations</p>
                          <div className="flex items-baseline gap-2">
                            <p className="text-3xl font-bold text-navy-900">88</p>
                            <span className="text-[10px] text-green-600 font-medium">↑ 37%</span>
                          </div>
                       </div>
                       <div className="bg-white p-5 rounded border border-gray-100 shadow-sm">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Leads Captured</p>
                          <p className="text-3xl font-bold text-navy-900">4</p>
                       </div>
                       <div className="bg-white p-5 rounded border border-gray-100 shadow-sm">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Self-Serve Rate</p>
                          <p className="text-3xl font-bold text-navy-900">36%</p>
                       </div>
                       <div className="bg-white p-5 rounded border border-gray-100 shadow-sm">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Avg Resp. Time</p>
                          <p className="text-3xl font-bold text-navy-900">11s</p>
                       </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#FAFAFA]">
                        
                        {/* Left: Volume Chart */}
                        <div className="md:col-span-2 bg-white p-6 rounded border border-gray-100 shadow-sm flex flex-col justify-between min-h-[300px]">
                           <div>
                             <h4 className="text-sm font-bold text-navy-900 mb-1">Conversation Volume</h4>
                             <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-8">Interactions per day</p>
                           </div>
                           
                           <div className="h-48 flex items-end justify-between gap-4 px-4 pb-2 border-b border-gray-100">
                              {[15, 35, 25, 60, 45, 80, 65].map((h, i) => (
                                 <div key={i} className="w-full bg-blue-50/50 rounded-t-sm relative group h-full flex items-end">
                                    <div style={{height: `${h}%`}} className="w-full bg-navy-800 rounded-t-sm opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                    {/* Tooltip hint */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[9px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                       {h}
                                    </div>
                                 </div>
                              ))}
                           </div>
                           <div className="flex justify-between mt-4 text-[9px] text-gray-400 uppercase tracking-wider font-bold">
                              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                           </div>
                        </div>

                        {/* Right: Top Questions List - The "Link" to Layer 1 */}
                        <div className="bg-white p-6 rounded border border-gray-100 shadow-sm flex flex-col">
                           <div className="flex justify-between items-center mb-1">
                              <h4 className="text-sm font-bold text-navy-900">Top Patient Questions</h4>
                              <span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-wider">Signals</span>
                           </div>
                           <p className="text-[10px] text-gray-400 mb-6 uppercase tracking-wider">What patients are actually asking</p>
                           
                           <div className="space-y-4 flex-grow">
                              {/* Q1 */}
                              <div className="group p-3 bg-blue-50/30 border border-blue-50 hover:border-blue-200 rounded transition-colors cursor-default">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-bold text-blue-600 bg-blue-100 w-4 h-4 rounded flex items-center justify-center">1</span>
                                    <span className="text-[9px] font-bold text-navy-900 uppercase tracking-wider">Service Fit</span>
                                 </div>
                                 <p className="text-xs text-navy-800 font-medium leading-relaxed">
                                   "How can I book an appointment to discuss ADHD assessment?"
                                 </p>
                              </div>
                              
                              {/* Q2 */}
                              <div className="group p-3 bg-gray-50/50 border border-gray-100 hover:border-gray-200 rounded transition-colors cursor-default">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-bold text-gray-500 bg-gray-200 w-4 h-4 rounded flex items-center justify-center">2</span>
                                    <span className="text-[9px] font-bold text-navy-900 uppercase tracking-wider">Logistics</span>
                                 </div>
                                 <p className="text-xs text-gray-600 font-medium leading-relaxed">
                                   "Can I request a home visit for my elderly parent?"
                                 </p>
                              </div>

                              {/* Q3 */}
                              <div className="group p-3 bg-gray-50/50 border border-gray-100 hover:border-gray-200 rounded transition-colors cursor-default">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-bold text-gray-500 bg-gray-200 w-4 h-4 rounded flex items-center justify-center">3</span>
                                    <span className="text-[9px] font-bold text-navy-900 uppercase tracking-wider">Admin</span>
                                 </div>
                                 <p className="text-xs text-gray-600 font-medium leading-relaxed">
                                   "Can you provide information about fees & insurance?"
                                 </p>
                              </div>
                           </div>
                        </div>

                    </div>
                 </div>
              </div>
              <p className="text-center mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Real-time practice intelligence. No manual tracking required.
              </p>
           </div>

           {/* Features Grid below visual */}
           <div className="max-w-7xl mx-auto mt-20">
              <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-8 text-center border-b border-gray-200 pb-4 mx-auto max-w-xs">
                What the Intelligence Layer Reveals
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Demand mapping", desc: "See exactly what patients ask most often, identifying trends before they become overwhelming." },
                  { label: "Friction detection", desc: "Pinpoint where patients get stuck—fees, booking confusion, or eligibility criteria." },
                  { label: "Knowledge gaps", desc: "Identify questions the Twin couldn't answer, so you can add the right approved source." },
                  { label: "Operational signals", desc: "Track enquiry volume, self-serve resolution rates, and response speed." }
                ].map((item, i) => (
                  <div key={i} className="text-left">
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-serif font-bold text-lg mb-4">{i+1}</div>
                    <h5 className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-3">{item.label}</h5>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>

        </div>
      </section>

      {/* 5. THE NSX STANDARD */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl serif text-navy-900 mb-6">Built for professional accountability—not generic AI.</h2>
              <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
                 NeuraScaleX is governance-first because your reputation and indemnity depend on predictability.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Approved sources only", desc: "No web browsing; responses are grounded in what you’ve provided." },
                { title: "Hard boundaries", desc: "Your red lines are defined and enforced (scope, medicolegal, crisis, prescribing)." },
                { title: "Clinician sign-off", desc: "Nothing goes live until you approve the Twin’s scope and tone." },
                { title: "Audit trail", desc: "Every conversation is logged so you can review behaviour, verify boundaries, and refine safely." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-teal-800 transition-colors">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-3">{item.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. DEPLOYMENT */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl serif text-navy-900 mb-10">One identity. Everywhere patients look.</h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto mb-16">
               Deploy the Digital Twin across your existing touchpoints—and route patients into your workflow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 border border-gray-200 rounded-sm bg-white">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-teal-800 mb-6">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Website Widget</h3>
                  <p className="text-sm text-gray-500 font-light">Works with WordPress, Webflow, Squarespace, and custom sites.</p>
               </div>
               <div className="p-8 border border-gray-200 rounded-sm bg-white">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-teal-800 mb-6">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-2.46-4.743l5.353-5.353" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Shareable Link</h3>
                  <p className="text-sm text-gray-500 font-light">Ideal for LinkedIn, email footers, WhatsApp, SMS, QR codes.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-32 bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl md:text-6xl serif mb-6">Ready to deploy a governed Digital Twin + Intelligence layer?</h2>
           <p className="text-xl text-gray-300 font-light mb-12">
             We handle curation, build, and safety testing. You approve. We deploy.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
              <Link to="/demo" className="w-full sm:w-auto bg-gold-500 text-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gold-600 transition-all">
                Request a Demo
              </Link>
              <Link to="/free-trial" className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Start Free Pilot
              </Link>
           </div>
           
           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
             Onboarding within 24 hours. No payment data required to begin the pilot.
           </p>
        </div>
      </section>

    </div>
  );
};

export default Platform;
