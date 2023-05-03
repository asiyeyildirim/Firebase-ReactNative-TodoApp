import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAPjBm-c3lVxzZDiiI_8UJkHjmcvUaj3Ls",
  authDomain: "todo-617c8.firebaseapp.com",
  projectId: "todo-617c8",
  storageBucket: "todo-617c8.appspot.com",
  messagingSenderId: "153628383848",
  appId: "1:153628383848:web:886c5e3d4cc793d2ccf9dd"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };