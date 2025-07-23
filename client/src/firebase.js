// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b51a5.firebaseapp.com",
  projectId: "mern-estate-b51a5",
  storageBucket: "mern-estate-b51a5.firebasestorage.app",
  messagingSenderId: "728840158808",
  appId: "1:728840158808:web:52e5608e4600fe72eb542d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
