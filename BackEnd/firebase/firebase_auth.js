const { auth, database } = require('./firebase'); // Cambia esto a firebase-admin.js
const { collection, doc, setDoc } = require('firebase-admin/firestore');




async function logIn(tokenID) {
  try {

    const userRecordValidate = tokenID._tokenResponse.idToken;
    // Verificar el ID token del cliente
    const decodedToken = await auth.verifyIdToken(userRecordValidate);
    const uid = decodedToken.uid;

    // Generar un token personalizado para el usuario si es necesario
    const customToken = await auth.createCustomToken(uid);
    console.log('Token personalizado:', customToken);
    const id = tokenID.user.uid
    const docRef = database.collection("users").doc(id);
    const docSnap = await docRef.get();
    console.log(docSnap.data())
    return docSnap.data();
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    return null;
  }
  

}
// async function loginUser(email, password) {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const idToken = await userCredential.user.getIdToken();
//     return idToken; // Enviar este token al servidor
//   } catch (error) {
//     console.error("Error al iniciar sesión:", error);
//     throw error;
//   }
// }
async function signUp(data) {
  try {
    const userRecordValidate = await emailVerification(data.email);
    if(userRecordValidate != null){
      console.log("El usuario ya existe:", userRecordValidate);
      return null;
    }
    // Registra al usuario en Firebase Authentication
    const userRecord = await auth.createUser({
      email: data.email,
      password: data.password,
      displayName: `${data.name} ${data.last_name}`
    });
    console.log(userRecord)
    const userId = userRecord.uid;
  
    // Agrega los datos del usuario a la colección "users" en Firestore
    await database.collection('users').doc(userId).set({
      email: data.email,
      name: data.name,
      lastname: data.last_name,
    });

    return userId;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return null;
  }
}

async function emailVerification(email) {
  try {
    // Obtén el usuario por email

    const userRecord = await auth.getUserByEmail(email);

    // Genera el enlace de verificación de email

    // Retorna el userId y el enlace de verificación
    console.log("El usuario ya existe:", userRecord.uid);
    return userRecord.uid
  } catch (error) {
    console.error("Error al verificar email:", error);
    return null;
  }
}

module.exports = { signUp, logIn };