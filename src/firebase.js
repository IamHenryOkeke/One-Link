// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAw-S41kIiehTx8W51SgbaR_2WW5iPTaVU",
  authDomain: "onelink-f5469.firebaseapp.com",
  projectId: "onelink-f5469",
  storageBucket: "onelink-f5469.appspot.com",
  messagingSenderId: "929673639030",
  appId: "1:929673639030:web:7fc0e138b0eccbc16d1b57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;