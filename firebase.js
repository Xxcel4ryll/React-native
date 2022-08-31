// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDWCoI4Kjp7M5TDRHDo8hImIfKdUIXKTd4',
  authDomain: 'crud-app-45a6a.firebaseapp.com',
  databaseURL: 'https://crud-app-45a6a-default-rtdb.firebaseio.com',
  projectId: 'crud-app-45a6a',
  storageBucket: 'crud-app-45a6a.appspot.com',
  messagingSenderId: '86159011149',
  appId: '1:86159011149:web:2e63a147f8f19da6bf5b04',
  measurementId: 'G-TK33QW52RP',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
