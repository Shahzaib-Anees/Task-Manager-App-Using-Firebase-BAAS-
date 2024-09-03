import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDxkQUaot3SHRIJTz4_hrgTo_wgB0oaaqE",
  authDomain: "todo-backend-bcd23.firebaseapp.com",
  projectId: "todo-backend-bcd23",
  storageBucket: "todo-backend-bcd23.appspot.com",
  messagingSenderId: "275336772888",
  appId: "1:275336772888:web:d04859200b7518cb14f26d",
  measurementId: "G-3Y722KLSP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { analytics, db, auth , storage };