import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Routing from './Routing';
// import {Routes} from "react-router-dom"



export default function App() {


  return (
    <div className="App">
      <Router>
        <Routing/>
      </Router>
    </div>
  );
}


