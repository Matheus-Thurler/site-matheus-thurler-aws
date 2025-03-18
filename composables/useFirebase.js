import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"






// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();
const db = getFirestore();

export { auth, db };