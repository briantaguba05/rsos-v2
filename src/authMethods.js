import firebase from "./firebase";

export const googleProvider = () => new firebase.auth.GoogleAuthProvider();
export const facebookProvider = () => new firebase.auth.FacebookProvider();

//export const signInWithGoogle = () => auth.signInWithPopup(provider);
