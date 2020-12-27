import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Routing from './Routing';
import firebase from './services/firebaseservice';
// import {Routes} from "react-router-dom"



function App() {
  React.useEffect(() => {
    const messaging = firebase.messaging();
    function initNotification() {
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
            initNotification()

} , []);

  return (
    <>
      <Router>
        <Routing/>
      </Router>
    </>
  );
}

export default App;
