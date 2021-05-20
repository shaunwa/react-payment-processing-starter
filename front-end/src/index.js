import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

var firebaseConfig = {
    apiKey: "AIzaSyB4TTpMc4CLYfJDa_TNHCrzHL7aJokjVlc",
    authDomain: "react-pp-may-2021.firebaseapp.com",
    projectId: "react-pp-may-2021",
    storageBucket: "react-pp-may-2021.appspot.com",
    messagingSenderId: "1052901296831",
    appId: "1:1052901296831:web:36757d50353ba76bd9540a"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
