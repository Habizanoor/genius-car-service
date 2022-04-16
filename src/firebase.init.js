// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWpsiVpR5ZK_B56VFlx5nODY4XaKfKY4",
  authDomain: "genius-car-services-30319.firebaseapp.com",
  projectId: "genius-car-services-30319",
  storageBucket: "genius-car-services-30319.appspot.com",
  messagingSenderId: "104733882408",
  appId: "1:104733882408:web:7722dfc4909ee7ca0b5d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;