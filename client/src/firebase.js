// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b29d6.firebaseapp.com",
  projectId: "mern-blog-b29d6",
  storageBucket: "mern-blog-b29d6.appspot.com",
  messagingSenderId: "653177692219",
  appId: "1:653177692219:web:7ef04af73cbf70bdd2bc1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);