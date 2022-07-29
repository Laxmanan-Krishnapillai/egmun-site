// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp, getApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { getAuth, Auth } from 'firebase/auth';
import {
  getFirestore,
  Firestore,
  CACHE_SIZE_UNLIMITED,
} from 'firebase/firestore';
import { enableIndexedDbPersistence } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
      apiKey: 'AIzaSyD3fB5Geb8SMv9C5sL6fAgbJ4yHdgS31UU',
      authDomain: 'egmun-25bd2.firebaseapp.com',
      projectId: 'egmun-25bd2',
      storageBucket: 'egmun-25bd2.appspot.com',
      messagingSenderId: '104400779419',
      appId: '1:104400779419:web:8cbb2aa00a02a3c0582e3e',
      measurementId: 'G-NB26NG69YZ',
      cacheSizeBytes: CACHE_SIZE_UNLIMITED,
    };
    return initializeApp(firebaseConfig);
  }
}

const app = initializeAppIfNecessary();
let analytics: Analytics, auth: Auth, firestore: Firestore;
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  auth = getAuth(app);
  firestore = getFirestore(app);
  enableIndexedDbPersistence(firestore).catch((err) => {
    if (err.code == 'failed-precondition') {
      console.error(err.code && 'Failed to enable IndexedDB persistence');
    } else if (err.code == 'unimplemented') {
      console.error(
        err.code && 'Not all features of IndexedDB persistence is available'
      );
    }
  });
}
export { app, analytics, auth, firestore };
