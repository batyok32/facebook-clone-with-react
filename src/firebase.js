import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDho_ZaV0Dtpnd9mXEv1vyxHQpynpNMVZE",
    authDomain: "facebook-clone-batyr.firebaseapp.com",
    projectId: "facebook-clone-batyr",
    storageBucket: "facebook-clone-batyr.appspot.com",
    messagingSenderId: "772866712303",
    appId: "1:772866712303:web:9c3d98a024c805a15af11a",
    measurementId: "G-S0ZRZ1TLV6"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, storage};
export default db;