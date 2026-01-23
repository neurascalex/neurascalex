
/**
 * Email Service for NeuraScaleX
 * Handles the logic for relaying demo and contact requests.
 * In a production environment, this would interface with a backend 
 * or a service like SendGrid, AWS SES, or EmailJS.
 */

export interface FormData {
  [key: string]: string | boolean;
}

export const sendToInfoInbox = async (type: 'DEMO' | 'CONTACT', data: FormData): Promise<boolean> => {
  const recipient = "info@neurascalex.com";
  
  // LOGGING FOR TESTING/VERIFICATION
  console.group(`%c[SMTP RELAY] New ${type} Request`, "color: #d4af37; font-weight: bold;");
  console.info(`Target Inbox: ${recipient}`);
  console.table(data);
  console.groupEnd();

  // Simulated API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // If this were a real integration, you would use:
  // return await fetch('https://api.neurascalex.com/v1/mail-relay', { ... });

  return true; // Success response
};
