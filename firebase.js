// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqE5zWE82hJ9IYmmd2i2QOiaBEs2RwOmY",
  authDomain: "pantry-48edf.firebaseapp.com",
  projectId: "pantry-48edf",
  storageBucket: "pantry-48edf.appspot.com",
  messagingSenderId: "8561417654",
  appId: "1:8561417654:web:a2d43b28f1128b78c87517",
  measurementId: "G-Q9P4E3B650"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app); // Correct usage of getFirestore

// Exporting Firestore and the app
export { app, firestore };
