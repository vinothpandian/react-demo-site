import React from 'react';
import { Navbar, NavItem, NavLink, Nav, NavbarBrand } from 'reactstrap';

const logo = require('../Assets/logo.png');

const Navigation = () => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="#">
      <img src={logo} alt="Logo" width="36" /> Batman
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="#">Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Contact</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
