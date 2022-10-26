// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.SIGNIN_API_KEY,
  authDomain: process.env.SIGNIN_API_KEY,
  projectId: process.env.SIGNIN_API_KEY,
  storageBucket: process.env.SIGNIN_API_KEY,
  messagingSenderId: process.env.SIGNIN_API_KEY,
  appId: "1:330394349833:web:dc95a4454c4c9ef561e3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);