// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.enf.VITE_apiKey,
  authDomain: import.meta.enf.VITE_authDomain,
  projectId: import.meta.enf.VITE_projectId,
  storageBucket: import.meta.enf.VITE_storageBucket,
  messagingSenderId: import.meta.enf.VITE_messagingSenderId,
  appId: import.meta.enf.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);