import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEsuMEeS3pYtf5lRA1qAnVUTU-zhLY4Mk",
  authDomain: "laundary-1b595.firebaseapp.com",
  projectId: "laundary-1b595",
  storageBucket: "laundary-1b595.appspot.com",
  messagingSenderId: "899710778155",
  appId: "1:899710778155:web:ad29a2e4521eff26dae36e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth, db};