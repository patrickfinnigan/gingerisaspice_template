import firebase from "firebase/app";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyCUIs5ptbiaMY6d6ZPZ2dRgEnZaeHmxYbQ",
  authDomain: "gingerisaspice-art-portfolio.firebaseapp.com",
  projectId: "gingerisaspice-art-portfolio",
  storageBucket: "gingerisaspice-art-portfolio.appspot.com",
  messagingSenderId: "1000914100251",
  appId: "1:1000914100251:web:e12235b29124e59dc758be"
});

const storage = firebase.storage();

export { firebase, storage as default };