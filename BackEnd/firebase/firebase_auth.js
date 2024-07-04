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
 
    let colection;
   if (data.user==false){
    colection= "fundaciones"
    await database.collection(colection).doc(userId).set({
      tittle: data.tittle,
      type: data.type,
      email: data.email,
      description: data.description,
      shortDescription: data.shortDescription,
      location: data.location,

    });
   }
    else{
      colection= "users"
         await database.collection(colection).doc(userId).set({
      email: data.email,
      name: data.name,
      lastname: data.last_name,
      phone: data.phone,
      country: data.country,
    });
    }
    // Agrega los datos del usuario a la colección "users" en Firestore
 

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
async function getFundaciones() {
  try {
    const usersRef = database.collection('fundaciones');
    const snapshot = await usersRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    const fund = [];
    snapshot.forEach(doc => {
      console.log(doc.id)

      fund.push({ id: doc.id, ...doc.data() });
    });
    return fund;
  } catch (error) {
    console.error('Error getting documents: ', error);
    return null;
  }
}
async function getImageUrl(userId) {
  try {
    // Obtiene una lista de todos los archivos en la carpeta images/userId
    const listRef = ref(storage, `images/${userId}/ac91c797b888cc696cde48c2ef8bcfe6.jpg`);
    console.log(listRef)
    // const listResult = await listAll(listRef);

    // // Verifica que haya al menos un archivo
    // if (listResult.items.length > 0) {
    //   // Obtiene el primer archivo de la lista (asumiendo que solo hay uno)
    //   const firstFile = listResult.items[0];

    //   // Obtiene la URL de descarga del archivo
    //   const imageUrl = await getDownloadURL(firstFile);

    //   return imageUrl; // Devuelve la URL de descarga de la imagen
    // } else {
    //   console.error("No se encontraron archivos para el usuario:", userId);
    //   return null; // Devuelve null si no se encontraron archivos
    // }
  } catch (error) {
    console.error("Error al obtener la URL de la imagen:", error);
    return null; // Devuelve null en caso de error
  }
}
async function getFoundationType(type){
  try {
    const usersRef = database.collection('fundaciones');
    const snapshot = await usersRef.where('type', '==', type).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    const fund = [];
    snapshot.forEach(doc => {
      console.log(doc.id)

      fund.push({ id: doc.id, ...doc.data() });
    });
    return fund;
  } catch (error) {
    console.error('Error getting documents: ', error);
    return null;
  }

}

async function getFoundation(id){
  try {
    const usersRef = database.collection('fundaciones').doc(id);
    const snapshot = await usersRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    console.log(snapshot.data())
    const fund = snapshot.data();
    return fund;
  } catch (error) {
    console.error('Error getting documents: ', error);
    return null;
  }
}
module.exports = { signUp, getFoundationType,logIn, getFundaciones ,getFoundation};

