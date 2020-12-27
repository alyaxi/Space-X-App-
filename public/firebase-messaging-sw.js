importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


let firebaseConfig = {
    apiKey: "AIzaSyD23mZS1IWITUHuJwz-Gyq-sw-6c7fPKhg",
    authDomain: "spacex-app-a0b88.firebaseapp.com",
    projectId: "spacex-app-a0b88",
    storageBucket: "spacex-app-a0b88.appspot.com",
    messagingSenderId: "444737796792",
    appId: "1:444737796792:web:fe67110a27dc6cfde7924d"
  };
firebase.initializeApp(firebaseConfig);
firebase.messaging();