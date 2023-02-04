// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBob1sjmuVCuZgPSclKUgwCcuV0m3KsojE",
  authDomain: "genius-car-survices-bda4c.firebaseapp.com",
  projectId: "genius-car-survices-bda4c",
  storageBucket: "genius-car-survices-bda4c.appspot.com",
  messagingSenderId: "11559860052",
  appId: "1:11559860052:web:ec74a879d34d6b923ebac1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
