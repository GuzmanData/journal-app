import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDbyikpZttpx7kyvqyOTEeKXqHcPxw2jmo",
    authDomain: "journal-app-cb652.firebaseapp.com",
    projectId: "journal-app-cb652",
    storageBucket: "journal-app-cb652.appspot.com",
    messagingSenderId: "520638809283",
    appId: "1:520638809283:web:e675f57782266dfb564e76"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}