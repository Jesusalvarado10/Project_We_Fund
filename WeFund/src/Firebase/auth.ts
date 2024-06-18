import { signInWithEmailAndPassword } from "firebase/auth";

import { ref, uploadBytes,  } from "@firebase/storage";


import { auth, storage, database } from "./firebase";

export async function signInWithEmailAndPasswordAndFetchUserData(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Autenticar al usuario
      // Una vez autenticado, obtener el ID del usuario
      const userId = userCredential
      console.log(userId);
      return userId;
      
    } catch (error: any) {
        
        return null;
    }}  

   export async function uploadFile(userId: string, file: File) {
      try {
        const storageRef = ref(storage, `images/${userId}/${file.name}`);
        await uploadBytes(storageRef, file);
          console.log("File uploaded successfully.");
      } catch (error) {
          console.error("Error uploading file:", error);
      }
  }
    