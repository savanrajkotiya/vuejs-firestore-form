// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAz82_vzqXGpGTtI59l_gJ2OJqMZtfVVo4",
    authDomain: "vue-firestore-c8a57.firebaseapp.com",
    databaseURL: "https://vue-firestore-c8a57.firebaseio.com",
    projectId: "vue-firestore-c8a57",
    storageBucket: "vue-firestore-c8a57.appspot.com",
    messagingSenderId: "291681668637",
    appId: "1:291681668637:web:07457a1677c2f0987cc0f4"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);