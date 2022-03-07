module.exports = {
  //purge: [],
  purge:{
     content:['./src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'],
  safelist:[
    /^bg-/,
    /^to-/,
    /^from-/,
  ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVmjRmDrVHseb0XOvD0Kn_7SMQK-0jQqw",
  authDomain: "next-crud-549ac.firebaseapp.com",
  projectId: "next-crud-549ac",
  storageBucket: "next-crud-549ac.appspot.com",
  messagingSenderId: "483785853665",
  appId: "1:483785853665:web:aa47b75f93de605eb605a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */