
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
    <div className="bg-paper border border-ink/10 rounded-none shadow-2xl p-8 max-w-2xl mx-auto -mt-20 relative z-10">
      <h3 className="text-2xl font-serif text-teal-precise mb-4">Is Your Practice AI-Ready?</h3>
      <p className="text-ink/60 text-sm mb-6 font-light">Describe your current biggest clinical admin bottleneck to receive an instant Ethical AI risk assessment.</p>
      
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., I spend 4 hours a day responding to patient FAQ emails that are already covered in my previous keynotes..."
          className="w-full p-4 border border-ink/10 rounded-none text-sm focus:ring-1 focus:ring-teal-precise outline-none h-32 bg-paper/50"
        />
        <button
          onClick={handleAudit}
          disabled={loading}
          className="w-full bg-ink text-amber-warm font-bold py-4 rounded-none label-mono hover:bg-ink/90 transition-all disabled:opacity-50"
        >
          {loading ? 'Analyzing Clinical Risk...' : 'RUN ETHICAL IMPACT AUDIT'}
        </button>
      </div>

      {result && (
        <div className="mt-8 pt-8 border-t border-ink/5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="label-mono text-ink">Scaling Risk Score:</span>
            <span className={`text-2xl font-serif font-bold ${result.riskScore > 60 ? 'text-amber-warm' : 'text-teal-precise'}`}>
              {result.riskScore}/100
            </span>
          </div>
          
          <div>
            <h4 className="label-mono text-teal-precise mb-3">Identified Opportunities</h4>
            <ul className="space-y-2">
              {result.opportunities.map((o, i) => (
                <li key={i} className="text-sm text-ink/70 flex items-start font-light">
                  <span className="text-amber-warm mr-2">•</span> {o}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-mono text-teal-precise mb-3">Recommended Next Steps</h4>
            <ul className="space-y-2">
              {result.recommendedSteps.map((s, i) => (
                <li key={i} className="text-sm text-ink/70 flex items-start font-light">
                  <span className="text-teal-precise mr-2">→</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal-precise/5 p-4 rounded-none border border-teal-precise/10">
            <p className="text-xs text-ink/70 leading-relaxed italic-moment">
              * This is an automated assessment of scale-efficiency and ethical liability. 
              Schedule a pilot to translate these findings into a secure implementation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAudit;
