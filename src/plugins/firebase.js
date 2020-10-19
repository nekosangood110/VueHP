import firebase from "firebase";

const config = {
  apiKey: "xxxxxx",
  authDomain: "xxxxxx.firebaseapp.com",
  databaseURL: "xxxxxx.firebaseio.com",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx.appspot.com",
  messagingSenderId: "xxxxxx"
};
firebase.initializeApp(config);
export const functions = firebase.functions();