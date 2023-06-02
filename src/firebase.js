import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyAo1WsCrNXl-O7-3BRZAdTFnP4fZI3doSg",
  authDomain: "chatapp-9350b.firebaseapp.com",
  databaseURL: "https://chatapp-9350b-default-rtdb.firebaseio.com",
  projectId: "chatapp-9350b",
  storageBucket: "chatapp-9350b.appspot.com",
  messagingSenderId: "1009587068328",
  appId: "1:1009587068328:web:847a8b1e4d2d17287b119d",
  measurementId: "G-4XYWDYZ65H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
