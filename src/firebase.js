import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdXwB9Vl4-4cn3lkI53iRY_ogWAHPxVZ8",
  authDomain: "proj-1--clone.firebaseapp.com",
  projectId: "proj-1--clone",
  storageBucket: "proj-1--clone.appspot.com",
  messagingSenderId: "841139214554",
  appId: "1:841139214554:web:0400ef601036656aa76de3",
  measurementId: "G-4X9LPEDGCF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();
const auth = firebaseApp.auth();
export { db, auth };
