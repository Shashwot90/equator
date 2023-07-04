import React from "react";
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
const Navbarr = () => {
  return (
    <>
     <Navbar className="nav-bar" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  navbar navbar-expand-lg navbar-dark">
          <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
            <Nav.Link to="/" className="navbar-brand"><Link to="/">Home</Link></Nav.Link>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown" className="navbar-nav mr-auto">
              <NavDropdown.Item href="#action/3.1">About Company</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                About Nepal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Recruitment Process</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Message From MD
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Why Us?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/job-sector" className="navbar-nav mr-auto"><Link to="/job-sector">JOB SECTORS</Link></Nav.Link>
            <Nav.Link href="#pricing" className="navbar-nav mr-auto">DOCUMENTATION</Nav.Link>
            <Nav.Link href="#pricing" className="navbar-nav mr-auto">GALLERY</Nav.Link>
            <Nav.Link href="#pricing" className="navbar-nav mr-auto">CONTACT</Nav.Link>
            </div>
            <div className="ml-auto mar">
                <a
                  className="btn"
                  href="http://equintl.demo.radiantnepal.com/jobapply"
                >
                  Apply Now
                </a>
              </div>
            </div> 
          </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
      
    </>
  );
};

export default Navbarr;
