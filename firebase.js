import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvrFNtPfJIUc9kGrDMNSVd-V0HA745JHU",
  authDomain: "notes-app-b0220.firebaseapp.com",
  projectId: "notes-app-b0220",
  storageBucket: "notes-app-b0220.appspot.com",
  messagingSenderId: "489887828523",
  appId: "1:489887828523:web:851c128f0c4651d827786e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")