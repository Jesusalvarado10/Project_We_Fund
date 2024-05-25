// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth,GoogleAuthProvider} = require('firebase/auth');
const { getStorage } = require('firebase/storage');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();
 const database = getFirestore(app);
 const storage = getStorage(app);

module.exports = { auth, googleProvider, database, storage };

