// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK48rAg5zfpj9sLGUAppJj-OINimSzX6s",
  authDomain: "legallens-india.firebaseapp.com",
  projectId: "legallens-india",
  storageBucket: "legallens-india.firebasestorage.app",
  messagingSenderId: "865366026156",
  appId: "1:865366026156:web:8bef61b6c1c11756dd3c09",
  measurementId: "G-0HBNRRENXY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);
export const googleProvider = new GoogleAuthProvider();
