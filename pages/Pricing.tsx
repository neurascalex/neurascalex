
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-warm-white min-h-screen">
      {/* HERO */}
      <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-10 leading-tight">Simple pricing for governed clinical scale.</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-4xl mx-auto">
            Start with a 30-day free trial (no card). If it’s a fit, move to a monthly plan that keeps your Clinician Digital Twin live, safe, and continuously improved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-16">
            <div>Approved sources only</div>
            <div className="text-gold-500">•</div>
            <div>Non-clinical by design</div>
            <div className="text-gold-500">•</div>
            <div>Designed to know where to stop</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/free-trial" className="bg-gold-500 text-navy-950 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-xl">
              Start Free Trial
            </Link>
            <Link to="/demo" className="text-white border-b border-white/50 pb-1 text-sm font-bold uppercase tracking-widest">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 30-Day Free Trial Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl serif text-teal-800 mb-8">Start free. Go live in 7 days.</h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Your free trial includes guided onboarding so you can test your Twin privately, confirm boundaries, and deploy confidently.
            </p>
            <Link to="/free-trial" className="inline-block bg-teal-800 text-gold-500 px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest">
              Start Free Trial
            </Link>
            <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest italic">No credit card required.</p>
          </div>
          <div className="bg-softgreen p-12 rounded-sm border border-teal-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-8">Included in the trial:</h3>
            <ul className="space-y-6">
              {[
                "Dashboard access + private Twin link",
                "Approved-source ingestion (you upload, we guide)",
                "Voice + boundaries + refusal behaviour setup",
                "Safe routing (booking, enquiry, programmes/resources)",
                "Website deployment support (embed/link/QR)"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm font-medium text-navy-800">
                  <span className="text-gold-500 mr-4 font-bold">/</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PLANS (3 cards) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 - Solo */}
          <div className="bg-white border border-gray-100 p-12 flex flex-col h-full rounded-sm hover:shadow-2xl transition-all group">
            <h3 className="text-3xl serif text-navy-900 mb-2">Solo</h3>
            <p className="text-gold-600 text-2xl font-serif mb-6 italic">£99 <span className="text-sm text-gray-400 not-italic">/ month</span></p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Best for: Individual clinician / single specialist</p>
            <div className="space-y-4 mb-12 flex-grow">
              <p className="text-xs font-bold uppercase tracking-widest text-navy-900">Includes:</p>
              {[
                "1 Clinician Digital Twin (live)",
                "Approved sources knowledge base",
                "Boundaries + refusal controls",
                "Safe routing to your next steps",
                "Standard support"
              ].map((f, i) => (
                <div key={i} className="flex items-start text-sm text-gray-500">
                  <span className="text-teal-800 mr-3">✔</span> {f}
                </div>
              ))}
            </div>
            <Link to="/free-trial" className="w-full text-center bg-navy-800 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-navy-950 transition-all">
              Start Free Trial
            </Link>
          </div>

          {/* Plan 2 - Pro */}
          <div className="bg-navy-900 border border-navy-800 p-12 flex flex-col h-full rounded-sm shadow-xl transform scale-105 relative z-10 text-white">
            <div className="absolute top-0 right-12 bg-gold-500 text-navy-950 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-b-sm">Most Popular</div>
            <h3 className="text-3xl serif mb-2 text-gold-500">Pro</h3>
            <p className="text-white text-2xl font-serif mb-6 italic">£299 <span className="text-sm text-gray-400 not-italic">/ month</span></p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Best for: Clinician with programmes / high inbound volume</p>
            <div className="space-y-4 mb-12 flex-grow">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-500">Everything in Solo, plus:</p>
              {[
                "Programme / membership orientation module",
                "Enhanced routing paths (multiple CTAs)",
                "Quarterly optimisation review (analysis of patient needs)"
              ].map((f, i) => (
                <div key={i} className="flex items-start text-sm text-gray-300">
                  <span className="text-gold-500 mr-3">✔</span> {f}
                </div>
              ))}
            </div>
            <Link to="/demo" className="w-full text-center bg-gold-500 text-navy-950 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold-600 transition-all">
              Request a Demo
            </Link>
          </div>

          {/* Plan 3 - Clinic */}
          <div className="bg-white border border-gray-100 p-12 flex flex-col h-full rounded-sm hover:shadow-2xl transition-all group">
            <h3 className="text-3xl serif text-navy-900 mb-2">Clinic</h3>
            <p className="text-teal-800 text-2xl font-serif mb-6 italic">From £499 <span className="text-sm text-gray-400 not-italic">/ month</span></p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Best for: Multi-service clinics / centres</p>
            <div className="space-y-4 mb-12 flex-grow">
              <p className="text-xs font-bold uppercase tracking-widest text-navy-900">Includes:</p>
              {[
                "Multi-service routing",
                "Multiple team stakeholders (admin + clinician)",
                "Deployment support across multiple pages",
                "Custom governance configuration"
              ].map((f, i) => (
                <div key={i} className="flex items-start text-sm text-gray-500">
                  <span className="text-teal-800 mr-3">✔</span> {f}
                </div>
              ))}
            </div>
            <Link to="/demo" className="w-full text-center border border-navy-800 text-navy-800 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-navy-50 transition-all">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Setup */}
      <section className="py-24 bg-softgreen border-y border-teal-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl serif text-navy-800 mb-10">Setup is included during early rollout.</h2>
          <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
            For the first cohort, we include onboarding and deployment support to ensure the Twin goes live safely and accurately.
          </p>
          <div className="bg-white p-6 inline-block rounded-sm border border-teal-800/10 shadow-sm">
             <p className="text-sm font-bold uppercase tracking-widest text-navy-900">Setup: <span className="text-teal-800">Included for early adopters (limited cohort)</span></p>
          </div>
        </div>
      </section>

      {/* SECTION: What’s included in every paid plan */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl serif text-teal-800 mb-12">The non-negotiables (included).</h2>
            <ul className="space-y-6">
              {[
                "Built only from your approved sources",
                "Non-clinical by design (no diagnosis/treatment advice)",
                "Voice + boundaries + refusal behaviour maintained",
                "Safe routing to booking/programmes/resources",
                "Secure hosting + continuous improvements"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm font-medium text-navy-800">
                  <span className="text-gold-500 mr-4 font-bold">/</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">
              This is governance-first, not “AI features-first.”
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif text-red-800 mb-12">What we don’t do.</h2>
            <ul className="space-y-6">
              {[
                "No diagnosis or prescribing",
                "No individual treatment plans",
                "No EHR integration in Phase 1",
                "No open-internet answering"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm font-medium text-gray-600">
                  <span className="text-red-500 mr-4 font-bold">×</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">
              Clear scope protects trust.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl serif text-navy-800 mb-16 text-center">Pricing & Governance FAQ</h2>
          <div className="space-y-12">
            {[
              {
                q: "Why is there a monthly fee?",
                a: "You’re paying for secure hosting, governance controls, and ongoing safety maintenance—so the Twin remains trustworthy and up-to-date with your latest material."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel anytime. Your Twin will be taken offline immediately and your content remains under your control at all times."
              },
              {
                q: "Do you offer annual pricing?",
                a: "Yes, available after the trial period. Annual plans include a 20% reduction in monthly costs."
              },
              {
                q: "Can my assistant manage this?",
                a: "Yes. We can onboard your assistant or practice manager to handle material uploads and routing updates while you maintain oversight of the boundaries."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-10">
                <h4 className="text-lg serif text-navy-900 mb-4">{faq.q}</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gold-500 text-navy-950 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl serif mb-12">Start free. Prove it safely. Then scale.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-navy-950 text-gold-500 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest shadow-2xl">
              Start Free Trial (30 days, no card)
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border-2 border-navy-950 px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-widest">
              Request a Demo
            </Link>
          </div>
          <p className="text-xs uppercase tracking-widest font-bold opacity-70">
            Live in 7 days. Approved sources only. Designed to know where to stop.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
