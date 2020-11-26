import firebase from 'firebase/app'; 

import 'firebase/functions';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCyUXauvo9TiCW-7_9f5BChHlbFCaaUPiU",
    authDomain: "conexionyconsciencia-75349.firebaseapp.com",
    databaseURL: "https://conexionyconsciencia-75349.firebaseio.com",
    projectId: "conexionyconsciencia-75349",
    storageBucket: "conexionyconsciencia-75349.appspot.com",
    messagingSenderId: "837538929871",
    appId: "1:837538929871:web:7eddfc3315b94c59c0abba",
    measurementId: "G-JNXVPLT337"
  });
    

  


const functions = firebase.functions();
export { functions ,firebaseConfig};