import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

import Form from './Form.jsx';
import Navbar from './Navbar.jsx';

export default class EnterResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      athlete: '',
      time: ''
    };

    // this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target)
    this.setState({event: event.target.value});
  }

  handleSubmit(event) {
    console.log(event);
    this.setState({event: '', athlete: '', time: '', school: ''})
    // alert('An event was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <Navbar />
      <form> {/* onSubmit={this.handleSubmit}> */}
        <FormGroup
          controlId="formBasicText"
          style={{width: '30%', paddingLeft: '5%'}}>
          <ControlLabel>Enter Race Results</ControlLabel>
          <Form
            type="text"
            placeholder="Event"
            value={this.state.event}
            handleChange={this.handleChange}
            // onChange={this.handleFieldChange}
          />
          <Form
            type="text"
            placeholder="Athlete"
            value={this.state.athlete}
            handleChange={this.handleChange}
          />
          <Form
            type="text"
            placeholder="Performance"
            value={this.state.time}
            handleChange={this.handleChange}
          />
          <Form
            type="text"
            placeholder="School"
            value={this.state.event}
            handleChange={this.handleChange}
            // onChange={this.handleFieldChange}
          />
          {/* <FormControl.Feedback /> */}
          {/* <HelpBlock>...</HelpBlock> */}
          <Button
            bsStyle="primary"
            onClick={this.handleSubmit}>Submit</Button>
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