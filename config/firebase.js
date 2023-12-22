// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD80LmaEmhwI6kspdXU_NVeYNuxb05z25U",
  authDomain: "chatapp-6099d.firebaseapp.com",
  projectId: "chatapp-6099d",
  storageBucket: "chatapp-6099d.appspot.com",
  messagingSenderId: "612789746555",
  appId: "1:612789746555:web:251ef26e435e7da1809bde",
  measurementId: "G-R93D5H7898"
};

// const firebaseConfig = {
//     apiKey: Constants.manifest.extra.apiKey,
//     authDomain: Constants.manifest.extra.authDomain,
//     projectId: Constants.manifest.extra.projectId,
//     storageBucket: Constants.manifest.extra.storageBucket,
//     messagingSenderId: Constants.manifest.extra.messagingSenderId,
//     appId: Constants.manifest.extra.appId,
//     databaseURL: Constants.manifest.extra.databaseURL
//     };
    // initialize firebase
    
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);