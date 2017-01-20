import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

// import Form from './Form.jsx';
// import Navbar from './Navbar.jsx';

export default class Teams extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Athlete: '',
      Team: ''
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
    if (!this.state.Athlete || !this.state.Team) {
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

    fetch('/add/athlete', request).then((response) => {
      console.log(response);
    }).catch((err) => {console.log(err);})

    // clear form fields
    this.setState({Athlete: '', Team: ''});
  }

  render() {

    return (
        <form onSubmit={this.handleSubmit} style={{width: '30%', margin: 'auto', display: 'block'}}>
          <FormGroup>
            <ControlLabel style={{width: '50%', margin: 'auto', display: 'block'}}>
              Enter Athlete Information
            </ControlLabel>
            <FormControl
              type='text'
              placeholder='Athlete'
              value={this.state.Athlete}
              onChange={this.handleChange}
              style={{width: '70%', margin: 'auto', display: 'block'}}
            />
            <FormControl
              type='text'
              placeholder='Team'
              value={this.state.Team}
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
    )
  }
}