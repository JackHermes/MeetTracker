import React from 'react';
import {ButtonGroup, DropdownButton, Image, MenuItem, Button, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router';

export default () => (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/MeetTracker/">Meet Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <Link to='/MeetTracker/add/eventResults'>Enter Results</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/MeetTracker/results'>View Results</Link>
          </NavItem>
            <MenuItem eventKey={3}>
              <Link to='/MeetTracker/coaches'>Coaches</Link>
            </MenuItem>
          </Nav>

          <Nav pullRight>
            <MenuItem eventKey={6}>
              <Link to='/MeetTracker/about'>About Meet Tracker</Link>
            </MenuItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);