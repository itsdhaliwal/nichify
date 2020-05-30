import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyAixdNJ9FJ556hc9ho1TpmuiOB5mfVAf0o",
  authDomain: "nichify-7ad0a.firebaseapp.com",
  databaseURL: "https://nichify-7ad0a.firebaseio.com",
  projectId: "nichify-7ad0a",
  storageBucket: "nichify-7ad0a.appspot.com",
  messagingSenderId: "19448497574",
  appId: "1:19448497574:web:5ea710480e5e18d870bb67",
  measurementId: "G-C05FDF45CX",
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
    this.functions = app.functions();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  user = (uid) => this.db.ref(`users/${uid}`);
  //storage = this.storage.ref();
}

export default Firebase;
