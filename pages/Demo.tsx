
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../services/chatApi';

type DemoStep = 'form' | 'submitting' | 'path-a-portal' | 'path-b-review' | 'final-booked';

const Demo: React.FC = () => {
  const [step, setStep] = useState<DemoStep>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    website: '',
    linkedin: '',
    country: 'United Kingdom',
    description: '',
    goal: 'Reduce repetition & admin',
    note: ''
  });

  const calendarUrl = "https://calendar.app.google/8kSG3vmsYcZSgDXZ8";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');

    try {
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] ?? '';
      const lastName = nameParts.slice(1).join(' ') || firstName;

      const payload = {
        firstName,
        lastName,
        personalEmailId: formData.email,
        speciality: formData.role,
        personalWebsiteUrl: formData.website,
        linkedInUrl: formData.linkedin,
        country: formData.country,
        primaryGoal: formData.goal,
        message: formData.note,
      };

      const response = await fetch(`${API_URLS.dotnetApi}/Registration_NoKey/RequestDemo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'text/plain' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed (${response.status})`);
      }

      // Routing Logic: verified clinicians (website/LinkedIn provided) get priority booking
      const isVerified = formData.website.trim() !== '' || formData.linkedin.trim() !== '';
      setStep(isVerified ? 'path-a-portal' : 'path-b-review');
    } catch (error) {
      console.error('Demo request failed:', error);
      setStep('path-b-review');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. FORM STEP
  if (step === 'form' || step === 'submitting') {
    return (
      <div className="animate-in fade-in duration-1000 bg-paper min-h-screen">
        {/* HERO */}
        <section className="pt-32 pb-24 border-b border-ink/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="label-mono text-teal-precise mb-8 flex items-center gap-2 font-bold opacity-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-precise"></span>
                30-MINUTE DEMO
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-ink mb-10 leading-[1.1]">
                See the AI front door <br />
                <span className="italic text-teal-precise">for your specialist clinic.</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink/60 font-serif italic leading-relaxed max-w-3xl mb-14 italic-moment">
                30 minutes with the founding team. We show you the platform in action, walk through how it would deploy on your content, and answer everything you need to ask. No deck. No pitch. Just the product, your questions, and a clear next step.
              </p>
              
              <div className="flex flex-col md:flex-row gap-x-12 gap-y-6">
                {[
                  "✓ NO COMMITMENT",
                  "✓ FOUNDER-LED",
                  "✓ ENDS WITH A CLEAR ANSWER"
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                    <span className="w-2 h-2 border border-teal-precise rounded-full mr-3"></span>
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEMO REQUEST FORM */}
        <section id="demo-form" className="py-32 bg-paper-grid relative">
          {step === 'submitting' && (
            <div className="absolute inset-0 bg-paper/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 border-2 border-teal-precise border-t-transparent rounded-full animate-spin mb-6"></div>
              <p className="label-mono text-teal-precise font-bold opacity-100">Relaying Request Context...</p>
              <p className="text-xs text-ink/40 italic mt-2 font-serif">Securing Clinical Data Transmission</p>
            </div>
          )}
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-paper p-12 lg:p-16 rounded-none border border-ink/5 shadow-2xl shadow-teal-precise/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-precise via-teal-precise/50 to-teal-precise"></div>
              
              <div className="mb-14 text-center">
                <h2 className="text-3xl font-serif font-bold text-ink mb-4">Request your demo</h2>
                <p className="text-ink/60 text-sm font-serif italic">Fill this in and we’ll confirm a time. If we need anything, our onboarding team will reach out.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="label-mono text-ink font-bold opacity-100">Full name*</label>
                    <input required name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif" />
                  </div>
                  <div className="space-y-3">
                    <label className="label-mono text-ink font-bold opacity-100">Work email*</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="label-mono text-ink font-bold opacity-100">Role / Specialty*</label>
                  <input required name="role" value={formData.role} onChange={handleInputChange} type="text" placeholder="e.g., GP / Consultant / Specialist" className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="label-mono text-ink font-bold opacity-100">Website URL</label>
                    <input name="website" value={formData.website} onChange={handleInputChange} type="text" placeholder="https://yourclinic.com" className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif" />
                  </div>
                  <div className="space-y-3">
                    <label className="label-mono text-ink font-bold opacity-100">LinkedIn Profile</label>
                    <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} type="text" placeholder="linkedin.com/in/username" className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="label-mono text-ink font-bold opacity-100">Country*</label>
                  <select name="country" value={formData.country} onChange={handleInputChange} className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif appearance-none cursor-pointer">
                    <option>United Kingdom</option>
                    <option>Ireland</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="label-mono text-ink font-bold opacity-100">Primary goal for an AI Assistant*</label>
                  <select name="goal" value={formData.goal} onChange={handleInputChange} className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise text-sm font-serif appearance-none cursor-pointer">
                    <option>Reduce repetition & admin</option>
                    <option>Improve quality of enquiries / lead qualification</option>
                    <option>Route to programmes/membership</option>
                    <option>Website conversion & patient readiness</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="label-mono text-ink font-bold opacity-100">Anything we should know?</label>
                  <textarea name="note" value={formData.note} onChange={handleInputChange} placeholder="Specific patient hurdles, materials you use..." className="w-full py-4 bg-transparent border-b border-ink/10 outline-none focus:border-teal-precise transition-all text-sm font-serif h-24 resize-none"></textarea>
                </div>

                <div className="pt-8 text-center">
                  <button type="submit" className="bg-ink text-paper px-12 py-5 rounded-lg text-xs font-bold tracking-[0.2em] uppercase hover:bg-teal-precise transition-all shadow-xl shadow-ink/10 active:scale-[0.98]">
                    Request Demo
                  </button>
                  <p className="mt-8 label-mono text-ink/30 italic font-bold">
                    By clicking, you agree to our terms and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. PATH A: BOOKING PORTAL
  if (step === 'path-a-portal') {
    return (
      <div className="animate-in fade-in duration-700 bg-paper min-h-screen flex flex-col items-center py-32 px-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-teal-precise/10 bg-white shadow-xl mb-12">
              <svg className="w-10 h-10 text-teal-precise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-8">Request received.</h1>
            <p className="text-xl md:text-2xl text-ink/60 font-serif italic leading-relaxed max-w-2xl mx-auto mb-12">
              Our demo team has been notified and will be in touch within 24 hours. You can also secure a priority slot below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-teal-precise/5 p-12 rounded-none text-ink border border-teal-precise/10 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <h3 className="text-3xl font-serif font-bold text-teal-precise mb-6 italic italic-moment">Secure Priority Time</h3>
              <p className="text-ink/60 text-sm mb-12 leading-relaxed font-serif italic">
                Use our priority calendar to bypass the queue. We'll tailor the session to your primary goal: <span className="text-ink font-medium not-italic">"{formData.goal}"</span>.
              </p>
              <a 
                href={calendarUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-teal-precise text-paper px-8 py-5 rounded-none text-xs font-bold tracking-[0.2em] uppercase shadow-xl shadow-teal-precise/20 hover:brightness-110 transition-all flex items-center justify-center gap-3 label-mono"
              >
                LAUNCH PRIORITY CALENDAR
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-paper p-12 rounded-none border border-ink/5 flex flex-col justify-center">
              <h3 className="label-mono text-teal-precise font-bold uppercase mb-10 opacity-100 italic">Manual Review Protocol:</h3>
              <ul className="space-y-10">
                {[
                  { t: "Specialty Audit", d: "We review your role and expertise topic for demo relevance." },
                  { t: "Verification Check", d: "Our team confirms practice identity to protect clinical integrity." },
                  { t: "Personal Outreach", d: "A strategy expert will contact you within one business day." }
                ].map((s, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="w-10 h-10 rounded-full bg-paper border border-teal-precise/10 flex items-center justify-center text-[10px] font-bold text-teal-precise shrink-0 mt-1 font-mono">{i+1}</span>
                    <div>
                      <h4 className="text-[11px] font-bold text-ink mb-1 uppercase tracking-widest">{s.t}</h4>
                      <p className="text-sm text-ink/50 font-serif italic leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center space-y-10">
            <p className="label-mono text-ink/30 italic font-bold">
              Please note: Demos are informational and non-clinical in nature.
            </p>
            <Link to="/" className="inline-block text-ink font-bold uppercase tracking-[0.2em] text-[10px] border-b border-ink/20 pb-2 hover:border-teal-precise transition-colors">
              BACK TO HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. PATH B: MANUAL REVIEW
  if (step === 'path-b-review') {
    return (
      <div className="animate-in fade-in duration-700 bg-paper min-h-screen flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-12 flex justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-teal-precise/10 shadow-xl">
              <svg className="w-10 h-10 text-teal-precise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-8">Demo request received.</h1>
          <p className="text-xl md:text-2xl text-ink/60 font-serif italic leading-relaxed mb-14">
            Thank you—our strategy team has been notified and will reach out within 24 hours. We value clinical integrity and want to ensure the session is perfectly tailored to your specialty.
          </p>
          <div className="inline-block bg-white px-8 py-4 border border-ink/5 rounded-none mb-14">
              <p className="label-mono text-teal-precise font-bold italic opacity-100 uppercase tracking-widest">Confirmed for Strategy Review</p>
          </div>
          <div className="block pt-10 border-t border-ink/5">
            <Link to="/" className="text-ink font-bold uppercase tracking-[0.2em] text-[10px] border-b border-teal-precise/40 pb-2 hover:border-teal-precise transition-colors">
              BACK TO HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Demo;
