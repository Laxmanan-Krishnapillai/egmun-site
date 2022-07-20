// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3fB5Geb8SMv9C5sL6fAgbJ4yHdgS31UU",
  authDomain: "egmun-25bd2.firebaseapp.com",
  projectId: "egmun-25bd2",
  storageBucket: "egmun-25bd2.appspot.com",
  messagingSenderId: "104400779419",
  appId: "1:104400779419:web:8cbb2aa00a02a3c0582e3e",
  measurementId: "G-NB26NG69YZ",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let analytics: Analytics, auth: Auth, firestore: Firestore;
if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
  auth = getAuth(app);
  firestore = getFirestore(app);
}
export { app, analytics, auth, firestore };
