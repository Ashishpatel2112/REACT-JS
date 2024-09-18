// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBEDkLB-Etjj9r7uZ-oFVCvExSIb_ufyk",
  authDomain: "auth-a1cf4.firebaseapp.com",
  projectId: "auth-a1cf4",
  storageBucket: "auth-a1cf4.appspot.com",
  messagingSenderId: "838998231134",
  appId: "1:838998231134:web:feedf6e4f6a9be660c8ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider

export {auth, provider};
