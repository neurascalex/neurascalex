import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './firebase';

export enum LeadType {
  DEMO = 'DEMO',
  FREE_TRIAL = 'FREE_TRIAL',
  CONTACT = 'CONTACT',
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const leadService = {
  submitLead: async (type: LeadType, fullName: string, email: string, referralCode?: string, metadata?: any) => {
    const path = 'leads';
    try {
      await addDoc(collection(db, path), {
        type,
        fullName,
        email,
        referralCode: referralCode || '',
        metadata: metadata || {},
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  submitAffiliateApplication: async (name: string, email: string, profession: string, linkSource: string, message: string) => {
    const path = 'affiliateApplications';
    try {
      await addDoc(collection(db, path), {
        name,
        email,
        profession,
        linkSource,
        message,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  }
};
