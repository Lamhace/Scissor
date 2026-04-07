// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyArPbrhpnxoxErP1pzXr1keyJqiE7EfErw",
    authDomain: "scissor-fcf84.firebaseapp.com",
    databaseURL: "https://scissor-fcf84-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scissor-fcf84",
    storageBucket: "scissor-fcf84.appspot.com",
    messagingSenderId: "741674681667",
    appId: "1:741674681667:web:93afb999ccd8074b8f1bf6",
    measurementId: "G-Y0W86P29FL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);