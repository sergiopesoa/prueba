import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJXsckVYNvrq33Rp_vSyiBt_bdpl7EH3g",
  authDomain: "proyecto-ceramica.firebaseapp.com",
  projectId: "proyecto-ceramica",
  storageBucket: "proyecto-ceramica.appspot.com",
  messagingSenderId: "975573763610",
  appId: "1:975573763610:web:e61d5efb16fea276dbb3a3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;