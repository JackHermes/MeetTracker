import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

import Form from './Form.jsx';
import Navbar from './Navbar.jsx';

export default class EnterResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   console.log(event)
  //   this.setState({value: event.target.value});
  // }
  //
  // handleSubmit(event) {
  //   console.log(event);
  //   alert('An event was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
    <div>
      <Navbar />
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          style={{width: '30%', paddingLeft: '5%'}}>
          <ControlLabel>Enter Race Results</ControlLabel>
          <Form
            type="text"
            placeholder="Event"
          />
          <Form
            type="text"
            placeholder="Athlete"
          />
          <Form
            type="text"
            placeholder="Time"
          />
          {/* <FormControl.Feedback /> */}
          {/* <HelpBlock>...</HelpBlock> */}
          <Button bsStyle="primary">Submit</Button>
        </FormGroup>
      {/*<label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" /> */}
      </form>
    </div>
    );
  }
}