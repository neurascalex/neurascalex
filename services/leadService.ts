/**
 * Lead Service - Simplified version without Firebase
 * Logs lead data to console (can be integrated with backend API later)
 */

export enum LeadType {
  DEMO = 'DEMO',
  FREE_TRIAL = 'FREE_TRIAL',
  CONTACT = 'CONTACT',
}

export const leadService = {
  submitLead: async (type: LeadType, fullName: string, email: string, referralCode?: string, metadata?: any) => {
    // Simulate API call
    console.log('Lead submitted:', {
      type,
      fullName,
      email,
      referralCode: referralCode || '',
      metadata: metadata || {},
      createdAt: new Date().toISOString(),
    });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In production, this would send to your backend API or Firebase
    return true;
  },

  submitAffiliateApplication: async (name: string, email: string, profession: string, linkSource: string, message: string) => {
    // Simulate API call
    console.log('Affiliate application submitted:', {
      name,
      email,
      profession,
      linkSource,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In production, this would send to your backend API or Firebase
    return true;
  }
};
