
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pilot' | 'media' | 'podcast'>('pilot');

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl serif mb-6">Ready to End the Guesswork?</h1>
          <p className="text-gray-400 text-lg font-light">Choose your path and take the first step toward clinical scale.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab('pilot')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === 'pilot' ? 'bg-teal-800 text-gold-500 shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              1. Schedule Pilot
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === 'media' ? 'bg-teal-800 text-gold-500 shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              2. Digital Media Inquiry
            </button>
            <button
              onClick={() => setActiveTab('podcast')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === 'podcast' ? 'bg-teal-800 text-gold-500 shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              3. Podcast Application
            </button>
          </div>

          <div className="bg-gray-50 p-12 rounded-sm border border-gray-100 shadow-sm">
            {activeTab === 'pilot' && (
              <div className="animate-in slide-in-from-left-4 duration-300">
                <h2 className="text-3xl serif text-navy-900 mb-6">Schedule Your Pilot Assessment</h2>
                <p className="text-gray-600 mb-8">Book a 15-minute strategy session to determine if the PEOS framework is the right fit for your practice.</p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-teal-800" />
                    <input type="email" placeholder="Clinical Email" className="p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-teal-800" />
                  </div>
                  <input type="text" placeholder="Practice Name / Specialty" className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-teal-800" />
                  <button className="w-full bg-teal-800 text-gold-500 py-4 font-bold uppercase tracking-widest hover:bg-teal-900 transition-all">REQUEST SESSION</button>
                </form>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="animate-in slide-in-from-left-4 duration-300">
                <h2 className="text-3xl serif text-navy-900 mb-6">Inquire About Media Services</h2>
                <p className="text-gray-600 mb-8">Let us help you build your clinical authority through high-touch digital media production.</p>
                <form className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-teal-800" />
                  <textarea placeholder="Tell us about your current digital presence..." className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none h-32"></textarea>
                  <button className="w-full bg-navy-800 text-white py-4 font-bold uppercase tracking-widest hover:bg-navy-900 transition-all">SEND INQUIRY</button>
                </form>
              </div>
            )}

            {activeTab === 'podcast' && (
              <div className="animate-in slide-in-from-left-4 duration-300">
                <h2 className="text-3xl serif text-navy-900 mb-6">Apply to be a Guest on The Impact Show</h2>
                <p className="text-gray-600 mb-8">Join the conversation with other leading experts. We value verified clinical insight.</p>
                <form className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-teal-800" />
                  <input type="text" placeholder="Core Expertise Topic" className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-teal-800" />
                  <textarea placeholder="What is the one major problem in your field that keeps you up at night?" className="w-full p-4 bg-white border border-gray-200 rounded-sm text-sm outline-none h-32"></textarea>
                  <button className="w-full bg-gold-600 text-navy-900 py-4 font-bold uppercase tracking-widest hover:bg-gold-700 transition-all">SUBMIT APPLICATION</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
