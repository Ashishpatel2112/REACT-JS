// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8PGybeq-HgGWMDBlcLxiCndRr507VlcM",
  authDomain: "todo-6c7f9.firebaseapp.com",
  projectId: "todo-6c7f9",
  storageBucket: "todo-6c7f9.appspot.com",
  messagingSenderId: "501293241033",
  appId: "1:501293241033:web:079cd9b2fca7638b53b318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};