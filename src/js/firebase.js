import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDoc, getDocs,
    addDoc, onSnapshot, query, where, doc,
    updateDoc, deleteDoc,
} from 'firebase/firestore'

import { getAuth, createUserWithEmailAndPassword,signOut } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA-eo6fiKS-NdCouHNtEUYfe5eu9Z9tsHQ",
    authDomain: "elysium-4f347.firebaseapp.com",
    projectId: "elysium-4f347",
    storageBucket: "elysium-4f347.appspot.com",
    messagingSenderId: "380163624628",
    appId: "1:380163624628:web:3005d6ca93845103e5d1e1",
    measurementId: "G-6YLDLZ2FV2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();



export {collection, getDoc, getDocs,
    addDoc, onSnapshot, query, where, doc,
    updateDoc, deleteDoc, getAuth, createUserWithEmailAndPassword, 
    signOut, auth, db, app};
  