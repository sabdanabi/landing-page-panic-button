import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkfbw8cUocSrhzIVW0HUhqTCx5X44Kb_s",
    authDomain: "panic-button-f0c82.firebaseapp.com",
    databaseURL: "https://panic-button-f0c82-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "panic-button-f0c82",
    storageBucket: "panic-button-f0c82.firebasestorage.app",
    messagingSenderId: "505490102336",
    appId: "1:505490102336:web:8af8264cc127091a45e7a5",
    measurementId: "G-58LSFMCC7P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup};