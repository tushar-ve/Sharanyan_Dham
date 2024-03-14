import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../assets/logo-small.png";
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  const [navbarBg, setNavbarBg] = useState('navbar-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop) {
        setNavbarBg('navbar-transparent');
      } else {
        setNavbarBg('navbar-dark bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`fixed-top ${navbarBg}`}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/" className="ms-2">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Sharayanadham
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavLink style={{color: 'rgb(255 255 255)', textDecoration: "none", marginRight: '15px'}} to="/">Home</NavLink>
          <NavLink style={{color: 'rgb(255 255 255)', textDecoration: "none", marginRight: '15px'}} to="/about">About</NavLink>
          <NavLink style={{color: 'rgb(255 255 255)', textDecoration: "none", marginRight: '15px'}} to="#services">Services</NavLink>
          <NavLink style={{color: 'rgb(255 255 255)', textDecoration: "none", marginRight: '15px'}} to="/contactus">Contact</NavLink>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
