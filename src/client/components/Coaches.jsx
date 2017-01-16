import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

// import Form from './Form.jsx';
import AddAthlete from './AddAthlete.jsx';
import AddTeam from './AddTeam.jsx';
import Navbar from './Navbar.jsx';

export default class Teams extends React.Component {
  constructor(props){
    super(props);

    this.state = {};

  }


  render() {
    return (
      <div>
        <Navbar />
        <AddAthlete />
        <AddTeam />
      </div>
    )
  }
}