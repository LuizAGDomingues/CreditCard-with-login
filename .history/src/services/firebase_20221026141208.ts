// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.SIGNIN_API_KEY,
  authDomain: process.env.SIGNIN_AUTH_DOMAIN,
  projectId: process.env.SIGNIN_PROJECT_ID,
  storageBucket: process.env.SIGNIN_STORAGE_BUCKET,
  messagingSenderId: process.env.SIGNIN_MESSAGING_SENDER_ID,
  appId: process.env.SIGNIN_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function createUser(){
  
}