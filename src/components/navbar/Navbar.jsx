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
            <Nav.Link to="/" className="navbar-brand"><Link to="/" style={{ color: '#fff'}}>Home</Link></Nav.Link>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown" className="navbar-nav mr-auto">
              <NavDropdown.Item href="#action/3.1"><Link to="/about-company" style={{ color: '#fff'}}>About Company</Link></NavDropdown.Item>
              <NavDropdown.Item href="/about-nepal"><Link to="/about-nepal" style={{ color: '#fff'}}>
                About Nepal</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/recruitment" style={{ color: '#fff'}}>Recruitment Process</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><Link to="/fromMD" style={{ color: '#fff'}}>
                Message From MD</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"><Link to="/why-us" style={{ color: '#fff'}}>
                Why Us?</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/job-sector" className="navbar-nav mr-auto"><Link to="/job-sector" style={{ color: '#fff'}}>JOB SECTORS</Link></Nav.Link>
            <Nav.Link href="#pricing" className="navbar-nav mr-auto"><Link to="/documentation" style={{ color: '#fff'}}>DOCUMENTATION</Link></Nav.Link>
            <Nav.Link href="#pricing" className="navbar-nav mr-auto"><Link to="/gallery1" style={{ color: '#fff'}}>GALLERY</Link></Nav.Link>
            <Nav.Link href="#pricing" className="navbar-nav mr-auto"><Link to="/contact" style={{ color: '#fff'}}>CONTACT</Link></Nav.Link>
            </div>
            <div className="ml-auto mar">
                <a
                  className="btn"
                  href="/apply"
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
