import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An event was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <Navbar />
      <form onSubmit={this.handleSubmit}>
        <FormGroup style={{width: '70%', paddingLeft: '5%'}}>
          <ControlLabel>Enter Race Results</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Event"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Athlete"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Time"
            onChange={this.handleChange}
          />
          {/* <FormControl.Feedback /> */}
          <HelpBlock>...</HelpBlock>
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