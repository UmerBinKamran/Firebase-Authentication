# Firebase Authentication System

![Firebase](https://img.shields.io/badge/Firebase-Authentication-orange)
![JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-yellow)
![HTML](https://img.shields.io/badge/Frontend-HTML%2FCSS-blue)
![Status](https://img.shields.io/badge/Project-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A complete authentication system built using **Firebase Authentication**. It allows users to securely sign up and sign in using multiple methods, making it flexible and user-friendly.

## Features

- 🔐 Email & Password Authentication  
- 🌐 Google Sign-In  
- 📱 Phone Number Authentication (OTP-based)  
- 🚪 Sign In & Sign Up Flow  
- 🔄 Real-time Authentication State Handling  
- 🛡️ Secure and reliable authentication powered by Firebase  

## Technologies Used

- HTML  
- CSS  
- JavaScript  
- Firebase Authentication  
- Firebase SDK (CDN or npm-based setup)

## How It Works

Users can:
- Create an account using their email and password  
- Sign in using their Google account  
- Authenticate using their phone number with OTP verification  

Firebase handles all the security, validation, and user session management.
## Setup Instructions

1. Clone or download this repository.
2. Create a project in the [Firebase Console](https://console.firebase.google.com/).
3. Enable the following sign-in methods in Firebase:
   - Email/Password  
   - Google  
   - Phone  
4. Copy your Firebase configuration and replace it in the project:

   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "SENDER_ID",
     appId: "APP_ID"
   };
   Run the project in your browser.

5. Use Cases

Login systems for websites and web apps

User account management

Projects requiring secure and fast authentication

Author

Umer Bin Kamran
Built as a learning and practical implementation of Firebase Authentication.
