import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlOeqnE4hN197KoO_7Lls5UXlGEws4IO8",
  authDomain: "thedojosite-ce6a7.firebaseapp.com",
  projectId: "thedojosite-ce6a7",
  storageBucket: "thedojosite-ce6a7.appspot.com",
  messagingSenderId: "99072408498",
  appId: "1:99072408498:web:e48451f47fab03328b02ab",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
