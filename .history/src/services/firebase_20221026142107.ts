// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { validadeSignInFormProps } from "./validationFunctions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8f7XHIbhjEzX_aDsARivwZPwSc7MmwxE",
  authDomain: "cardlogin-660ff.firebaseapp.com",
  projectId: "cardlogin-660ff",
  storageBucket: "cardlogin-660ff.appspot.com",
  messagingSenderId: "330394349833",
  appId: "1:330394349833:web:dc95a4454c4c9ef561e3d8"
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
      console.log(error.message);
    });
}

export function loginUser({email, password}: validadeSignInFormProps){
  
}