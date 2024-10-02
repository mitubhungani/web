// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1GTyk12tuW-16wS_4ercAiJpUNGlTwTw",
  authDomain: "web-store-9b267.firebaseapp.com",
  projectId: "web-store-9b267",
  storageBucket: "web-store-9b267.appspot.com",
  messagingSenderId: "89145069599",
  appId: "1:89145069599:web:4dae96b545ff20f9f8852a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const Logout = async () => {
  return await auth.signOut();
};

export const SignupWithEmail = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const EmailLogin = async (email,password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
