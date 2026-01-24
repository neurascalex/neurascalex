
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="animate-in fade-in duration-700 bg-warm-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl md:text-6xl serif text-teal-800 mb-12">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-gray-700 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">1. Acceptance of Terms</h2>
            <p>
              By accessing and using NeuraScaleX, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="bg-navy-900 text-white p-8 rounded-sm shadow-xl">
            <h2 className="text-2xl serif text-gold-500 mb-6 italic">2. Non-Clinical Disclaimer</h2>
            <p className="mb-4">
              NeuraScaleX provides a "Clinician Digital Twin" platform for educational, informational, and orientation purposes only. 
            </p>
            <p className="font-bold">
              The service is non-clinical by design. It does not provide medical advice, diagnosis, prescribing, or individual treatment plans.
            </p>
            <p className="text-sm text-gray-400">
              User interactions with any Digital Twin are not intended to replace professional medical consultations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">3. Use of Service</h2>
            <p>
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others. We reserve the right to verify clinical credentials for all users requesting demo or trial access to protect clinical integrity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">4. Intellectual Property</h2>
            <p>
              Clinicians retain ownership of all original content provided for ingestion into their Digital Twin. NeuraScaleX retains ownership of the underlying architecture, software, and governance frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">5. Limitation of Liability</h2>
            <p>
              NeuraScaleX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the service. This includes, but is not limited to, reliance on information provided by a Digital Twin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">7. Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <strong>info@neurascalex.com</strong>.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Effective Date: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
