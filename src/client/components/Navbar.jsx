import React from 'react';
import {ButtonGroup, DropdownButton, Image, MenuItem, Button, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router';

export default () => (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Meet Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <Link to='/add/eventResults'>Enter Results</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/results'>View Results</Link>
          </NavItem>
            <MenuItem eventKey={3}>
              <Link to='/coaches'>Coaches</Link>
            </MenuItem>
          </Nav>

          <Nav pullRight>
            <MenuItem eventKey={6}>
              <Link to='/about'>About Meet Tracker</Link>
            </MenuItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);