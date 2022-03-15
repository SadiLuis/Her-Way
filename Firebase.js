
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDORHM4e7WvAzd0qpTLhQxKT5jEzQNQlWk",
    authDomain: "her-way-rn.firebaseapp.com",
    databaseURL: "https://her-way-rn-default-rtdb.firebaseio.com",
    projectId: "her-way-rn",
    storageBucket: "her-way-rn.appspot.com",
    messagingSenderId: "79474352688",
    appId: "1:79474352688:web:ba34800215c4e2df0903f5"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const storage = getStorage(app)
export const db = initializeFirestore(app, {experimentalForceLongPolling: true} );

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
