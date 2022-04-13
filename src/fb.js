// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUUTLsPfcWJ7-azhPDbK7YHKNVlCPVuZ0",
  authDomain: "royalcarrental-9ca2c.firebaseapp.com",
  projectId: "royalcarrental-9ca2c",
  storageBucket: "royalcarrental-9ca2c.appspot.com",
  messagingSenderId: "139381146578",
  appId: "1:139381146578:web:c3a98b23c043eeaa383e0b",
  measurementId: "G-9Z4SGSJNPQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
export default db;
