require("dotenv").config();
const KEY = process.env.GOOGLE_API_KEY;

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: KEY,
  authDomain: "git-commited-form.firebaseapp.com",
  projectId: "git-commited-form",
  storageBucket: "git-commited-form.appspot.com",
  messagingSenderId: "1051320323157",
  appId: "1:1051320323157:web:d8b0f95e463f436f3d18dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);