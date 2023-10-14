// Import the functions you need from the SDKs you need
// Need to add to gitignore 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIxm7IEE_IR3vp35yrGTngLaAN9_Iyg1o",
  authDomain: "ligate-77cf3.firebaseapp.com",
  projectId: "ligate-77cf3",
  storageBucket: "ligate-77cf3.appspot.com",
  messagingSenderId: "1037611140951",
  appId: "1:1037611140951:web:92d7c4aa74b0e6ca2a6012",
  measurementId: "G-NFK7690N5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);