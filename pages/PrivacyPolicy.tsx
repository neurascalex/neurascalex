
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-warm-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl md:text-6xl serif text-teal-800 mb-12">Privacy & Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-gray-700 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">1. Introduction</h2>
            <p>
              NeuraScaleX ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. 
            </p>
            <p>
              For the purpose of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the data controller is NeuraScaleX.
            </p>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">2. Information We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Information you give us:</strong> Information you provide by filling in forms on our site (e.g., demo requests, free trial applications). This includes name, clinical email, role, specialty, and clinical verification links (LinkedIn/Website).</li>
              <li><strong>Technical information:</strong> Including IP address, browser type, and operating system for system administration and security.</li>
              <li><strong>Usage data:</strong> Details of your visits to our site and the resources that you access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">3. Use of Information</h2>
            <p>We use information held about you in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To verify your clinical identity and eligibility for our services.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our service.</li>
            </ul>
          </section>

          <section className="bg-softgreen p-8 rounded-sm border border-teal-100">
            <h2 className="text-2xl serif text-teal-800 mb-6">4. Cookie Policy (GDPR Compliant)</h2>
            <p className="mb-4">
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">Essential Cookies</h4>
                <p className="text-sm">Necessary for the website to function. These cannot be switched off.</p>
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">Performance Cookies</h4>
                <p className="text-sm">Allow us to count visits and traffic sources so we can measure and improve performance.</p>
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">Functionality Cookies</h4>
                <p className="text-sm">Enable the website to provide enhanced functionality and personalisation (e.g., remembering your demo path).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction or erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Withdraw consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl serif text-navy-900 mb-6">6. Contact</h2>
            <p>
              Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to <strong>info@neurascalex.com</strong>.
            </p>
          </section>
        </div>
        
        <div className="mt-20 pt-12 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
