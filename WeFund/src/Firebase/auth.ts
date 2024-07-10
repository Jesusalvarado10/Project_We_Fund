import { signInWithEmailAndPassword } from "firebase/auth";

import { getDownloadURL, ref, uploadBytes,  } from "@firebase/storage";


import { auth, storage } from "./firebase";


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
        const imageUrl = await getDownloadURL(storageRef);
        console.log("")
        console.log("")
        console.log("")
        console.log("")
        console.log(imageUrl)
        console.log(file.name)
        console.log("")
        console.log("")
        console.log("")

        return file.name;
     
          console.log("File uploaded successfully.");
      } catch (error) {
          console.error("Error uploading file:", error);
      }

  }
    
 export async function getImageUrl(userId: string, fileName: string): Promise<string | null> {
    try {
        // Obtén la referencia de la imagen en Firebase Storage
        const storageRef = ref(storage, `images/${userId}/${fileName}`);

        // Obtiene la URL de descarga de la imagen
        const imageUrl = await getDownloadURL(storageRef);
        console.log(imageUrl)

        return imageUrl; // Devuelve la URL de descarga de la imagen
    } catch (error) {
        console.error("Error al obtener la URL de la imagen:", error);
        return null; // Devuelve null en caso de error
    }
}