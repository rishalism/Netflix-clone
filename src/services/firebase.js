import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
const { VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTHDOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENTER_ID,
    VITE_FIREBASE_API_ID } = import.meta.env

const firebaseConfig = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTHDOMAIN,
    projectId: VITE_FIREBASE_PROJECT_ID,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENTER_ID,
    appId: VITE_FIREBASE_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)