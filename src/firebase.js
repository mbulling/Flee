// import * as firebase from 'firebase';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// export default firebase;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firestore";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDotxr-5TKZZ-PdHqPEKnWtyHCLuuaiMRk",
  authDomain: "flee-b017c.firebaseapp.com",
  projectId: "flee-b017c",
  storageBucket: "flee-b017c.appspot.com",

  messagingSenderId: "519808878331",
  appId: "lee-b017c"
};
// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// // Export firestore database
// // It will be imported into your react app whenever it is needed
// export const db = getFirestore(app);

// console.log(db);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
console.log(db.collection('user-information'));

export default db;