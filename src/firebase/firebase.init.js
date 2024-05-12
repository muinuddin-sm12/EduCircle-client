// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPyAhawpwGlZ3HZO0irT1CpXkeTV-_b-0",
  authDomain: "educircle-b9a11.firebaseapp.com",
  projectId: "educircle-b9a11",
  storageBucket: "educircle-b9a11.appspot.com",
  messagingSenderId: "238021874020",
  appId: "1:238021874020:web:6c009e40b91f22d911ea71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)