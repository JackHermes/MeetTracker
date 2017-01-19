import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import {Link} from 'react-router';

// import Form from './Form.jsx';
import AddAthlete from './AddAthlete.jsx';
import AddTeam from './AddTeam.jsx';
import Navbar from './Navbar.jsx';
import CurrentScore from './CurrentScore.jsx';
import Weather from './Weather.jsx';

export default class Teams extends React.Component {
  constructor(props){
    super(props);

    this.state = {};

  }


  render() {
    return (
      <div>
        <Navbar />
        <Weather />
        <CurrentScore>
          <Link to='/score'>Current Score</Link>
        </CurrentScore>
        <AddAthlete />
        <AddTeam />
      </div>
    )
  }
}