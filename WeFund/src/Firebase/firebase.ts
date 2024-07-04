// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";

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

// Exportar instancias de Firebase para su uso en otras partes de la aplicación
export const database = getFirestore(app); // Instancia de Firestore (Database)
export const auth = getAuth(app); // Instancia de Authentication
export const googleProvider = new GoogleAuthProvider(); // Proveedor de autenticación de Google
export const storage = getStorage(); // Instancia de Firebase Storage
