// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, initializeAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  initializeFirestore,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cfg } from "../firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = cfg;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const register = async ({ fullName, username, email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res.user) {
      const ref = doc(firestore, "users", res.user.uid)
      const d = setDoc(ref, {
        username, fullName,
      })
      return res.user
    } else {
      console.log("problem oluştu gardaş");
    }
  } catch (e) {
    console.log(e);
  }
};

export {
  firestore, getDocs, collection, addDoc, getDoc, doc, setDoc, register
};
