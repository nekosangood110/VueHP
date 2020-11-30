import firebase from "firebase";

const config = {
  apiKey: "AIzaSyByUpy1OLNglpXhVlDCIg_ywiEKbdtXXdY",
  authDomain: "my-vue-contact.firebaseapp.com",
  databaseURL: "https://my-vue-contact.firebaseio.com",
  projectId: "my-vue-contact",
  storageBucket: "my-vue-contact.appspot.com",
  messagingSenderId: "G-EZVWN39VX2"
};
firebase.initializeApp(config);
export const functions = firebase.functions();