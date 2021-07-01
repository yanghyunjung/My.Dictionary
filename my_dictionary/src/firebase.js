import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // config
        apiKey: "AIzaSyBzLx9Jo-ZcMjSKFKQcpqyLQtHTEurZDAQ",
        authDomain: "my-dictionary-4dd7a.firebaseapp.com",
        projectId: "my-dictionary-4dd7a",
        storageBucket: "my-dictionary-4dd7a.appspot.com",
        messagingSenderId: "967607769164",
        appId: "1:967607769164:web:5934d87f576e5ce551bce9",
        measurementId: "G-4HJ6802Z35"
      };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};