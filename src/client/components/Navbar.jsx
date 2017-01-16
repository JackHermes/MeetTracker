import React from 'react';
import {ButtonGroup, DropdownButton, MenuItem, Button, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router';

const navbar = (
  <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Meet Tracker</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1}>
      <Link to='/enterResults'>Enter Results</Link>
    </NavItem>

      <NavItem eventKey={2}>
        <Link to='/results'>View Results</Link>
      </NavItem>

      {/* <NavItem eventKey={2}>
        <Link to='/bootleg'>View Boots</Link>
      </NavItem> */}

    <NavDropdown eventKey={3} title="Pages" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Coaches</MenuItem>
      <MenuItem eventKey={3.2}>Athletes</MenuItem>
      <MenuItem eventKey={3.3}>
        <Link to='/teams'>Teams</Link>
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>About Meet Tracker</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
)

export default () => (
  <div>{navbar}</div>
);