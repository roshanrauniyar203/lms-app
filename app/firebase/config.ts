import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaGUMdSaVmIFvDX21YKEs1--UEIgd97xs",
  authDomain: "lms-mobile-29e37.firebaseapp.com",
  databaseURL: "https://lms-mobile-29e37-default-rtdb.firebaseio.com",
  projectId: "lms-mobile-29e37",
  storageBucket: "lms-mobile-29e37.appspot.com",
  messagingSenderId: "1024302188418",
  appId: "1:1024302188418:web:a96e36511af43040caf19b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
