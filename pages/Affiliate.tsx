
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { referralService } from '../services/referralService';
import { leadService } from '../services/leadService';

const Affiliate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    linkSource: '', // e.g. "LinkedIn", "Clinic Newsletter"
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await leadService.submitAffiliateApplication(
        formData.name,
        formData.email,
        formData.profession,
        formData.linkSource,
        formData.message
      );
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="animate-in fade-in duration-700 bg-paper min-h-[80vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-teal-precise/10 rounded-full flex items-center justify-center border border-teal-precise/20">
              <span className="text-teal-precise text-3xl">✓</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6 italic italic-moment">Application Received</h1>
          <p className="text-xl text-ink/60 font-serif mb-12 leading-relaxed">
            Thank you for applying to the NeuraScaleX Advocate Program. Our team is reviewing your profile and will be in touch within 48 hours to discuss your unique partnership terms.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary rounded-none px-12"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen pt-24 font-sans selection:bg-teal-precise selection:text-paper">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-paper text-ink relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="label-mono text-teal-precise mb-8 block font-bold uppercase text-[10px] tracking-[0.4em] opacity-100">ADVOCATE PROGRAM</span>
            <h1 className="text-6xl md:text-8xl font-serif text-ink mb-10 leading-[1.1] tracking-tight">
              Share the <br />
              <span className="italic text-teal-precise">future of care.</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-serif italic italic-moment leading-relaxed mb-12">
              Join Dr Catherine and our circle of clinical advocates. Help your peers reclaim their time and build a modern digital front door for their private practice.
            </p>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-paper relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="label-mono text-teal-precise mb-6 font-bold uppercase text-[10px] tracking-[0.3em]">UNIQUE ACCESS</h3>
              <p className="text-lg font-serif italic text-ink/80 leading-relaxed mb-4">Unique Referral Links</p>
              <p className="text-sm font-light text-ink/70 leading-relaxed">We provide Dr Catherine and other advocates with a dedicated code (e.g., <code className="bg-ink/5 px-2 py-1">?ref=drcathy</code>) to track every clinical lead.</p>
            </div>
            <div>
              <h3 className="label-mono text-teal-precise mb-6 font-bold uppercase text-[10px] tracking-[0.3em]">REVENUE SHARE</h3>
              <p className="text-lg font-serif italic text-ink/80 leading-relaxed mb-4">Manual Payout Credit</p>
              <p className="text-sm font-light text-ink/70 leading-relaxed">Receive referral credits or direct payouts for every practice that switches to a paid NeuraScaleX plan after their pilot.</p>
            </div>
            <div>
              <h3 className="label-mono text-teal-precise mb-6 font-bold uppercase text-[10px] tracking-[0.3em]">GOVERNED V1</h3>
              <p className="text-lg font-serif italic text-ink/80 leading-relaxed mb-4">Clinician First</p>
              <p className="text-sm font-light text-ink/70 leading-relaxed">No automated dashboards yet. We handle conversion tracking manually to ensure absolute precision and trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-teal-precise/[0.02] border-y border-ink/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-ink mb-4">Apply for Advocacy</h2>
            <p className="text-ink/60 font-serif italic">Complete the form below to begin the partnership discussion.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="label-mono text-[10px] uppercase font-bold opacity-40">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-paper border border-ink/10 p-4 font-serif text-lg focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="Dr. Jane Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="label-mono text-[10px] uppercase font-bold opacity-40">Professional Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-paper border border-ink/10 p-4 font-serif text-lg focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="jane@clinic.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="label-mono text-[10px] uppercase font-bold opacity-40">Specialty / Profession</label>
              <input 
                required
                type="text" 
                value={formData.profession}
                onChange={(e) => setFormData({...formData, profession: e.target.value})}
                className="w-full bg-paper border border-ink/10 p-4 font-serif text-lg focus:outline-none focus:border-teal-precise transition-colors"
                placeholder="e.g. Consultant Rheumatologist"
              />
            </div>

            <div className="space-y-2">
              <label className="label-mono text-[10px] uppercase font-bold opacity-40">Where will you share NeuraScaleX?</label>
              <input 
                required
                type="text" 
                value={formData.linkSource}
                onChange={(e) => setFormData({...formData, linkSource: e.target.value})}
                className="w-full bg-paper border border-ink/10 p-4 font-serif text-lg focus:outline-none focus:border-teal-precise transition-colors"
                placeholder="e.g. Medical LinkedIn network, Clinical Newsletter"
              />
            </div>

            <div className="space-y-2">
              <label className="label-mono text-[10px] uppercase font-bold opacity-40">Your Vision for Partnership</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-paper border border-ink/10 p-4 font-serif text-lg focus:outline-none focus:border-teal-precise transition-colors"
                placeholder="Tell us a little more..."
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-serif italic text-center mb-8">
                {error}
              </div>
            )}

            <button 
              disabled={isSubmitting}
              className={`w-full py-6 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl bg-ink text-paper hover:bg-teal-precise`}
            >
              {isSubmitting ? 'Processing Application...' : 'Send Application'}
            </button>
          </form>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 bg-paper border-b border-ink/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between gap-10 opacity-30">
            <span className="label-mono text-[10px] uppercase tracking-widest font-bold">✓ Manual Conversion Tracking</span>
            <span className="label-mono text-[10px] uppercase tracking-widest font-bold">✓ Clinician Approved</span>
            <span className="label-mono text-[10px] uppercase tracking-widest font-bold">✓ Direct Communication</span>
            <span className="label-mono text-[10px] uppercase tracking-widest font-bold">✓ UK Registered</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
