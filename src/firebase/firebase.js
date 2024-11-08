import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGUC4ZQR2MTzSVpz7tvAys3UnzKv8B_H4",
    authDomain: "login-email-panic-button-6a65d.firebaseapp.com",
    projectId: "login-email-panic-button-6a65d",
    storageBucket: "login-email-panic-button-6a65d.firebasestorage.app",
    messagingSenderId: "237181401671",
    appId: "1:237181401671:web:e76336cfdb5fcab87a0f62",
    measurementId: "G-2YLDX7SVBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult  };