// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs1RroJMu3dD7Y39oYqJFM2EC6_NKbOzQ",
  authDomain: "adtc-cbc37.firebaseapp.com",
  projectId: "adtc-cbc37",
  storageBucket: "adtc-cbc37.firebasestorage.app",
  messagingSenderId: "313677494138",
  appId: "1:313677494138:web:9fac5c2fc6a48a8ad548c3",
  // measurementId: "G-BL479DXNE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)