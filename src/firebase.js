import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBco9F_MAxTCCWytGCajXPKQ1h8X4nE4C0",
  authDomain: "telegram-10d12.firebaseapp.com",
  projectId: "telegram-10d12",
  storageBucket: "telegram-10d12.appspot.com",
  messagingSenderId: "585066952878",
  appId: "1:585066952878:web:3695de6ea8d2202fc1d53f",
  measurementId: "G-K0QJVHTV45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
