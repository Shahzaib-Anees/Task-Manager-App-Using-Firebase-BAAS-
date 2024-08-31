import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

export{app , analytics};