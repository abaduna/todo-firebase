// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCNFToltq_6z4H7QmXpV_AiPtLItdQTyM",
  authDomain: "expense-tracker-bb09a.firebaseapp.com",
  projectId: "expense-tracker-bb09a",
  storageBucket: "expense-tracker-bb09a.appspot.com",
  messagingSenderId: "724310395114",
  appId: "1:724310395114:web:d297eddfe371e50e2b6f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth =getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)