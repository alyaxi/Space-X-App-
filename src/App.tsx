import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Routing from './Routing';
import firebase from './services/firebaseservice';
// import {Routes} from "react-router-dom"



function App() {
  React.useEffect(() => {

    const messaging = firebase.messaging();
    messaging.requestPermission().then(async (): Promise<void> => {
      const token = await messaging.getToken();
      prompt("Welcome to SpaceX \n Token", token);
    })

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
