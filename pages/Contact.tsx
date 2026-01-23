
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sendToInfoInbox } from '../services/emailService';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'General enquiry',
    message: ''
  });
  const location = useLocation();

  useEffect(() => {
    // Scroll to form section when component mounts or hash changes
    if (location.hash === '#form') {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send to info@neurascalex.com via service
    const success = await sendToInfoInbox('CONTACT', formData);
    
    if (success) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-warm-white p-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-softgreen rounded-full flex items-center justify-center border border-teal-100 mx-auto mb-8">
            <svg className="w-8 h-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl serif text-teal-800 mb-4">Message Received.</h1>
          <p className="text-gray-600 font-light mb-10">
            Thank you for reaching out. A member of the NeuraScaleX strategy team will be in touch shortly.
          </p>
          <Link to="/" className="text-navy-800 font-bold uppercase tracking-widest text-xs border-b border-navy-800 pb-1">
            Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-warm-white min-h-screen">
       <section className="bg-navy-950 py-32 text-white text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h1 className="text-6xl md:text-8xl serif mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">Contact us</h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 leading-relaxed">
              If you have any questions, feedback or new feature suggestions, <br className="hidden md:block" /> we'd love to hear from you.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="0" cy="0" r="40" fill="white" />
              <circle cx="100" cy="100" r="40" fill="white" />
            </svg>
          </div>
       </section>

       <section id="contact-form" className="py-20 max-w-3xl mx-auto px-6 animate-in fade-in duration-1000 delay-500">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-base font-light leading-relaxed">
              Simply complete the form below and one of the team will be in touch. <br />
              All enquiries are reviewed for clinical context and strategy relevance.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 mb-24 relative">
            {isSubmitting && (
              <div className="absolute inset-0 bg-warm-white/50 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-navy-800 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Name <span className="text-red-500">*</span></label>
              <input 
                required 
                type="text" 
                className="w-full p-5 border border-gray-200 rounded-lg outline-none focus:border-navy-800 transition-colors bg-white text-sm"
                placeholder="Your full name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Email <span className="text-red-500">*</span></label>
              <input 
                required 
                type="email" 
                className="w-full p-5 border border-gray-200 rounded-lg outline-none focus:border-navy-800 transition-colors bg-white text-sm"
                placeholder="Work email address"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Type of enquiry <span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  required
                  className="w-full p-5 border border-gray-200 rounded-lg outline-none focus:border-navy-800 transition-colors bg-white text-sm appearance-none pr-12"
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                >
                  <option>General enquiry</option>
                  <option>Media enquiry</option>
                  <option>Platform feedback</option>
                  <option>Investor enquiry</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Message</label>
              <textarea 
                className="w-full p-5 border border-gray-200 rounded-lg outline-none focus:border-navy-800 transition-colors bg-white text-sm min-h-[180px] resize-none"
                placeholder="How can we help?"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <div className="text-center pt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gold-500 text-navy-950 px-20 py-5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-gold-600 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? 'Relaying enquiry...' : 'Submit enquiry'}
              </button>
            </div>
          </form>

          <div className="border-t border-gray-100 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl serif text-navy-900 mb-6">NeuraScaleX Limited</h2>
                <div className="text-sm text-gray-500 space-y-1 font-light leading-relaxed">
                  <p>Regus, 2, A355 Windsor Drive,</p>
                  <p>Beaconsfield Services, Beaconsfield,</p>
                  <p>Buckinghamshire, England, HP9 2SE</p>
                  <div className="pt-6">
                    <p className="font-bold text-navy-900 uppercase tracking-widest text-[10px]">Company number</p>
                    <p className="text-teal-800 font-medium">15910196</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                 <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Integrity Disclaimer</p>
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                      NeuraScaleX is committed to clinical integrity. We do not provide medical advice or diagnosis. All digital twin interactions are governed by approved professional standards.
                    </p>
                 </div>
              </div>
            </div>
          </div>
       </section>

       <section className="py-12 bg-white text-center border-t border-gray-50">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
            Non-clinical. Not medical advice. Not a medical device.
          </p>
       </section>
    </div>
  );
};

export default Contact;
