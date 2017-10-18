import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDc5H9Tlo_GbWJw7O-MHnjpb0zDy53SWuQ",
  authDomain: "blackjackapp-34992.firebaseapp.com",
  databaseURL: "https://blackjackapp-34992.firebaseio.com",
  projectId: "blackjackapp-34992",
  storageBucket: "blackjackapp-34992.appspot.com",
  messagingSenderId: "683020977962"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;