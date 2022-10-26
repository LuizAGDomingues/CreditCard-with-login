// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { validadeSignInFormProps } from "./validationFunctions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_SIGNIN_API_KEY,
  authDomain: process.env.VITE_SIGNIN_API_KEY,
  projectId: process.env.VITE_SIGNIN_API_KEY,
  storageBucket: process.env.VITE_SIGNIN_API_KEY,
  messagingSenderId: process.env.VITE_SIGNIN_API_KEY,
  appId: process.env.VITE_SIGNIN_API_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function createUser({email, password}: validadeSignInFormProps){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert(error.message);
    });
}

export async function loginUser({email, password}: validadeSignInFormProps){
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential.user);
    window.location.replace("https://rocketpay-creditcard.vercel.app")
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    alert("Esta conta não existe")
  });
}
