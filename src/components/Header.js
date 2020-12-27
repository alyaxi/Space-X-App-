import React from "react";
import logo from "./../images/1.png";
import "./../App.css";
import {NavLink} from "react-router-dom"
import {Nav, Navbar} from 'react-bootstrap'

export default function Header() {
  
  return (
    <div className="header-nav">
<Navbar
      collapseOnSelect
      className="header-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Navbar.Brand className="px-5 logo" >
      <NavLink to="/">
      <img src={logo} alt="logo" className="logo" width="250px" />
      </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end px-5"
        id="responsive-navbar-nav"
      >
        <Nav>
          <NavLink
            exact
            className="anchor"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            className="anchor"
            to="/missions"

          >
            Launches
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</div>
      
    
  );
}
