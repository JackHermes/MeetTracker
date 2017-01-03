import React from 'react';
import {ButtonGroup, DropdownButton, MenuItem, Button, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';

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
      <a href="#">Meet Tracker</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">Enter Results</NavItem>
    <NavItem eventKey={2} href="#">View Results</NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
)

export default () => (
  <div>{navbar}</div>
);