import React, { Component } from 'react';
import { Navbar, NavItem, NavLink, Nav, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';

const logo = require('../Assets/logo.png');

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="#">
          <img src={logo} alt="Logo" width="36" /> Batman
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
