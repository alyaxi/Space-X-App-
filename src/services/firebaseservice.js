import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyD23mZS1IWITUHuJwz-Gyq-sw-6c7fPKhg",
    authDomain: "spacex-app-a0b88.firebaseapp.com",
    projectId: "spacex-app-a0b88",
    storageBucket: "spacex-app-a0b88.appspot.com",
    messagingSenderId: "444737796792",
    appId: "1:444737796792:web:fe67110a27dc6cfde7924d"
  };
  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging();
export default function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted'){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token: ");
                    console.log(currentToken);
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                
              });
        }
    
    })
}