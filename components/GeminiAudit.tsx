
import React, { useState } from 'react';
import { getClinicalImpactAudit, ImpactAuditResult } from '../services/geminiService';

const GeminiAudit: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImpactAuditResult | null>(null);

  const handleAudit = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const data = await getClinicalImpactAudit(input);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-teal-800/20 rounded-lg shadow-2xl p-8 max-w-2xl mx-auto -mt-20 relative z-10">
      <h3 className="text-2xl serif text-teal-800 mb-4">Is Your Practice AI-Ready?</h3>
      <p className="text-gray-600 text-sm mb-6">Describe your current biggest clinical admin bottleneck to receive an instant Ethical AI risk assessment.</p>
      
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., I spend 4 hours a day responding to patient FAQ emails that are already covered in my previous keynotes..."
          className="w-full p-4 border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-teal-800 outline-none h-32"
        />
        <button
          onClick={handleAudit}
          disabled={loading}
          className="w-full bg-navy-800 text-gold-500 font-bold py-4 rounded-sm uppercase tracking-widest hover:bg-navy-900 transition-all disabled:opacity-50"
        >
          {loading ? 'Analyzing Clinical Risk...' : 'RUN ETHICAL IMPACT AUDIT'}
        </button>
      </div>

      {result && (
        <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-navy-800">Scaling Risk Score:</span>
            <span className={`text-2xl serif font-bold ${result.riskScore > 60 ? 'text-red-600' : 'text-teal-700'}`}>
              {result.riskScore}/100
            </span>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3">Identified Opportunities</h4>
            <ul className="space-y-2">
              {result.opportunities.map((o, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-gold-500 mr-2">•</span> {o}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3">Recommended Next Steps</h4>
            <ul className="space-y-2">
              {result.recommendedSteps.map((s, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-teal-600 mr-2">→</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal-50 p-4 rounded-sm">
            <p className="text-xs text-teal-900 leading-relaxed italic">
              * This is an automated assessment of scale-efficiency and ethical liability. 
              Schedule a pilot to translate these findings into a secure PEOS implementation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAudit;
