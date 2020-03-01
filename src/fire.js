import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbwVKS4mZ_87-QbS4NGGyGiuJn-fOJ9sw",
    authDomain: "u10p01b-apilol.firebaseapp.com",
    databaseURL: "https://u10p01b-apilol.firebaseio.com",
    projectId: "u10p01b-apilol",
    storageBucket: "u10p01b-apilol.appspot.com",
    messagingSenderId: "522854679561",
    appId: "1:522854679561:web:6bf4ea57e3c480071364d8"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;