
/**
 * Referral Service
 * Handles capturing, persisting, and retrieving referral codes from the URL.
 */

const REFERRAL_KEY = 'neurascalex_ref';

export const referralService = {
  /**
   * Captures the 'ref' parameter from the URL and saves it to localStorage.
   */
  init: () => {
    if (typeof window === 'undefined') return;
    
    // Check standard search params
    let search = window.location.search;
    
    // Check hash for params (common in HashRouter)
    if (!search && window.location.hash.includes('?')) {
      search = '?' + window.location.hash.split('?')[1];
    }
    
    const params = new URLSearchParams(search);
    const ref = params.get('ref');
    
    if (ref) {
      localStorage.setItem(REFERRAL_KEY, ref);
      console.log(`Referral code caught and saved: ${ref}`);
    }
  },

  /**
   * Retrieves the saved referral code.
   */
  getReferralCode: (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(REFERRAL_KEY);
  },

  /**
   * Clears the referral code (e.g. after successful conversion if desired).
   */
  clearReferralCode: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(REFERRAL_KEY);
  }
};
