import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyBoqiBv0hFcXS1T4E0SsLy8fQZVQKI6iQ0',
  authDomain: 'aula-d7578.firebaseapp.com',
  projectId: 'aula-d7578',
  storageBucket: 'aula-d7578.appspot.com',
  messagingSenderId: '402427181207',
  appId: '1:402427181207:web:2ae0eccd896b4e7b5b91d2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
