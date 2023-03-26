
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBVrQOt-jtHYPbInmwCpwONDkDNOtI8vB8",
  authDomain: "react-coderhouse-912343666.firebaseapp.com",
  projectId: "react-coderhouse-912343666",
  storageBucket: "react-coderhouse-912343666.appspot.com",
  messagingSenderId: "396054993692",
  appId: "1:396054993692:web:e9b50b190dbb3c54bff8d9"
};

const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)