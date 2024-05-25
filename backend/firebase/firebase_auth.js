const { addDoc, collection } = require('firebase/firestore');
const { database } = require('./firebase');



const addFirebaseAuth = async (name, other) => {
    console.log("Adding user to Firebase");
    try {
      const docRef = await addDoc(collection(database, 'users'), { name, other });
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  };
module.exports = { addFirebaseAuth };