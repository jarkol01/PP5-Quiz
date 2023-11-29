import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJMJwT3Cd9mOT_fYvo3IzJXs9cMXDSMzY",
    authDomain: "pp5-quiz.firebaseapp.com",
    projectId: "pp5-quiz",
    storageBucket: "pp5-quiz.appspot.com",
    messagingSenderId: "740679511440",
    appId: "1:740679511440:web:a47178620dcbb97cb7d715"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);