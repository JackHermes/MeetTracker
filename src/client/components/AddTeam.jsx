import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

// import Form from './Form.jsx';
// import Navbar from './Navbar.jsx';

export default class Teams extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.placeholder]: event.target.value});
    console.log('change', event.target.placeholder, this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    // Prevent empty submissions
    if (!this.state.Name) {
      alert("Please fill in all fields.");
      return;
    }
    let data = JSON.stringify(this.state);
    // send data to server
    let request = {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: data
    };

    fetch('/MeetTracker/add/team', request).then((response) => {
      console.log(response);
    }).catch((err) => {console.log(err);})

    // clear form fields
    this.setState({Name: ''});
  }

  render() {

    return (
      <div style={{width: '30%', margin: 'auto', display: 'block'}}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel style={{width: '50%', margin: 'auto', display: 'block'}}>
              Enter Team or School Name
            </ControlLabel>
            <FormControl
              type='text'
              placeholder='Name'
              value={this.state.Name}
              onChange={this.handleChange}
              style={{width: '70%', margin: 'auto', display: 'block'}}
            />
            <Button
              type="submit"
              bsStyle="primary"
              style={{width: '30%', margin: 'auto', display: 'block'}}>
              Submit
            </Button>
          </FormGroup>
        </form>
      </div>
    )
  }
}