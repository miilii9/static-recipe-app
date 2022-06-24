import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWnCqK--39ihWetqpEZu1eXdJI4BhkgG0",
  authDomain: "cooking-learning-project.firebaseapp.com",
  projectId: "cooking-learning-project",
  storageBucket: "cooking-learning-project.appspot.com",
  messagingSenderId: "378231001565",
  appId: "1:378231001565:web:32efb65e80b4ae65796634",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
