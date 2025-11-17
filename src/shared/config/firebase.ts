// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDILexPR7PmFlfvfDCNuCZ1Pq69bRVgBNU",
  authDomain: "ecommerce-1588e.firebaseapp.com",
  projectId: "ecommerce-1588e",
  storageBucket: "ecommerce-1588e.firebasestorage.app",
  messagingSenderId: "935580048842",
  appId: "1:935580048842:web:df95341793df744068c333",
  measurementId: "G-33QTDGYCS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export default app;