import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebas/auth";
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
const firestore = getFirestore(app);
export {app, auth, firestore};