import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDDu-Z3DqK5itAztm5HZPTlR2EMbZk55uo",
    authDomain: "schoolattendenceapp-b0d7b.firebaseapp.com",
    projectId: "schoolattendenceapp-b0d7b",
    storageBucket: "schoolattendenceapp-b0d7b.appspot.com",
    messagingSenderId: "234162910186",
    appId: "1:234162910186:web:ebe8f936c1a288e3ab3893",
    measurementId: "G-KQP7WMMWBL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.database()