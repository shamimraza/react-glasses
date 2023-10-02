import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBnVczqto03jN8F9unaHPHy9OrmI0gCu1w",
    authDomain: "react-firebase-sungless.firebaseapp.com",
    projectId: "react-firebase-sungless",
    storageBucket: "react-firebase-sungless.appspot.com",
    messagingSenderId: "924745556094",
    appId: "1:924745556094:web:2ec59f59494d18ef62b82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
