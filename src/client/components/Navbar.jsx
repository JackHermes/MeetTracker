import React from 'react';
import {ButtonGroup, DropdownButton, MenuItem, Button, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router';

const buttonGroupInstance = (
  <ButtonGroup>
    <DropdownButton bsStyle="success" title="Dropdown">
      <MenuItem key="1">Dropdown link</MenuItem>
      <MenuItem key="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button bsStyle="info">Middle</Button>
    <Button bsStyle="info">Right</Button>
  </ButtonGroup>
);
const navbar = (
  <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="#">Meet Tracker</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">Enter Results</NavItem>
    <NavItem eventKey={2} href="#">View Results</NavItem>
    <NavDropdown eventKey={3} title="Pages" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Coaches</MenuItem>
      <MenuItem eventKey={3.2}>Athletes</MenuItem>
      <MenuItem eventKey={3.3}>Teams</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>About Meet Tracker</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
)

export default () => (
  <div>{navbar}</div>
);