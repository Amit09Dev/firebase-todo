// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtnmNvJnfB6l38PgnJwhEqmn2cMBPXpvY",
    authDomain: "todo-app-e63fa.firebaseapp.com",
    projectId: "todo-app-e63fa",
    storageBucket: "todo-app-e63fa.appspot.com",
    messagingSenderId: "262371616519",
    appId: "1:262371616519:web:b36c473551179b156c07a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)