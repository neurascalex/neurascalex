
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const LogoMark = () => (
    <div className="flex items-center gap-3 mb-6">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="#0D6E6E" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 50 + 35 * Math.cos(rad);
          const y2 = 50 + 35 * Math.sin(rad);
          return (
            <React.Fragment key={angle}>
              <line x1="50" y1="50" x2={x2} y2={y2} stroke="#0D6E6E" strokeWidth="6" strokeLinecap="round" />
              <circle cx={x2} cy={y2} r="6" fill="#0D6E6E" />
            </React.Fragment>
          );
        })}
      </svg>
      <span className="text-3xl font-bold font-serif tracking-tight text-ink">NeuraScaleX</span>
    </div>
  );

  return (
    <footer className="bg-paper text-ink pt-16 pb-8 border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-16 border-b border-ink/5 pb-12 mb-8">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <LogoMark />
            <div className="text-xl md:text-2xl text-ink font-serif italic italic-moment leading-tight max-w-sm mb-10">
              The AI front door for UK specialist care. <br />
              <span className="text-sm font-sans not-italic text-ink/50 mt-4 block leading-relaxed font-medium uppercase tracking-widest">
                Built with clinicians. Deployed in 14 days. Governed from day one.
              </span>
            </div>
            <div className="flex items-center space-x-10">
              <a 
                href="https://www.linkedin.com/company/neurascalex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-ink/40 hover:text-teal-precise transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="label-mono text-[10px] tracking-[0.2em] uppercase font-bold group-hover:underline">LinkedIn</span>
              </a>
              <a 
                href="https://x.com/neurascalex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-ink/40 hover:text-teal-precise transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="label-mono text-[10px] tracking-[0.2em] uppercase font-bold group-hover:underline">Follow us</span>
              </a>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h3 className="label-mono text-teal-precise mb-8 font-bold uppercase text-[10px] tracking-[0.3em]">PLATFORM</h3>
            <ul className="space-y-4 text-ink font-serif italic italic-moment text-base">
              <li><Link to="/platform" className="hover:text-teal-precise transition-colors">AI Clinic Page</Link></li>
              <li><Link to="/platform" className="hover:text-teal-precise transition-colors">Intelligence Dashboard</Link></li>
              <li><Link to="/platform" className="hover:text-teal-precise transition-colors">Knowledge Center</Link></li>
              <li><Link to="/specialist-hub" className="hover:text-teal-precise transition-colors">Specialist Hub</Link></li>
            </ul>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 className="label-mono text-teal-precise mb-8 font-bold uppercase text-[10px] tracking-[0.3em]">COMPANY</h3>
            <ul className="space-y-4 text-ink font-serif italic italic-moment text-base">
              <li><Link to="/about" className="hover:text-teal-precise transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-teal-precise transition-colors">Case studies</Link></li>
              <li><Link to="/pricing" className="hover:text-teal-precise transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-teal-precise transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Navigation */}
          <div>
            <h3 className="label-mono text-teal-precise mb-8 font-bold uppercase text-[10px] tracking-[0.3em]">RESOURCES</h3>
            <ul className="space-y-4 text-ink font-serif italic italic-moment text-base">
              <li><Link to="/free-trial" className="hover:text-teal-precise transition-colors">Free Trial</Link></li>
              <li><Link to="/demo" className="hover:text-teal-precise transition-colors">Book a Demo</Link></li>
              <li><Link to="/safety" className="hover:text-teal-precise transition-colors">Safety Promise</Link></li>
              <li><Link to="/privacy" className="hover:text-teal-precise transition-colors">Privacy & GDPR</Link></li>
              <li><Link to="/terms" className="hover:text-teal-precise transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center label-mono text-[9px] tracking-widest uppercase font-bold opacity-40">
          <div className="text-left">
            <p>© 2026 NeuraScaleX. All rights reserved.</p>
          </div>
          <div className="text-center">
            <p className="not-italic">Built with clinicians. Built for the calendars they deserve.</p>
          </div>
          <div className="text-right">
            <p>
              Developed by{' '}
              <a 
                href="https://hrdigitalmedia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-precise transition-colors underline underline-offset-4 decoration-ink/10"
              >
                HR Digital Media
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
