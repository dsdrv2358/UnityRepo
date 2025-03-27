// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqJ7t0_ZTKWX7Ams86tjbu5D99SUAYgVI",
  authDomain: "reactproject-1995e.firebaseapp.com",
  projectId: "reactproject-1995e",
  storageBucket: "reactproject-1995e.firebasestorage.app",
  messagingSenderId: "763577104063",
  appId: "1:763577104063:web:97be5ca2c03f0368c6f80a",
  measurementId: "G-XVMEZ6W3PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };