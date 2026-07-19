
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ExampleTwin {
  title: string;
  specialty: string;
  goodAt: string;
  prompts: string[];
  boundaryTest: string;
  routing: string;
}

const Examples: React.FC = () => {
  const [selectedTwin, setSelectedTwin] = useState<ExampleTwin | null>(null);
  const [showRefusal, setShowRefusal] = useState<string | null>(null);

  const exampleTwins: ExampleTwin[] = [
    {
      title: "Pain Specialist Twin",
      specialty: "Pain Medicine / Chronic Pain Clinic",
      goodAt: "Explaining pathways, preparing patients, programme orientation",
      prompts: [
        "What should I expect in an initial consultation?",
        "Do you offer a membership or programme?",
        "What’s the difference between persistent pain and injury pain?"
      ],
      boundaryTest: "“What painkiller should I take?” (Refuses medical prescription and routes to consultation)",
      routing: "Consultation Booking / Pain Management Programme"
    },
    {
      title: "Lifestyle & Burnout Twin",
      specialty: "Lifestyle Medicine / Burnout & Stress",
      goodAt: "Education, framework explanations, next-step routing",
      prompts: [
        "What does a burnout reset involve?",
        "Is this right for me if I’m working long hours?",
        "How do you structure your programme?"
      ],
      boundaryTest: "“Can you diagnose my burnout?” (Refuses clinical diagnosis and suggests professional assessment)",
      routing: "Discovery Call / Burnout Reset Programme"
    },
    {
      title: "Women’s Health Twin",
      specialty: "Women’s Health / ADHD & Hormonal Health",
      goodAt: "Common questions, service orientation, resource guidance",
      prompts: [
        "How do you support women with ADHD and stress?",
        "What are the first steps to work with you?",
        "Do you offer consultations or programmes?"
      ],
      boundaryTest: "“Should I start medication?” (Refuses pharmacological advice and routes to clinician)",
      routing: "New Patient Intake / Resource Library"
    },
    {
      title: "Integrative GP Twin",
      specialty: "Primary Care / Integrative GP",
      goodAt: "Explaining services, triage guidance, preparation",
      prompts: [
        "What can I book a private GP appointment for?",
        "How should I prepare for a consultation?",
        "Do you offer metabolic health / longevity support?"
      ],
      boundaryTest: "“What’s my diagnosis?” (Refuses remote diagnosis and directs to in-person exam)",
      routing: "Clinic Appointment / Longevity Screen"
    },
    {
      title: "Mental Health Education Twin",
      specialty: "Mental Health / Digital Psychiatry (Non-clinical education)",
      goodAt: "Psychoeducation, signposting, scope-safe guidance",
      prompts: [
        "What are early signs of stress overload?",
        "What should I do if I feel I’m not coping?",
        "What does your programme help with?"
      ],
      boundaryTest: "“Am I depressed?” (Refuses clinical assessment and signposts to crisis lines or intake)",
      routing: "Waitlist / Educational Webinar"
    },
    {
      title: "Clinic Front Desk Twin",
      specialty: "Clinic / Multi-service Practice (Front Desk Twin)",
      goodAt: "Logistics, FAQs, routing to the right service",
      prompts: [
        "How do I book?",
        "Which service is right for my situation?",
        "Do you offer programmes or memberships?"
      ],
      boundaryTest: "“What treatment should I choose?” (Refuses clinical selection and routes to Triage)",
      routing: "Triage Call / Direct Booking"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-paper min-h-screen pb-20">
      {/* HERO */}
      <section className="bg-paper py-24 text-ink relative overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl serif mb-10 leading-tight">Experience a Clinician Digital Twin.</h1>
          <p className="text-xl md:text-2xl text-ink/60 mb-14 font-light leading-relaxed max-w-4xl mx-auto font-serif italic">
            These examples show how a governed Twin answers routine questions from approved sources, stays inside boundaries, and routes safely—without giving clinical advice.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-ink/65 text-[10px] font-bold uppercase tracking-widest mb-16 label-mono">
            <div>Approved sources only</div>
            <div className="text-teal-precise opacity-100">•</div>
            <div>Non-clinical by design</div>
            <div className="text-teal-precise opacity-100">•</div>
            <div>Designed to know where to stop</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/free-trial" className="bg-teal-precise text-paper px-10 py-5 rounded-none text-xs font-bold uppercase tracking-widest shadow-xl shadow-teal-precise/20 label-mono">
              Start Free Trial
            </Link>
            <Link to="/demo" className="text-ink border-b border-ink/20 pb-1 text-xs font-bold uppercase tracking-widest label-mono hover:border-teal-precise transition-colors">
              Request a Demo
            </Link>
          </div>
          <p className="mt-8 text-[10px] text-ink/55 uppercase tracking-widest label-mono font-bold">Not medical advice.</p>
        </div>
      </section>

      {/* SECTION: What you’re about to see */}
      <section className="py-24 bg-paper border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl serif text-teal-precise mb-8">The point isn’t “smart AI.” <br/><span className="italic italic-moment text-ink">It’s governed identity.</span></h2>
            <p className="text-lg text-ink/60 mb-12 font-serif italic">Each example is designed to demonstrate three things:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-ink mb-4 label-mono opacity-100">Voice</h3>
                <p className="text-sm text-ink/50 leading-relaxed font-serif italic">It sounds like the clinician—mirroring professional tone and specific vocabulary.</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-ink mb-4 label-mono opacity-100">Boundaries</h3>
                <p className="text-sm text-ink/50 leading-relaxed font-serif italic">It refuses diagnosis/treatment advice the moment a conversation drifts out of scope.</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-ink mb-4 label-mono opacity-100">Routing</h3>
                <p className="text-sm text-ink/50 leading-relaxed font-serif italic">It guides users to the right next step—booking, programmes, or resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Choose an example to try */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl serif text-ink mb-6 italic italic-moment">Pick a specialty. Ask 2–3 real questions.</h2>
          <p className="text-lg text-ink/60 font-serif italic">Try one of the prompts below, then push it outside scope to see how it refuses safely.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exampleTwins.map((twin, i) => (
            <div key={i} className="bg-paper border border-ink/5 p-10 flex flex-col h-full rounded-none hover:shadow-2xl hover:shadow-teal-precise/5 transition-all group relative">
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-precise mb-2 label-mono opacity-100">{twin.specialty}</span>
              <h3 className="text-2xl serif text-ink mb-6">{twin.title}</h3>
              
              <div className="mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-ink/55 mb-3 label-mono">Best for:</h4>
                <p className="text-sm text-ink/70 italic leading-relaxed font-serif">{twin.goodAt}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-ink/55 label-mono">Try asking:</h4>
                {twin.prompts.map((p, idx) => (
                  <div key={idx} className="text-xs bg-teal-precise/5 p-3 rounded-none text-ink/80 border-l-2 border-teal-precise/20 font-serif italic">
                    "{p}"
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => setSelectedTwin(twin)}
                  className="w-full bg-teal-precise text-paper py-5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all label-mono shadow-lg shadow-teal-precise/10"
                >
                  Try this Twin
                </button>
                <button 
                  onClick={() => setShowRefusal(twin.boundaryTest)}
                  className="w-full border border-ink/20 text-ink py-4 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono"
                >
                  See what it can't do
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Watch for three signals. */}
      <section className="py-24 bg-teal-precise/5 border-y border-teal-precise/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl serif text-ink mb-16 text-center italic italic-moment">Watch for three signals.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-paper p-12 rounded-none shadow-sm border border-teal-precise/10">
              <h3 className="text-xl serif text-teal-precise mb-6 italic">Accuracy from approved sources</h3>
              <p className="text-sm text-ink/60 leading-relaxed font-serif italic">It cites your material, not guesses from the public web. If you haven't written about it, the Twin won't speak on it.</p>
            </div>
            <div className="bg-paper p-12 rounded-none shadow-sm border border-teal-precise/10">
              <h3 className="text-xl serif text-teal-precise mb-6 italic">Safe refusals</h3>
              <p className="text-sm text-ink/60 leading-relaxed font-serif italic">It clearly says what it can’t do. No "confident hallucination"—just disciplined, non-clinical boundaries.</p>
            </div>
            <div className="bg-paper p-12 rounded-none shadow-sm border border-teal-precise/10">
              <h3 className="text-xl serif text-teal-precise mb-6 italic">Helpful routing</h3>
              <p className="text-sm text-ink/60 leading-relaxed font-serif italic">It moves people forward without “salesy” behaviour—guiding them toward the professional help they need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Your Twin is built... */}
      <section className="py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl serif text-teal-precise mb-10 italic italic-moment">Your Twin is built from your material—nothing else.</h2>
          <p className="text-lg text-ink/60 mb-12 font-serif italic leading-relaxed">
            Start a free trial and upload approved sources in your dashboard. Our onboarding team works with you to make it live in 7 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/free-trial" className="bg-teal-precise text-paper px-10 py-5 rounded-none text-xs font-bold uppercase tracking-widest shadow-xl shadow-teal-precise/20 label-mono">
              Start Free Trial (30 days, no card)
            </Link>
            <Link to="/demo" className="text-ink font-bold uppercase tracking-widest text-xs border-b border-ink/20 pb-1 hover:border-teal-precise transition-colors label-mono">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: Optional Safety */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Non-clinical by design</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6">
            These examples are not medical advice. They demonstrate education, orientation, and safe routing—within strict boundaries.
          </p>
          <Link to="/safety" className="text-teal-800 font-bold text-xs uppercase tracking-widest border-b border-teal-800/20 pb-1">
            Read the Safety Approach →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-paper text-ink text-center relative overflow-hidden border-t border-ink/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #001A33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl serif mb-12 italic italic-moment">Experience it. Then decide.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
            <Link to="/free-trial" className="w-full sm:w-auto bg-teal-precise text-paper px-12 py-6 rounded-none text-xs font-bold uppercase tracking-widest shadow-2xl shadow-teal-precise/20 label-mono">
              Start Free Trial
            </Link>
            <Link to="/demo" className="w-full sm:w-auto border border-ink/20 text-ink px-12 py-6 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-teal-precise hover:text-paper hover:border-teal-precise transition-all label-mono">
              Request a Demo
            </Link>
          </div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-ink/65 label-mono">
            Live in 7 days. Approved sources only. Designed to know where to stop.
          </p>
        </div>
      </section>

      {/* MODALS / OVERLAYS */}
      {selectedTwin && (
        <div className="fixed inset-0 bg-ink/90 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-paper w-full max-w-lg rounded-none p-12 relative border border-teal-precise/20">
            <button onClick={() => setSelectedTwin(null)} className="absolute top-6 right-6 text-ink/60 hover:text-ink transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-3xl serif text-teal-precise mb-6 font-bold">{selectedTwin.title} Assistant</h3>
            <div className="bg-teal-precise/5 p-6 rounded-none mb-8 border border-teal-precise/10">
              <p className="text-xs text-teal-precise opacity-70 italic mb-4 font-serif">"Try sending one of the prompts below..."</p>
              <div className="space-y-3">
                {selectedTwin.prompts.map((p, i) => (
                  <button key={i} className="block w-full text-left text-xs bg-paper p-3 border border-ink/5 rounded-none hover:border-teal-precise transition-all text-ink font-serif italic">
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-ink/65 leading-relaxed italic font-serif">
              * This interactive sandbox is fueled by real clinical knowledge repositories. 
              The actual deployment will be embedded directly on your site.
            </p>
          </div>
        </div>
      )}

      {showRefusal && (
        <div className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-in zoom-in-95 duration-200">
          <div className="bg-paper w-full max-w-md rounded-none p-10 relative border-t-4 border-teal-precise">
            <button onClick={() => setShowRefusal(null)} className="absolute top-6 right-6 text-ink/60 hover:text-ink">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-teal-precise mb-6 label-mono opacity-100">Safe Refusal Example</h3>
            <div className="bg-teal-precise/5 p-6 rounded-none border border-teal-precise/10 font-mono text-[10px] text-ink mb-6">
              <span className="text-ink/60 block mb-2 label-mono">Patient Query:</span>
              <p className="mb-4 font-serif italic">"{showRefusal.split('(')[0].trim()}"</p>
              <span className="text-teal-precise block mb-2 label-mono opacity-100">Digital Twin Response:</span>
              <p className="italic font-serif">"I cannot provide clinical diagnosis or treatment advice. As a governed Digital Twin, my role is to provide education and orientation. To address this specific clinical concern, please book a direct consultation with Dr. [Name] here: [Link]"</p>
            </div>
            <p className="text-[10px] text-ink/65 font-serif italic">
              The Twin detects the clinical liability and immediately switches to its refusal protocol.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Examples;
