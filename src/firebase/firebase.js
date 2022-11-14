import { initializeApp } from "firebase/app";

import {
  doc,
  setDoc,
  collection,
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCubQYe0ASyrzjyvppB_Hv0P-AIw0XlS0Y",
  authDomain: "ecommerce-web-app-redux.firebaseapp.com",
  projectId: "ecommerce-web-app-redux",
  storageBucket: "ecommerce-web-app-redux.appspot.com",
  messagingSenderId: "508246476946",
  appId: "1:508246476946:web:484eeed544aa99236abe4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// db collection
const dbCollection = collection(db, "cartItems");
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  db,
  dbCollection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
};
