import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDddqabQ7-R7382RcfatUlWtKE2X2xY_GI",
  authDomain: "kaimosi-rotary-club-8edf8.firebaseapp.com",
  projectId: "kaimosi-rotary-club-8edf8",
  storageBucket: "kaimosi-rotary-club-8edf8.appspot.com",
  messagingSenderId: "133274711001",
  appId: "1:133274711001:web:77a1d0de735a7c75d2dfc8",
  measurementId: "G-KG73L5MMK2",
});

var db = firebaseApp.firestore();

export { db };

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDddqabQ7-R7382RcfatUlWtKE2X2xY_GI",
//   authDomain: "kaimosi-rotary-club-8edf8.firebaseapp.com",
//   projectId: "kaimosi-rotary-club-8edf8",
//   storageBucket: "kaimosi-rotary-club-8edf8.appspot.com",
//   messagingSenderId: "133274711001",
//   appId: "1:133274711001:web:77a1d0de735a7c75d2dfc8",
//   measurementId: "G-KG73L5MMK2",
// };
