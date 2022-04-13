import firebase from "firebase/app";
import "firebase/firestore";
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
