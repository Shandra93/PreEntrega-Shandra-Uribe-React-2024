import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCHN3cwdzG4JYrMh6N92GnpjirAGaGvIxs",
  authDomain: "ecommerce-coderhouse-shandra.firebaseapp.com",
  projectId: "ecommerce-coderhouse-shandra",
  storageBucket: "ecommerce-coderhouse-shandra.appspot.com",
  messagingSenderId: "548043947708",
  appId: "1:548043947708:web:8a52b666c7556ff5ecdab9",
  measurementId: "G-S20HFPVGN2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

/* Esta es una pagina que debe ir invisible, pero para fines practicos y de curso la dejo activa. */
