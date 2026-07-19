
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendToInfoInbox } from '../services/emailService';
import { referralService } from '../services/referralService';
import { leadService, LeadType } from '../services/leadService';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'General enquiry',
    message: '',
    referralCode: referralService.getReferralCode() || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // 1. Submit to Firestore
      await leadService.submitLead(
        LeadType.CONTACT,
        formData.name,
        formData.email,
        formData.referralCode,
        {
          enquiryType: formData.type,
          message: formData.message
        }
      );

      // 2. Relay to Inbox
      const success = await sendToInfoInbox('CONTACT', formData);
      
      if (success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Even if email relay fails, Firestore has the data now
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setError("Something went wrong. Please try again or email us directly at info@neurascalex.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-paper p-6 font-sans">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-teal-precise/5 rounded-full flex items-center justify-center border border-teal-precise/10 mx-auto mb-8">
            <svg className="w-8 h-8 text-teal-precise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-serif text-teal-precise mb-4">Message Received.</h1>
          <p className="text-ink/60 font-serif italic mb-10">
            Thank you for reaching out. A member of the NeuraScaleX strategy team will be in touch shortly.
          </p>
          <Link to="/" className="text-ink font-bold uppercase tracking-widest text-xs border-b border-ink/30 pb-1 hover:border-ink transition-all">
            Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen font-sans">
       <section className="bg-paper py-20 text-ink text-center relative overflow-hidden border-b border-ink/5">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h1 className="text-6xl md:text-8xl font-serif mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 italic italic-moment">Contact us</h1>
            <p className="text-lg md:text-2xl text-ink/60 font-serif italic max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 leading-relaxed">
              If you have any questions, feedback or new feature suggestions, <br className="hidden md:block" /> we'd love to hear from you.
            </p>
          </div>
       </section>

       <section className="py-12 max-w-3xl mx-auto px-6 animate-in fade-in duration-1000 delay-500">
          <div className="text-center mb-16">
            <p className="text-ink/60 text-base font-serif italic leading-relaxed">
              Simply complete the form below and one of the team will be in touch. <br />
              All enquiries are reviewed for clinical context and strategy relevance.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 mb-24 relative">
            {isSubmitting && (
              <div className="absolute inset-0 bg-paper/50 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-ink border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div className="space-y-2">
              <label className="label-mono text-ink/65 opacity-100 font-bold text-[10px] uppercase tracking-widest">Name <span className="text-teal-precise">*</span></label>
              <input 
                required 
                type="text" 
                className="w-full p-5 border border-ink/10 rounded-none outline-none focus:border-teal-precise transition-colors bg-teal-precise/5 text-ink text-sm font-serif italic"
                placeholder="Your full name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="label-mono text-ink/65 opacity-100 font-bold text-[10px] uppercase tracking-widest">Email <span className="text-teal-precise">*</span></label>
              <input 
                required 
                type="email" 
                className="w-full p-5 border border-ink/10 rounded-none outline-none focus:border-teal-precise transition-colors bg-teal-precise/5 text-ink text-sm font-serif italic"
                placeholder="Work email address"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="label-mono text-ink/65 opacity-100 font-bold text-[10px] uppercase tracking-widest">Type of enquiry <span className="text-teal-precise">*</span></label>
              <div className="relative">
                <select 
                  required
                  className="w-full p-5 border border-ink/10 rounded-none outline-none focus:border-teal-precise transition-colors bg-teal-precise/5 text-ink text-sm font-serif italic appearance-none pr-12"
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                >
                  <option>General enquiry</option>
                  <option>Media enquiry</option>
                  <option>Platform feedback</option>
                  <option>Investor enquiry</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-teal-precise">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="label-mono text-ink/65 opacity-100 font-bold text-[10px] uppercase tracking-widest">Message</label>
              <textarea 
                className="w-full p-5 border border-ink/10 rounded-none outline-none focus:border-teal-precise transition-colors bg-teal-precise/5 text-ink text-sm font-serif italic min-h-[180px] resize-none"
                placeholder="How can we help?"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-serif italic text-center mb-8">
                {error}
              </div>
            )}
            <div className="text-center pt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-precise text-paper px-20 py-5 font-bold uppercase tracking-widest shadow-xl shadow-teal-precise/20 label-mono text-xs hover:brightness-110 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? 'Relaying enquiry...' : 'Submit enquiry'}
              </button>
            </div>
          </form>

          <div className="border-t border-ink/5 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-serif text-ink mb-6">NeuraScaleX Limited</h2>
                <div className="text-sm text-ink/60 space-y-1 font-light leading-relaxed font-serif">
                  <p>Regus, 2, A355 Windsor Drive,</p>
                  <p>Beaconsfield Services, Beaconsfield,</p>
                  <p>Buckinghamshire, England, HP9 2SE</p>
                  <div className="pt-6">
                    <p className="label-mono text-ink opacity-100 font-bold">Company number</p>
                    <p className="text-teal-precise font-medium">15910196</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                 <div className="bg-ink/[0.02] p-6 border border-ink/10">
                    <p className="label-mono text-ink/65 mb-4 opacity-100 font-bold">Integrity Disclaimer</p>
                    <p className="text-xs text-ink/70 italic leading-relaxed font-serif">
                      NeuraScaleX is committed to clinical integrity. We do not provide medical advice or diagnosis. All AI Assistant interactions are governed by approved professional standards.
                    </p>
                 </div>
              </div>
            </div>
          </div>
       </section>

       <section className="py-12 bg-paper text-center border-t border-ink/5">
          <p className="label-mono text-ink/55 italic opacity-100">
            Non-clinical. Not medical advice. Not a medical device.
          </p>
       </section>
    </div>
  );
};

export default Contact;
