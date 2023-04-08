import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfe-45ekBWrtICzBUKusUMJV5Ot8tVsls",
  authDomain: "to-do-app-vite.firebaseapp.com",
  projectId: "to-do-app-vite",
  storageBucket: "to-do-app-vite.appspot.com",
  messagingSenderId: "83171956869",
  appId: "1:83171956869:web:f314ce93964a2fdcec71ec",
  measurementId: "G-06S3EQQPJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

export { app, db, auth, signInWithGoogle };