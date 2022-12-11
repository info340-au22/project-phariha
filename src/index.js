import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD14LkQ-Zdy5rDdNvQeQ8AhERTr_-HG2nI",
  authDomain: "info340-groupab5.firebaseapp.com",
  projectId: "info340-groupab5",
  storageBucket: "info340-groupab5.appspot.com",
  messagingSenderId: "830059922825",
  appId: "1:830059922825:web:b9017593a98e87cbc20d58",
  databaseURL: "https://info340-groupab5-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
