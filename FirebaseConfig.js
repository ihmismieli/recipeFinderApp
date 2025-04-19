
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAffifw5nqUaZjuBzpHTeMMXhoa7PDBbek",
  authDomain: "recipefinder-3c6b7.firebaseapp.com",
  databaseURL: "https://recipefinder-3c6b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipefinder-3c6b7",
  storageBucket: "recipefinder-3c6b7.firebasestorage.app",
  messagingSenderId: "135573033740",
  appId: "1:135573033740:web:731f423b261dab22c0ef29"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);