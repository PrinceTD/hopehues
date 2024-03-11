// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe9HrJGVYEvQnWG2snsGHUU9u2kQ81Kro",
    authDomain: "hopehues.firebaseapp.com",
    projectId: "hopehues",
    storageBucket: "hopehues.appspot.com",
    messagingSenderId: "132579709756",
    appId: "1:132579709756:web:acd87bcea27e0dfee4c439",
    measurementId: "G-K00EMC66H7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
