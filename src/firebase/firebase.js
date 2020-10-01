import * as firebase from "firebase/app";
import "firebase/database";
// import "firebase/firestore"; //for the database
// import "firebase/auth"; // the auth these two are the base import
// import "firebase/storage";

const firebaseConfig1 = {
  apiKey: "AIzaSyDoZ3_DssSMbENAQHk9G7_1kw2TXMeklmg",
  authDomain: "js3-lessons-lastone.firebaseapp.com",
  databaseURL: "https://js3-lessons-lastone.firebaseio.com",
  projectId: "js3-lessons-lastone",
  storageBucket: "js3-lessons-lastone.appspot.com",
  messagingSenderId: "814817803380",
  appId: "1:814817803380:web:985178965bb0a0d581a521",
  measurementId: "G-N9WMGRBX5T",
};

const firebaseConfig2 = {
  authDomain: "js-lessons-a0fc7.firebaseapp.com",
  databaseURL: "https://js-lessons-a0fc7.firebaseio.com",
  projectId: "js-lessons-a0fc7",
  storageBucket: "js-lessons-a0fc7.appspot.com",
  messagingSenderId: "847970990199",
  appId: "1:847970990199:web:e451a463fd5b72ad3fae72",
  measurementId: "G-EC7MRCPFN5",
};

firebase.initializeApp(firebaseConfig1);
// firebase.initializeApp(firebaseConfig2);

// export const firestore = firebase.firestore();
// export const auth = firebase.auth();
// export const storage = firebase.storage();

export default firebase;
