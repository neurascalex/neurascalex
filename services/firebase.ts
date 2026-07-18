import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = (firebaseConfig as any).firestoreDatabaseId 
  ? getFirestore(app, (firebaseConfig as any).firestoreDatabaseId)
  : getFirestore(app);
export const auth = getAuth(app);

/**
 * Validates connection to Firestore as per skill guidelines.
 */
async function testConnection() {
  // Wait a moment for the environment to settle
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // We use a dummy path to test connectivity
    await getDocFromServer(doc(db, '_connection_test_', 'init'));
    console.log("Firebase connection validated.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Firebase connection failed: Client is offline. This can happen in some local environments or if network is restricted.", error);
    } else {
      // Missing permission is expected for the test doc, but connection is alive
      console.log("Firebase connection alive (permission check done).");
    }
  }
}

// We can call this manually from the console or a hidden debug page if needed
// testConnection();
