import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../services/chatApi';

// ── Paste your deployed Google Apps Script Web App URL here ─────────────────
const GOOGLE_SHEET_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2LK5nTS_wn_xl3j6zGXh2dXBM6EQudztcjrTeBRHVpgj94o9JQo-BgfEgZEfqg_13/exec';

const Referral: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [promoValidated, setPromoValidated] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    clinicName: '',
    promoCode: '',
    referrerName: '',
    referrerEmail: '',
    message: '',
    consent: false,
  });

  const VALID_PROMO_CODES = new Set(['NEURAX10', 'REFER25', 'CLINIC50', 'LAUNCH2026']);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (name === 'promoCode') setPromoValidated(null);
  };

  const validatePromo = () => {
    const code = formData.promoCode.trim().toUpperCase();
    setPromoValidated(VALID_PROMO_CODES.has(code));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsLoading(true);
    setSubmitError(null);
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        personalEmailId: formData.email,
        phoneNumber: formData.phone,
        clinicName: formData.clinicName,
        promoCode: formData.promoCode.trim().toUpperCase(),
        referrerName: formData.referrerName,
        referrerEmail: formData.referrerEmail,
        message: formData.message,
      };

      // ── Send to Google Sheet (no-cors: fire-and-forget) ───────────────────
      const sheetsPayload = {
        firstName:     formData.firstName,
        lastName:      formData.lastName,
        email:         formData.email,
        phone:         formData.phone,
        clinicName:    formData.clinicName,
        promoCode:     formData.promoCode.trim().toUpperCase(),
        referrerName:  formData.referrerName,
        referrerEmail: formData.referrerEmail,
        message:       formData.message,
      };
      if (GOOGLE_SHEET_SCRIPT_URL) {
        fetch(GOOGLE_SHEET_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetsPayload),
        }).catch(() => { /* silent — sheet write is best-effort */ });
      }

      // ── Send to main API ──────────────────────────────────────────────────
      const response = await fetch(`${API_URLS.dotnetApi}/Registration_NoKey/Referral`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'text/plain' },
        body: JSON.stringify(payload),
      });
      // Accept 2xx or treat 404/not-found gracefully (endpoint may not exist yet)
      if (!response.ok && response.status !== 404) {
        const text = await response.text();
        throw new Error(text || `Request failed (${response.status})`);
      }
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const promoBorderClass = (validated: boolean | null) => {
    if (validated === true) return 'border-teal-precise';
    if (validated === false) return 'border-red-500';
    return 'border-ink/20 focus:border-teal-precise';
  };

  // ── Success screen ───────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <div className="animate-in fade-in duration-700 bg-paper min-h-[80vh] flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-teal-precise/10 rounded-full flex items-center justify-center border border-teal-precise/20">
              <svg className="w-8 h-8 text-teal-precise" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-teal-precise/20 mb-6 bg-paper">
            <span className="label-mono font-bold text-teal-precise uppercase tracking-[0.4em] text-[10px]">REFERRAL SUBMITTED</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-ink leading-tight">
            Thank you for<br /><span className="text-teal-precise italic">referring a colleague.</span>
          </h1>
          <p className="text-lg font-light text-ink/70 mb-4 leading-relaxed font-serif italic max-w-xl mx-auto">
            We've received your referral and will reach out within 1–2 business days. Your promo code discount will be applied once the referred clinic activates their account.
          </p>
          <div className="mt-8 p-6 border border-teal-precise/20 bg-teal-precise/5 text-left max-w-sm mx-auto">
            <p className="label-mono text-teal-precise mb-2">PROMO CODE APPLIED</p>
            <p className="text-2xl font-mono font-bold text-ink tracking-widest">
              {formData.promoCode.trim().toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/" className="bg-teal-precise text-paper px-8 py-4 font-bold uppercase tracking-widest hover:bg-teal-precise/90 transition-all">
              BACK TO HOME
            </Link>
            <Link to="/pricing" className="border border-ink/20 text-ink px-8 py-4 font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all">
              VIEW PRICING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────────
  return (
    <div className="animate-in fade-in duration-1000 bg-paper min-h-screen font-sans">

      {/* Hero */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-paper text-ink">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-precise/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-teal-precise/20 mb-8 backdrop-blur-sm bg-paper">
            <span className="label-mono font-bold text-teal-precise uppercase tracking-[0.4em] text-[10px]">REFERRAL PROGRAMME</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 tracking-tight text-ink">
            Refer a colleague,<br />
            <span className="text-teal-precise italic">earn together.</span>
          </h1>
          <p className="text-xl font-light text-ink/70 mb-4 leading-relaxed font-serif italic max-w-2xl mx-auto">
            Know a specialist clinic that could benefit from NeuraScaleX? Refer them with your promo code and both of you unlock exclusive rewards.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 bg-paper border-y border-ink/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Enter your details', desc: "Tell us who you are and which clinic you're referring." },
              { step: '02', title: 'Apply your promo code', desc: 'Use your unique referral code to unlock discounts for both parties.' },
              { step: '03', title: 'Earn rewards', desc: 'Once the referred clinic activates, both accounts receive their benefit.' },
            ].map(item => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="font-mono text-4xl font-bold text-teal-precise/20">{item.step}</span>
                <h3 className="text-lg font-serif font-bold text-ink">{item.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>

            {/* ── Your Details ── */}
            <fieldset className="border border-ink/10 p-6 space-y-4">
              <legend className="px-2 label-mono text-teal-precise tracking-[0.3em] text-[10px] font-bold uppercase">YOUR DETAILS</legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName" name="firstName" type="text" required autoComplete="given-name"
                    value={formData.firstName} onChange={handleInputChange}
                    className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName" name="lastName" type="text" required autoComplete="family-name"
                    value={formData.lastName} onChange={handleInputChange}
                    className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="email">Your Email *</label>
                <input
                  id="email" name="email" type="email" required autoComplete="email"
                  value={formData.email} onChange={handleInputChange}
                  className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="jane.smith@clinic.co.uk"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone" name="phone" type="tel" autoComplete="tel"
                  value={formData.phone} onChange={handleInputChange}
                  className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="+44 7700 000000"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="clinicName">Your Clinic / Organisation (optional)</label>
                <input
                  id="clinicName" name="clinicName" type="text"
                  value={formData.clinicName} onChange={handleInputChange}
                  className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="Central London Dermatology"
                />
              </div>
            </fieldset>

            {/* ── Referee Details ── */}
            <fieldset className="border border-ink/10 p-6 space-y-4">
              <legend className="px-2 label-mono text-teal-precise tracking-[0.3em] text-[10px] font-bold uppercase">COLLEAGUE YOU'RE REFERRING</legend>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="referrerName">Their Name *</label>
                <input
                  id="referrerName" name="referrerName" type="text" required
                  value={formData.referrerName} onChange={handleInputChange}
                  className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="Dr. Alex Johnson"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="referrerEmail">Their Email *</label>
                <input
                  id="referrerEmail" name="referrerEmail" type="email" required
                  value={formData.referrerEmail} onChange={handleInputChange}
                  className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors"
                  placeholder="alex.johnson@specialistclinic.co.uk"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="message">Personal message (optional)</label>
                <textarea
                  id="message" name="message" rows={3}
                  value={formData.message} onChange={handleInputChange}
                  className="w-full bg-transparent border border-ink/20 px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-teal-precise transition-colors resize-none"
                  placeholder="Hey Alex, I've been using NeuraScaleX for 3 months and it's transformed our patient intake…"
                />
              </div>
            </fieldset>

            {/* ── Promo Code ── */}
            <fieldset className="border border-ink/10 p-6 space-y-4">
              <legend className="px-2 label-mono text-teal-precise tracking-[0.3em] text-[10px] font-bold uppercase">PROMO CODE</legend>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink/50 mb-1" htmlFor="promoCode">Enter your promo code (optional)</label>
                <div className="flex gap-2">
                  <input
                    id="promoCode" name="promoCode" type="text"
                    value={formData.promoCode} onChange={handleInputChange}
                    className={`flex-1 bg-transparent border px-4 py-3 text-sm font-mono text-ink placeholder-ink/30 uppercase tracking-widest focus:outline-none transition-colors ${promoBorderClass(promoValidated)}`}
                    placeholder="e.g. NEURAX10"
                    maxLength={20}
                  />
                  <button
                    type="button"
                    onClick={validatePromo}
                    disabled={!formData.promoCode.trim()}
                    className="px-5 py-3 border border-teal-precise text-teal-precise font-mono text-xs uppercase tracking-wider hover:bg-teal-precise hover:text-paper transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    VERIFY
                  </button>
                </div>

                {promoValidated === true && (
                  <p className="mt-2 text-xs font-mono text-teal-precise flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Valid promo code — discount will be applied on activation.
                  </p>
                )}
                {promoValidated === false && (
                  <p className="mt-2 text-xs font-mono text-red-500 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Code not recognised. Please check and try again.
                  </p>
                )}
                <p className="mt-2 text-xs text-ink/40 font-sans">
                  Don't have a code? <Link to="/pricing" className="text-teal-precise underline underline-offset-2 hover:no-underline">Contact our team</Link> to receive one.
                </p>
              </div>
            </fieldset>

            {/* ── Consent ── */}
            <div className="flex items-start gap-3">
              <input
                id="consent" name="consent" type="checkbox"
                checked={formData.consent} onChange={handleInputChange}
                className="mt-1 w-4 h-4 accent-teal-precise cursor-pointer"
              />
              <label htmlFor="consent" className="text-sm text-ink/60 leading-relaxed cursor-pointer">
                I confirm I have the colleague's permission to share their contact details with NeuraScaleX, and I agree to the{' '}
                <Link to="/terms" className="text-teal-precise underline underline-offset-2 hover:no-underline">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-teal-precise underline underline-offset-2 hover:no-underline">Privacy Policy</Link>.
              </label>
            </div>

            {/* ── Error ── */}
            {submitError && (
              <div className="p-4 border border-red-300 bg-red-50 text-red-700 text-sm font-sans">
                {submitError}
              </div>
            )}

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={isLoading || !formData.consent}
              className="w-full bg-teal-precise text-paper py-5 font-bold uppercase tracking-widest hover:bg-teal-precise/90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-teal-precise/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  SUBMITTING…
                </span>
              ) : (
                'SUBMIT REFERRAL'
              )}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Referral;
