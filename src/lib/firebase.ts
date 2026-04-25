import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKST3pU1dYfZZ6QmGLpdOrELgVqEFrEjA",
  authDomain: "recall-1479c.firebaseapp.com",
  projectId: "recall-1479c",
  storageBucket: "recall-1479c.firebasestorage.app",
  messagingSenderId: "340125833570",
  appId: "1:340125833570:web:19e61de242dd74714fb43b",
  measurementId: "G-6PR0S1PM5M"
};

const app = initializeApp(firebaseConfig);

let analytics: Analytics | null = null;
let db: Firestore | null = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  db = getFirestore(app);
}

export { app, analytics, db };
