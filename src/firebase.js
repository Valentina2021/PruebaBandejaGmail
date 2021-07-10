import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxSgJqq0LxfsWyJF5cn3o3jJmDiEzI5V8",
    authDomain: "bd-1bc32.firebaseapp.com",
    projectId: "bd-1bc32",
    storageBucket: "bd-1bc32.appspot.com",
    messagingSenderId: "476028685732",
    appId: "1:476028685732:web:e92aa46d5cdc4efbc88531"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db , auth, provider};
