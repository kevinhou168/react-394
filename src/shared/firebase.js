import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAX2fifj9S3IlIMnxMUDKwOhJpqjpLHsdk",
  authDomain: "course-scheduler-92762.firebaseapp.com",
  databaseURL: "https://course-scheduler-92762.firebaseio.com",
  projectId: "course-scheduler-92762",
  storageBucket: "course-scheduler-92762.appspot.com",
  messagingSenderId: "267946152949",
  appId: "1:267946152949:web:5fdfd418cc7ba7060186bc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;