import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
} from "./firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const googleBtn = document.getElementById("googleBtn");
const msg = document.getElementById("msg");

signupBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      msg.style.color = "green";
      msg.innerText = "Signup Successful!";
      console.log(userCredential.user);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
});

signinBtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      msg.style.color = "green";
      msg.innerText = "Signin Successful!";
      console.log(userCredential.user);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
});

googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      msg.style.color = "green";
      msg.innerText = `Google Sign-In Successful! Welcome ${result.user.displayName}`;
      console.log(result.user);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
      console.log(error);
    });
});
