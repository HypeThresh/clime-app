// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-a4LvdVubwNFsTjaJn7SABvySfIbiEfQ",
  authDomain: "arduino-466c3.firebaseapp.com",
  databaseURL: "https://arduino-466c3-default-rtdb.firebaseio.com",
  projectId: "arduino-466c3",
  storageBucket: "arduino-466c3.appspot.com",
  messagingSenderId: "558904341614",
  appId: "1:558904341614:web:2282de14fb8d3c6414627f",
  measurementId: "G-F8F9KFXKRH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);