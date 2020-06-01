import firebase from "firebase";
require("dotenv").config();
var config = {
  apiKey: process.env.apiKey,
  authDomain: "openhouse-ec8ed.firebaseapp.com",
  databaseURL: "https://openhouse-ec8ed.firebaseio.com",
  projectId: "openhouse-ec8ed",
  storageBucket: "openhouse-ec8ed.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

firebase.initializeApp(config);

export default firebase;
