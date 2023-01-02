import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_KEY,
  // apiKey: "AIzaSyD9GstPk1p2EcZLHLA6g9qMNqgY8BV2zVc",
  // authDomain: "shop-1813b.firebaseapp.com",
  // databaseURL: "https://shop-1813b-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "shop-1813b",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
    }).catch(console.error);
}

