// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-YZ26iif--B3ZZzLkjTmDWk88lAMp6os",
  authDomain: "netflixgpt-9a163.firebaseapp.com",
  projectId: "netflixgpt-9a163",
  storageBucket: "netflixgpt-9a163.firebasestorage.app",
  messagingSenderId: "267462730466",
  appId: "1:267462730466:web:4c2c94a361378d38ee34bb",
  measurementId: "G-0VW8LVS6VM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
