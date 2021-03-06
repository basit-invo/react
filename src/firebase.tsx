import firebase from 'firebase';
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAvhUmUwQfcO5CvjSRrjFLq9vIcPZMqwqU',
  authDomain: 'react-project-9f15e.firebaseapp.com',
  projectId: 'react-project-9f15e',
  storageBucket: 'react-project-9f15e.appspot.com',
  messagingSenderId: '496956651828',
  appId: '1:496956651828:web:9a58ef86e3bb5cdd9bcd61',
});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { storage, db as default };
