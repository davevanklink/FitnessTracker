// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX9_ymwtQRRPEds3pTaAkd9Dq1ivAjQ7M",
    authDomain: "fitnesstracker-e1aad.firebaseapp.com",
    projectId: "fitnesstracker-e1aad",
    storageBucket: "fitnesstracker-e1aad.appspot.com",
    messagingSenderId: "980271478105",
    appId: "1:980271478105:web:1e5c7a053e1911a0388848",
    measurementId: "G-VRYG8R0VNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);