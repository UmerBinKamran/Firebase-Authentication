import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgRygeuH0uJ_26qE6GT3YkCh9yRa0A7vI",
  authDomain: "my-first-firebase-projec-306b9.firebaseapp.com",
  projectId: "my-first-firebase-projec-306b9",
  storageBucket: "my-first-firebase-projec-306b9.appspot.com",
  messagingSenderId: "251458778506",
  appId: "1:251458778506:web:b8ec0c18ce735d0be8c473",
  measurementId: "G-9WHB69MPSN",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
};
