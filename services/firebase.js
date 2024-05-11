import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCQmpjeD4R7okThgmKJ1PIPL0Y3MXZs8-U",
  authDomain: "exnprofit.firebaseapp.com",
  projectId: "exnprofit",
  storageBucket: "exnprofit.appspot.com",
  messagingSenderId: "75083821682",
  appId: "1:75083821682:web:39c2076fa6b61cc4d108eb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const db = firebase.firestore();
export const st = firebase.storage();
