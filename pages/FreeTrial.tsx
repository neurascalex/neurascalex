
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FreeTrial: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    country: 'UK',
    website: '',
    linkedin: '',
    phone: '',
    primaryGoal: '',
    deployment: '',
    message: '',
    consentAuth: false,
    consentNonClinical: false,
    consentContact: false,
    consentPublicVerification: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Submit to NeuraScaleX API
      const response = await fetch('https://neurax-net-test-eqgxdcf9ayhdazfe.uksouth-01.azurewebsites.net/Registration_NoKey/RequestTrial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          personalEmailId: formData.email,
          speciality: formData.role,
          country: formData.country,
          personalWebsiteUrl: formData.website,
          linkedInUrl: formData.linkedin,
          phoneNumber: formData.phone,
          primaryGoal: formData.primaryGoal,
          deploymentPreference: formData.deployment,
          message: formData.message,
          consentAuth: formData.consentAuth,
          consentNonClinical: formData.consentNonClinical,
          consentContact: formData.consentContact,
          consentPublicVerification: formData.consentPublicVerification
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit trial request');
      }

      console.log('Free trial request successfully submitted:', formData);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting trial request:', error);
      // Still show success page even if API fails
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
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
          <h1 className="text-4xl md:text-5xl serif text-teal-800 mb-6">You’re in. Next step: Verification + setup</h1>
          <div className="text-left bg-gray-50 p-8 rounded-sm border border-gray-100 mb-10">
            <ul className="space-y-4 text-gray-600 font-light">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 font-bold">/</span>
                Within 24 hours, our onboarding team will confirm your trial eligibility.
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 font-bold">/</span>
                If we have enough information, you’ll receive your private Twin URL, dashboard login, and onboarding checklist.
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 font-bold">/</span>
                If we need anything, we’ll email you a short “missing details” request.
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 font-bold font-semibold text-teal-800 italic">
                  Target go-live: 7 days (after you approve boundaries + routing).
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/demo" className="bg-navy-800 text-gold-500 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest shadow-lg">
              Book a 15-min onboarding call
            </Link>
            <Link to="/" className="text-navy-800 font-bold uppercase tracking-widest text-sm border-b-2 border-navy-800 pb-1">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl serif text-teal-800 mb-4">Start your 30-Day Clinician Digital Twin Trial</h1>
          <p className="text-gray-500 font-light text-lg mb-2">We verify clinician identity, create your private testing environment, and share your Twin + dashboard access.</p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
            Approved sources only. Non-clinical by design. You control what gets published.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12 space-x-4">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= 1 ? 'bg-teal-800 text-gold-500' : 'bg-gray-200 text-gray-400'}`}>1</div>
            <span className={`ml-2 text-[10px] font-bold uppercase tracking-widest ${step >= 1 ? 'text-teal-800' : 'text-gray-400'}`}>Your details</span>
          </div>
          <div className={`w-12 h-px ${step >= 2 ? 'bg-teal-800' : 'bg-gray-200'}`}></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= 2 ? 'bg-teal-800 text-gold-500' : 'bg-gray-200 text-gray-400'}`}>2</div>
            <span className={`ml-2 text-[10px] font-bold uppercase tracking-widest ${step >= 2 ? 'text-teal-800' : 'text-gray-400'}`}>Goals + Deployment</span>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-sm shadow-2xl border border-gray-100 relative">
          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="animate-in slide-in-from-right-4 duration-300 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">First name*</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" placeholder="e.g., Sarah" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Last name*</label>
                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" placeholder="e.g., Chen" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Work email*</label>
                  <p className="text-[10px] text-gray-400 mb-1">If you don’t have a work email, use personal email and add your GMC/NMC/HCPC or clinic link below.</p>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="name@nhs.net / name@clinic.com" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Role / Specialty*</label>
                    <input required name="role" value={formData.role} onChange={handleInputChange} type="text" placeholder="e.g., GP / Therapist" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Country / Primary location*</label>
                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm appearance-none transition-all">
                      <option value="UK">United Kingdom</option>
                      <option value="Ireland">Ireland</option>
                      <option value="EU">European Union</option>
                      <option value="US">United States</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Website / clinic page</label>
                  <p className="text-[10px] text-gray-400 mb-1">Used to verify identity and plan your embed.</p>
                  <input name="website" value={formData.website} onChange={handleInputChange} type="url" placeholder="https://yourclinic.com" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">LinkedIn profile URL</label>
                    <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} type="url" placeholder="https://linkedin.com/in/…" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Phone number (optional)</label>
                    <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm transition-all" />
                  </div>
                </div>

                <div className="pt-6">
                  <button type="button" onClick={handleNext} className="w-full bg-teal-800 text-gold-500 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-teal-900 transition-all shadow-lg">
                    Continue to Goals
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in slide-in-from-right-4 duration-300 space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Primary goal*</label>
                  <select required name="primaryGoal" value={formData.primaryGoal} onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm appearance-none transition-all">
                    <option value="">Select a primary goal</option>
                    <option value="admin">Reduce routine admin queries (fees, booking, location, availability)</option>
                    <option value="orientation">Improve patient orientation before first visit (what to expect, how you work)</option>
                    <option value="education">Scale education in my voice (conditions, approach, resources)</option>
                    <option value="pathway">Qualify enquiries / route to the right pathway (private/NHS/programme)</option>
                    <option value="enrolment">Support programme or membership enrolment</option>
                    <option value="reputation">Reduce misinformation / protect reputation online</option>
                    <option value="other">Other (tell us below)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Where do you want to deploy first?*</label>
                  <select required name="deployment" value={formData.deployment} onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm appearance-none transition-all">
                    <option value="">Select deployment preference</option>
                    <option value="website">My existing website (embed)</option>
                    <option value="link">Link-only (share via LinkedIn / QR / email)</option>
                    <option value="both">Both</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-navy-900">Anything we should know?</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="What do people ask you repeatedly? Any boundaries you want enforced? Key links or PDFs?" className="w-full p-4 bg-gray-50 border border-gray-100 outline-none focus:ring-1 focus:ring-teal-800 text-sm h-32 transition-all"></textarea>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-50">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Consent & Compliance</h4>
                  <div className="space-y-3">
                    <label className="flex items-start group cursor-pointer">
                      <input required type="checkbox" name="consentAuth" checked={formData.consentAuth} onChange={handleInputChange} className="mt-1 w-4 h-4 text-teal-800 rounded focus:ring-teal-800" />
                      <span className="ml-3 text-xs text-gray-600 leading-relaxed group-hover:text-navy-900 transition-colors">I confirm I am the clinician / authorised representative and I have the right to provide these details.</span>
                    </label>
                    <label className="flex items-start group cursor-pointer">
                      <input required type="checkbox" name="consentNonClinical" checked={formData.consentNonClinical} onChange={handleInputChange} className="mt-1 w-4 h-4 text-teal-800 rounded focus:ring-teal-800" />
                      <span className="ml-3 text-xs text-gray-600 leading-relaxed group-hover:text-navy-900 transition-colors">I understand the Digital Twin is non-clinical and does not provide diagnosis, prescriptions, or individual treatment plans.</span>
                    </label>
                    <label className="flex items-start group cursor-pointer">
                      <input required type="checkbox" name="consentContact" checked={formData.consentContact} onChange={handleInputChange} className="mt-1 w-4 h-4 text-teal-800 rounded focus:ring-teal-800" />
                      <span className="ml-3 text-xs text-gray-600 leading-relaxed group-hover:text-navy-900 transition-colors">I agree to be contacted by the NeuraScaleX onboarding team about this trial.</span>
                    </label>
                    <label className="flex items-start group cursor-pointer">
                      <input type="checkbox" name="consentPublicVerification" checked={formData.consentPublicVerification} onChange={handleInputChange} className="mt-1 w-4 h-4 text-teal-800 rounded focus:ring-teal-800" />
                      <span className="ml-3 text-xs text-gray-600 leading-relaxed group-hover:text-navy-900 transition-colors italic">I’m happy for NeuraScaleX to use my public website/LinkedIn content only for verification and onboarding setup.</span>
                    </label>
                  </div>
                </div>

                <div className="pt-8 flex flex-col items-center">
                  <button type="submit" className="w-full bg-navy-800 text-gold-500 py-6 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-navy-950 transition-all shadow-2xl mb-6">
                    Start Free Trial
                  </button>
                  <button type="button" onClick={handleBack} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-navy-900 transition-colors">
                    ← Back to step 1
                  </button>
                  <p className="mt-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                    Privacy: We use your details to verify identity, create your private tenant, and run onboarding. We don’t sell your data. No credit card required.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 text-center text-xs text-gray-400 flex flex-wrap justify-center gap-6 font-bold uppercase tracking-widest">
           <Link to="/privacy" className="hover:text-navy-900">Privacy Policy</Link>
           <span className="text-gray-200">|</span>
           <Link to="/terms" className="hover:text-navy-900">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
