// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpb_OB5NqakBx723Mnj8eNJAu9UyG2W8E",
  authDomain: "todo-firebase-45618.firebaseapp.com",
  projectId: "todo-firebase-45618",
  storageBucket: "todo-firebase-45618.appspot.com",
  messagingSenderId: "423897869826",
  appId: "1:423897869826:web:d996f6dc104a1d69fb811b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);    
const firestore = getFirestore(app);

export { auth, firestore };