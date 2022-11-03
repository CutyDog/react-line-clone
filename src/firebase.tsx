import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMSHN9-gm3jhLdgWmtLfC1oxU08kbuDhg",
  authDomain: "react-line-clone-c369a.firebaseapp.com",
  projectId: "react-line-clone-c369a",
  storageBucket: "react-line-clone-c369a.appspot.com",
  messagingSenderId: "370884171578",
  appId: "1:370884171578:web:fe765e2fe1ca100db46203"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
