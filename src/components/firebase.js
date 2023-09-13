// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';3

import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgsAqy58Q2pjFSMzmxie2EFAgcFDTj_E4",
  authDomain: "infinity-3f957.firebaseapp.com",
  projectId: "infinity-3f957",
  storageBucket: "infinity-3f957.appspot.com",
  messagingSenderId: "946283908649",
  appId: "1:946283908649:web:0ecd03ced12ca859591638",
  measurementId: "G-4WSY0K0YQG"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};