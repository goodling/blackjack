import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECTID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECTID}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECTID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;