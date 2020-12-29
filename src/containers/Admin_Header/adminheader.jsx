import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const Adminheader =() => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

        <Nav className="ml-auto">
          <NavDropdown title="Admin Choice" id="basic-nav-dropdown">
            <li className="nav-item">
              <NavLink to="login" className="nav-link">
                Login
              </NavLink>
            </li>{" "}
            <br />{" "}
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                SignUp
              </NavLink>
            </li>
          </NavDropdown>
        </Nav>
      </Navbar>
        </div>
    )
}

export default Adminheader ;