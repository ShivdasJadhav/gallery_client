import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAntq9GO1l4pcpGeiyKLd5vtyJv9v-3bWQ",
  authDomain: "artgallery-608a9.firebaseapp.com",
  projectId: "artgallery-608a9",
  storageBucket: "artgallery-608a9.appspot.com",
  messagingSenderId: "229893922141",
  appId: "1:229893922141:web:4223ec5001152196185cb4",
  measurementId: "G-L065V02MEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);