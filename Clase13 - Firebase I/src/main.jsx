import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnj1V_rNxKmmx4WFLHVashumb5IwIbSvI",
  authDomain: "clase13-ejemplo.firebaseapp.com",
  projectId: "clase13-ejemplo",
  storageBucket: "clase13-ejemplo.appspot.com",
  messagingSenderId: "792920610549",
  appId: "1:792920610549:web:54f8a479ce3283033257bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
