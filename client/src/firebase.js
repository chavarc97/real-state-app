// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stat.firebaseapp.com",
  projectId: "mern-stat",
  storageBucket: "mern-stat.appspot.com",
  messagingSenderId: "68881873327",
  appId: "1:68881873327:web:7283c3bbcf3ceaf541d75a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);