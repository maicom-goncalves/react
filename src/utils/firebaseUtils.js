import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJR63_r36UL9p5fZ19b7sCFcCs-S0FP7I",
    authDomain: "aiquefome-3945f.firebaseapp.com",
    databaseURL: "https://aiquefome-3945f.firebaseio.com",
    projectId: "aiquefome-3945f",
    storageBucket: "aiquefome-3945f.appspot.com",
    messagingSenderId: "29092195463"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();