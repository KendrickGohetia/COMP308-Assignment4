import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import AddData from './components/AddData';
import Result from './components/Result';

//
function App() {

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/adddata">Add Data</Nav.Link>
            <Nav.Link href="/result">Result</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>          
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < AddData />} path="/adddata" />
          <Route render ={()=> < Result />} path="/result" />
      </div>

    </Router>


  );
}
//<Route render ={()=> < App />} path="/" />
export default App;
