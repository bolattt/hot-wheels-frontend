import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTHDOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECTID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_SENDERID;
const appId = import.meta.env.VITE_FIREBASE_APPID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_SENDERID,
//   appId: import.meta.env.VITE_FIREBASE_APPID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
