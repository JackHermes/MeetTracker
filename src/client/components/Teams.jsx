import React from 'react';
import {Button, ControlLabel, FormGroup} from 'react-bootstrap';

import Form from './Form.jsx';
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
        <FormGroup style={{width: '30%', paddingLeft: '5%'}}>
          <ControlLabel>Enter Athlete Information</ControlLabel>
          <Form
            type='text'
            placeholder='Athlete'/>
            <Form
              type='text'
              placeholder='Team'/>
          <Button bsStyle="Submit" onClick={console.log("Click.")}>Submit</Button>
        </FormGroup>
      </div>
    )
  }
}