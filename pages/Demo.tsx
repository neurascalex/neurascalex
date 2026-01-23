
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type DemoStep = 'form' | 'submitting' | 'path-a-portal' | 'path-b-review' | 'final-booked';

const Demo: React.FC = () => {
  const [step, setStep] = useState<DemoStep>('form');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      // Submit to NeuraScaleX API
      const requestBody = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        personalEmailId: formData.email,
        speciality: formData.role,
        personalWebsiteUrl: formData.website || '',
        linkedInUrl: formData.linkedin || '',
        country: formData.country,
        primaryGoal: formData.goal,
        message: formData.note || ''
      };

      console.log('Submitting demo request with payload:', requestBody);

      const response = await fetch('https://neurax-net-test-eqgxdcf9ayhdazfe.uksouth-01.azurewebsites.net/Registration_NoKey/RequestDemo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`Failed to submit demo request: ${response.status} - ${errorText}`);
      }

      const responseData = await response.json();
      console.log('API Response:', responseData);

      console.log('Demo request successfully submitted:', formData);

      // Routing Logic: Verification Path
      // Clinicians providing clinical verification (website/LinkedIn) get the priority booking option
      const isVerified = formData.website.trim() !== '' || formData.linkedin.trim() !== '';
      
      if (isVerified) {
        setStep('path-a-portal');
      } else {
        setStep('path-b-review');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      // Still proceed to next step even if API fails
      const isVerified = formData.website.trim() !== '' || formData.linkedin.trim() !== '';
      
      if (isVerified) {
        setStep('path-a-portal');
      } else {
        setStep('path-b-review');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 1. FORM STEP
  if (step === 'form' || step === 'submitting') {
    return (
      <div className="animate-in fade-in duration-1000 bg-warm-white">
        {/* HERO */}
        <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl serif mb-10 leading-tight">Book a NeuraScaleX Demo</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-4xl mx-auto">
              See how a Clinician Digital Twin answers routine queries, protects boundaries, and routes patients safely — in your voice.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 max-w-5xl mx-auto">
              {[
                "Non-clinical by design (knows where to stop)",
                "Built only from approved sources",
                "Live in 7 days with guided onboarding"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center text-sm font-semibold uppercase tracking-widest text-gold-500">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  {bullet}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              <div>Approved sources only</div>
              <div className="text-gold-500">•</div>
              <div>Non-clinical by design</div>
              <div className="text-gold-500">•</div>
              <div>Designed to know where to stop</div>
            </div>
          </div>
        </section>

        {/* DEMO REQUEST FORM */}
        <section id="demo-form" className="py-24 bg-white relative">
          {step === 'submitting' && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-teal-800 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-800">Processing Request...</p>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest">Routing to shyam@hrdigitalmedia.com</p>
            </div>
          )}
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-warm-white p-12 rounded-sm border border-gray-100 shadow-xl">
              <div className="mb-10 text-center">
                <h2 className="text-3xl serif text-teal-800 mb-4">Request your demo</h2>
                <p className="text-gray-500 text-sm">Fill this in and we’ll confirm a time. If we need anything, our onboarding team will reach out.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">First name*</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Last name*</label>
                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Work email*</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Role / Specialty*</label>
                  <input required name="role" value={formData.role} onChange={handleInputChange} type="text" placeholder="e.g., GP / Consultant / Specialist" className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Website URL (Recommended)</label>
                    <input name="website" value={formData.website} onChange={handleInputChange} type="text" placeholder="https://yourclinic.com" className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">LinkedIn Profile (Recommended)</label>
                    <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} type="text" placeholder="linkedin.com/in/username" className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Country*</label>
                  <select name="country" value={formData.country} onChange={handleInputChange} className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm appearance-none">
                    <option>United Kingdom</option>
                    <option>Ireland</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Primary goal for a Digital Twin*</label>
                  <select name="goal" value={formData.goal} onChange={handleInputChange} className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 text-sm appearance-none">
                    <option>Reduce repetition & admin</option>
                    <option>Improve quality of enquiries / lead qualification</option>
                    <option>Route to programmes/membership</option>
                    <option>Website conversion & patient readiness</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Anything we should know before the demo?</label>
                  <textarea name="note" value={formData.note} onChange={handleInputChange} placeholder="e.g., Specific patient hurdles, types of material you use..." className="w-full p-4 bg-white border border-gray-200 outline-none focus:ring-1 focus:ring-teal-800 transition-all text-sm h-24"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-teal-800 text-gold-500 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-teal-900 transition-all shadow-lg active:scale-[0.98]">
                    Request Demo
                  </button>
                  <p className="mt-6 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                    By clicking, you agree to our terms. Your request will be reviewed by the NeuraScaleX strategy team.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. PATH A: BOOKING PORTAL (UPDATED WITH REVIEW MESSAGE)
  if (step === 'path-a-portal') {
    return (
      <div className="animate-in fade-in duration-700 bg-white min-h-screen flex flex-col items-center py-24 px-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <div className="mb-10 flex justify-center">
              <div className="w-20 h-20 bg-teal-800 rounded-full flex items-center justify-center border border-teal-700/20 shadow-xl">
                <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl serif text-teal-800 mb-6">Thank you, your request is being processed.</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Our demo team will be in touch with you within 24 hours to confirm your details. Alternatively, you can secure a priority slot through our calendar below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Action Box */}
            <div className="bg-navy-900 p-12 rounded-sm text-white shadow-2xl flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl serif text-gold-500 mb-6 italic">Secure Priority Time</h3>
              <p className="text-gray-400 text-sm mb-10 leading-relaxed font-light">
                Use our priority calendar to bypass the queue. We'll tailor the session to your primary goal: <span className="text-white font-medium">"{formData.goal}"</span>.
              </p>
              <a 
                href={calendarUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gold-500 text-navy-950 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-gold-600 transition-all flex items-center justify-center"
              >
                <span>Launch Priority Calendar</span>
                <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Direct Google Calendar Access
              </p>
            </div>

            {/* Steps Box */}
            <div className="bg-gray-50 p-12 rounded-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-8">Manual Review Protocol:</h3>
              <ul className="space-y-8">
                {[
                  { t: "Specialty Audit", d: "We review your role and expertise topic for demo relevance." },
                  { t: "Verification Check", d: "Our team confirms practice identity to protect clinical integrity." },
                  { t: "Personal Outreach", d: "A strategy expert will contact you within one business day." }
                ].map((step, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-white border border-teal-800/10 flex items-center justify-center text-xs font-bold text-teal-800 mr-5 flex-shrink-0">{i+1}</span>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900 mb-1">{step.t}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center space-y-8">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Please note: Demos are for informational purposes and non-clinical in nature.
            </p>
            <Link to="/" className="inline-block text-navy-800 font-bold uppercase tracking-widest text-xs border-b border-navy-800 pb-1">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. PATH B: MANUAL REVIEW (NO CALENDAR)
  if (step === 'path-b-review') {
    return (
      <div className="animate-in fade-in duration-700 bg-white min-h-[80vh] flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-softgreen rounded-full flex items-center justify-center border border-teal-100">
              <svg className="w-8 h-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl serif text-teal-800 mb-6">Demo request received</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            Thank you—our strategy team will review your details and reach out within 24 hours to confirm your demo. We value clinical integrity and want to ensure the session is perfectly tailored to your specialty.
          </p>
          <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm mb-12">
              <p className="text-xs text-navy-900/60 font-medium italic">Sent to the onboarding team (shyam@hrdigitalmedia.com)</p>
          </div>
          <Link to="/" className="text-navy-800 font-bold uppercase tracking-widest text-sm border-b-2 border-gold-500 pb-1">
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default Demo;
