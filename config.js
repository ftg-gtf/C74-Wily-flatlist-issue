
import  firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyApCRhr40HTeCYVdq25A9BJM_BOxmkO2zk",
    authDomain: "c71-willy-app.firebaseapp.com",
    projectId: "c71-willy-app",
    storageBucket: "c71-willy-app.appspot.com",
    messagingSenderId: "387486011041",
    appId: "1:387486011041:web:efa081893ae69a865faae0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()