
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Examples', path: '/examples' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Safety', path: '/safety' },
    { name: 'About', path: '/about' },
  ];

  const Logo = () => (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="#00D2FF" />
        {/* Radiating lines with terminals */}
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
      <span className="text-2xl font-bold tracking-tight text-navy-800 serif hidden sm:block">
        NeuraScaleX
      </span>
    </div>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-teal-800' : 'text-navy-800 hover:text-teal-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <Link
                to="/demo"
                className="text-sm font-semibold text-navy-800 hover:text-teal-800 transition-colors"
              >
                Demo
              </Link>
              <Link
                to="/free-trial"
                className="bg-gold-500 text-navy-950 px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-gold-600 transition-all shadow-md"
              >
                Free Trial
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-800 p-2"
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
        <div className="lg:hidden bg-white border-b border-gray-100 py-6 px-8 space-y-5 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-navy-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-50 flex flex-col space-y-4">
            <Link
              to="/demo"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-navy-800"
            >
              Request a Demo
            </Link>
            <Link
              to="/free-trial"
              onClick={() => setIsOpen(false)}
              className="bg-gold-500 text-navy-950 px-6 py-4 rounded-sm text-center font-bold"
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
