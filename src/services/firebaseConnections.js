import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {

  apiKey: "AIzaSyAyp68Fn1s5t3X6ljqKLhv55GRUhnz2w3E",

  authDomain: "tarefas-5467d.firebaseapp.com",

  projectId: "tarefas-5467d",

  storageBucket: "tarefas-5467d.appspot.com",

  messagingSenderId: "1029304598672",

  appId: "1:1029304598672:web:99b70b6730e3e05f0c9815"

};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;