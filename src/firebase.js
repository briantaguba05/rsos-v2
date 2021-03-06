import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD3XMpRjJFTsT5U97lowJvqDyO_ipjIKwg",
  authDomain: "rsos-705e9.firebaseapp.com",
  projectId: "rsos-705e9",
  storageBucket: "rsos-705e9.appspot.com",
  messagingSenderId: "733901279972",
  appId: "1:733901279972:web:fec79361ef80c248a052f1",
  measurementId: "G-H3H5T3WCL0",
};

const fire = firebase.initializeApp(firebaseConfig);
require("firebase/firestore");
const firedb = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default fire;
