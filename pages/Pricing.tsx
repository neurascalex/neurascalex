
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Essentials",
      price: "399",
      description: "For individual clinicians starting private practice",
      features: [
        "AI Clinic Page with custom URL",
        "Website widget option",
        "Lead capture & basic analytics",
        "Knowledge Center setup",
        "Email support",
        "Up to 500 conversations/month"
      ],
      cta: "Choose plan",
      highlight: false
    },
    {
      name: "Professional",
      price: "799",
      description: "For established single-practitioner practices. Most popular.",
      features: [
        "Everything in Essentials",
        "Full Intelligence Dashboard",
        "Weekly intelligence reports",
        "Content gap analysis",
        "Booking intent signals",
        "Priority support",
        "Up to 2,000 conversations/month",
        "Quarterly business review"
      ],
      cta: "Choose plan",
      highlight: true
    },
    {
      name: "Practice",
      price: "1,499",
      description: "For multi-practitioner clinics",
      features: [
        "Everything in Professional",
        "Multi-clinician deployment",
        "White-label options",
        "EHR integration advisory",
        "Practice manager dashboard",
        "Dedicated success manager",
        "Unlimited conversations",
        "Monthly strategy session"
      ],
      cta: "Choose plan",
      highlight: false
    }
  ];

  const enterpriseFeatures = [
    "Multi-region deployment",
    "Single sign-on (SSO)",
    "Custom intelligence models",
    "API access",
    "Dedicated partner manager"
  ];

  return (
    <div className="bg-paper min-h-screen pt-24 font-sans selection:bg-teal-precise selection:text-paper">
      
      {/* Hero Section */}
      <section className="py-16 bg-paper text-ink relative overflow-hidden border-b border-ink/5">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-mono text-teal-precise mb-6 block font-bold uppercase text-[10px] tracking-[0.3em] opacity-100">Pricing</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-[1.05] tracking-tight">
              One platform. <br />
              <span className="text-teal-precise italic">Four ways to engage.</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-light max-w-3xl mx-auto leading-relaxed font-serif italic italic-moment">
              Pricing scales with your practice. Setup fee £1,500, waived for annual prepay or Founder's Cohort members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col h-full border ${plan.highlight ? 'border-teal-precise bg-teal-precise/5 text-ink shadow-2xl relative scale-[1.02] z-10' : 'border-ink/10 bg-paper text-ink'} p-10 md:p-12 transition-all duration-500`}
              >
                {plan.highlight && (
                   <div className="absolute top-0 right-10 -translate-y-1/2 bg-teal-precise text-paper px-4 py-1.5 label-mono text-[9px] font-bold uppercase tracking-widest opacity-100">MOST POPULAR</div>
                )}
                
                <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.highlight ? 'text-teal-precise' : 'text-ink'}`}>{plan.name}</h3>
                <p className={`text-sm mb-10 font-serif italic min-h-[40px] ${plan.highlight ? 'text-ink/75' : 'text-ink/70'}`}>{plan.description}</p>
                
                <div className="mb-12">
                   <div className="flex items-baseline">
                      <span className="text-5xl font-serif font-bold tracking-tighter">£{plan.price}</span>
                      <span className={`text-sm ml-2 label-mono opacity-40 uppercase font-bold`}>/month</span>
                   </div>
                </div>

                 <div className="flex-grow space-y-5 mb-12">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                       <span className={`w-5 h-5 mr-4 flex-shrink-0 flex items-center justify-center text-[10px] ${plan.highlight ? 'bg-teal-precise text-paper' : 'bg-teal-precise/10 text-teal-precise'}`}>✓</span>
                       <span className={`text-sm font-serif italic opacity-80 leading-relaxed`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/free-trial" 
                  className={`w-full py-5 text-center text-xs font-bold uppercase tracking-[0.2em] transition-all label-mono opacity-100 ${
                    plan.highlight 
                      ? 'bg-teal-precise text-paper hover:brightness-110 shadow-lg shadow-teal-precise/20' 
                      : 'bg-ink text-paper hover:bg-teal-precise'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise Option */}
          <div className="mt-20 border border-ink/10 bg-paper p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 group shadow-sm">
              <div className="max-w-2xl">
                 <span className="label-mono text-teal-precise mb-4 block font-bold uppercase text-[10px] tracking-[0.3em] opacity-100">The Ultimate Scale</span>
                 <h3 className="text-4xl font-serif text-ink mb-6">Enterprise</h3>
                 <p className="text-xl text-ink/60 font-serif italic leading-relaxed mb-10">
                   For clinic groups, platforms, and health systems. Custom deployment, intelligence licensing, and strategic partnership terms.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                    {enterpriseFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-5 h-5 bg-teal-precise text-paper flex items-center justify-center text-[10px] mr-3 flex-shrink-0">✓</span>
                        <span className="text-xs label-mono font-bold uppercase tracking-widest text-ink/65">{feature}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="text-center lg:text-right w-full lg:w-auto p-10 bg-teal-precise/5 border border-teal-precise/10">
                 <div className="mb-10">
                    <span className="text-sm label-mono opacity-40 uppercase font-bold block mb-4">Pricing</span>
                    <span className="text-7xl font-serif font-bold text-ink tracking-tighter italic">Custom</span>
                 </div>
                 <Link to="/contact" className="inline-block w-full bg-teal-precise text-paper px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all label-mono opacity-100 shadow-xl shadow-teal-precise/20 group-hover:translate-y-[-4px]">
                    Contact sales
                 </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-16 border-y border-ink/5 italic font-serif text-center bg-paper relative">
         <div className="max-w-4xl mx-auto px-6">
            <span className="text-6xl text-teal-precise opacity-20 block mb-6 leading-none">“</span>
            <p className="text-2xl md:text-3xl text-ink/80 leading-relaxed italic-moment font-light">
              We aren't just buying another software tool; we're investing in the <span className="text-ink font-bold">clinical intelligence</span> that will define the next decade of our practice.
            </p>
            <div className="mt-10">
               <p className="label-mono text-ink font-bold uppercase tracking-[0.2em] text-[11px]">Founding Partner, Harley Street Practice</p>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-paper text-ink text-center border-t border-ink/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-12">Start your pilot today.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Link to="/free-trial" className="w-full sm:w-auto bg-teal-precise text-paper px-12 py-6 font-bold uppercase tracking-widest shadow-2xl shadow-teal-precise/20 hover:brightness-110 transition-all label-mono opacity-100 text-xs">
              Apply for 30-Day Pilot
            </Link>
          </div>
          <p className="label-mono text-ink/65 opacity-100 text-[10px] tracking-[0.3em] font-bold uppercase">
            No credit card required. Live in 14 days. Clinician-led governance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

