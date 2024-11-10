// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhzDP_tkvYXvABWAUbV-Phuxi0BrZ5Eo",
  authDomain: "auth-project-f65c0.firebaseapp.com",
  projectId: "auth-project-f65c0",
  storageBucket: "auth-project-f65c0.firebasestorage.app",
  messagingSenderId: "89305732786",
  appId: "1:89305732786:web:d9813e7719b31a4f259bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);