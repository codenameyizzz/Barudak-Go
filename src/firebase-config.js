// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRcjWFwTAfa1Ty92DGqNdfxQ3LHeGZB-U",
  authDomain: "partisi-chat.firebaseapp.com",
  projectId: "partisi-chat",
  storageBucket: "partisi-chat.firebasestorage.app",
  messagingSenderId: "460345399304",
  appId: "1:460345399304:web:43f62d2a6c8cc606fcd9bd",
  measurementId: "G-4REX8SP3KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);