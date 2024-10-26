import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHualxGMLIiH-SMaGcDVUEepUQFcFtAhw",
  authDomain: "coding-platform-db.firebaseapp.com",
  projectId: "coding-platform-db",
  databaseURL: "https://coding-platform-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "coding-platform-db.appspot.com",
  messagingSenderId: "705645945052",
  appId: "1:705645945052:web:2f813b43868098f415d419"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realDb = getDatabase(app);

export { app, db, realDb };