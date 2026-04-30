
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Specialist Hub', path: '/specialist-hub' },
    { name: 'About', path: '/about' },
  ];

  const Logo = () => (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="#0D6E6E" />
        {/* Radiating lines with terminals */}
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
      <span className="text-2xl font-bold tracking-tight text-ink font-serif hidden sm:block">
        NeuraScaleX
      </span>
    </div>
  );

  return (
    <nav className="bg-paper/80 backdrop-blur-md border-b border-ink/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-ink">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-teal-precise' : 'hover:text-teal-precise opacity-70 hover:opacity-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-6 ml-4">
              <Link
                to="/free-trial"
                className="btn-primary rounded-none text-xs uppercase tracking-widest"
              >
                Start Free Trial
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-paper border-b border-ink/5 py-6 px-8 space-y-5 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-ink"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-ink/5 flex flex-col space-y-4">
            <Link
              to="/free-trial"
              onClick={() => setIsOpen(false)}
              className="btn-primary rounded-none text-center text-xs uppercase tracking-widest"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
