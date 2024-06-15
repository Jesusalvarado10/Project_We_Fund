import { initializeApp } from "firebase/app";


import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-f0QYx9aW3eslgdQdoQ1_-kg3jhhG6WY",
    authDomain: "wefund-2c2ea.firebaseapp.com",
    projectId: "wefund-2c2ea",
    storageBucket: "wefund-2c2ea.appspot.com",
    messagingSenderId: "320922340115",
    appId: "1:320922340115:web:550b80d58e808b03eaa8e6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
