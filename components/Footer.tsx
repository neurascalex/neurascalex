
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const LogoMark = () => (
    <div className="flex items-center gap-3 mb-6">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="#00D2FF" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 50 + 35 * Math.cos(rad);
          const y2 = 50 + 35 * Math.sin(rad);
          return (
            <React.Fragment key={angle}>
              <line x1="50" y1="50" x2={x2} y2={y2} stroke="#00D2FF" strokeWidth="6" strokeLinecap="round" />
              <circle cx={x2} cy={y2} r="6" fill="#00D2FF" />
            </React.Fragment>
          );
        })}
      </svg>
      <span className="text-3xl font-bold serif tracking-tight text-white">NeuraScaleX</span>
    </div>
  );

  return (
    <footer className="bg-navy-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-16 border-b border-white/5 pb-20 mb-12">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <LogoMark />
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-light text-sm">
              Architecting Clinical Scale. Non-clinical. Not medical advice. Built from clinician-approved sources only. 
              Governed end-to-end to protect professional integrity.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/company/neurascalex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:underline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-8">Platform</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><Link to="/platform" className="hover:text-white transition-colors">Digital Twin</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">The Protocol</Link></li>
              <li><Link to="/examples" className="hover:text-white transition-colors">Case Examples</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Plans & Fees</Link></li>
              <li><Link to="/safety" className="hover:text-white transition-colors">Safety Promise</Link></li>
            </ul>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-8">Resources</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors">Request Demo</Link></li>
              <li><Link to="/free-trial" className="hover:text-white transition-colors">Free Trial</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal / Governance (UX Improvement) */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-8">Governance</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy & GDPR</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><span className="text-gray-600 block pt-2">ISO 27001 Ready</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-0">
            <p>© {new Date().getFullYear()} NeuraScaleX. All Rights Reserved.</p>
            <p className="hidden md:block">Built for Clinical Integrity.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p>
              Developed by{' '}
              <a 
                href="https://hrdigitalmedia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors underline underline-offset-4 decoration-white/10"
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
