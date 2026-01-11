import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";
const phoneInput = document.getElementById("phone");
const otpInput = document.getElementById("otp");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const msg = document.getElementById("msg");

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal",
  callback: () => {},
});

let confirmationResult;

sendOtpBtn.addEventListener("click", async () => {
  const phoneNumber = phoneInput.value;

  try {
    confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );
    msg.textContent = "OTP sent to your phone.";
  } catch (error) {
    msg.textContent = error.message;
  }
});

verifyOtpBtn.addEventListener("click", async () => {
  const code = otpInput.value;

  try {
    const result = await confirmationResult.confirm(code);
    msg.textContent = "Phone number verified! Logged in.";
    console.log(result.user);
  } catch (error) {
    msg.textContent = "Invalid OTP.";
  }
});
