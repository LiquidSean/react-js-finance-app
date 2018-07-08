import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyCzSukjC23k1fTiLiQEDfVG5a_-WDyMMr0',
  authDomain: 'finance-app-9099c.firebaseapp.com',
  databaseURL: 'https://finance-app-9099c.firebaseio.com',
  projectId: 'finance-app-9099c',
  storageBucket: 'finance-app-9099c.appspot.com',
  messagingSenderId: '793643547458',
};

firebase.initializeApp(config);
const database = firebase.firestore()
const auth = firebase.auth();
export { database, auth }