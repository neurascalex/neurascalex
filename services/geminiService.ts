
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ImpactAuditResult {
  riskScore: number;
  opportunities: string[];
  recommendedSteps: string[];
}

export const getClinicalImpactAudit = async (description: string): Promise<ImpactAuditResult> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this clinician's challenge and provide an ethical AI readiness assessment: ${description}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          riskScore: { 
            type: Type.NUMBER,
            description: "Scale of 1-100 of current operational risk."
          },
          opportunities: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "High-leverage AI opportunities."
          },
          recommendedSteps: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Immediate C-B-A steps."
          }
        },
        required: ["riskScore", "opportunities", "recommendedSteps"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    return {
      riskScore: 50,
      opportunities: ["Scalable expert content", "Automated admin"],
      recommendedSteps: ["Schedule a pilot assessment"]
    };
  }
};
