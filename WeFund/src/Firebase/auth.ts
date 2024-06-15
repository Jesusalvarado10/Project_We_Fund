import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

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

    