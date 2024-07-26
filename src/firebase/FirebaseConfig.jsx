// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Ni9KJoljnocJsyaJE7ERu-yC2hDE9Bk",
  authDomain: "blogsphere-b948d.firebaseapp.com",
  projectId: "blogsphere-b948d",
  storageBucket: "blogsphere-b948d.appspot.com",
  messagingSenderId: "189060170557",
  appId: "1:189060170557:web:f80e21e4b5ce6494423b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };