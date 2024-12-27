
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCiuf4dGAH4ETzLkDKqyIuvGr3aqlQDTMw",
    authDomain: "lax-firebase-65146.firebaseapp.com",
    projectId: "lax-firebase-65146",
    storageBucket: "lax-firebase-65146.firebasestorage.app",
    messagingSenderId: "512146756293",
    appId: "1:512146756293:web:5e0b5e8560ed866c3796ac",
    measurementId: "G-E48G8J507M",
    databaseUrl: "https://lax-firebase-65146-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);