// src/auth-service.js

import { auth } from './firebase-config';
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  ActionCodeSettings,
} from 'firebase/auth';

// Sign up a new user
export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    // console.error("Registration Error:", error.message);
    throw error;
  }
};

// Login with email (passwordless)
export const requestLoginEmail = async (
  email: string,
  actionCodeSettings: ActionCodeSettings,
) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      console.log(error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ...
    });
};

// // Log in an existing user
// export const login = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password,
//     );
//     return userCredential.user;
//   } catch (error) {
//     // console.error("Login Error:", error.message);
//     throw error;
//   }
// };

// Log out the current user
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    // console.error("Logout Error:", error.message);
  }
};

// Subscribe to authentication state changes
export const monitorAuthState = (callback: () => {}) => {
  onAuthStateChanged(auth, callback);
};
