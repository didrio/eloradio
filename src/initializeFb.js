// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjQ_msBC3Z4q9P2WrWBh5ceb7pVRXrWlc",
  authDomain: "eloradio-cb017.firebaseapp.com",
  projectId: "eloradio-cb017",
  storageBucket: "eloradio-cb017.appspot.com",
  messagingSenderId: "1067057334992",
  appId: "1:1067057334992:web:b6b99472298b33d6ac6cd5",
  measurementId: "G-DL5QXS028C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);