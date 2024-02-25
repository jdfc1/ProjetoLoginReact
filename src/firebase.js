
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUXWBwX9otVfFPiS11F5RZOtfP5bIcN7I",
  authDomain: "loginfirebase-30562.firebaseapp.com",
  projectId: "loginfirebase-30562",
  storageBucket: "loginfirebase-30562.appspot.com",
  messagingSenderId: "919791584126",
  appId: "1:919791584126:web:525a395f5d9a8c57ea292f"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);