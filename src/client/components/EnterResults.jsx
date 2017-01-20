import React from 'react';
import {Button, ButtonGroup, ControlLabel, DropdownButton, FormControl, FormGroup, HelpBlock, ListGroup, ListGroupItem, MenuItem, SplitButton} from 'react-bootstrap';

import Form from './Form.jsx';
import Navbar from './Navbar.jsx';

export default class EnterResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: '',
      Athlete: '',
      Performance: '',
      Team: '',
      allResults: [],
      title: 'Select Event'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddResult = this.handleAddResult.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.placeholder]: event.target.value});
    console.log('change', event.target.placeholder, this.state)
  }

  handleAddResult(event) {
    event.preventDefault();
    let result = {
      Event: this.state.Event,
      Athlete: this.state.Athlete,
      Performance: this.state.Performance,
      Team: this.state.Team
    };
    let allResults = this.state.allResults.slice();

    allResults.push(result);
    this.setState({Athlete: '', Performance: '', Team: ''});
    this.setState({allResults: allResults});
  }

  handleAddEvent(eventKey, event) {
    const eventList = [
      'DQ', '100m', '100m Hurdles', '110m Hurdles', '200m', '400m', '400m Hurdles', '800m', '1500m', '3000m Steeplechase', '5000m', '10000m', '4x100m', '4x400m',
      'High Jump', 'Pole Vault', 'Long Jump', 'Triple Jump', 'Shot Put', 'Discus', 'Hammer', 'Javelin'
    ];
    this.setState({Event: eventList[eventKey], title: eventList[eventKey]})
    console.log(eventList[eventKey]);
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = JSON.stringify(this.state.allResults);
    let request = {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: data
    };

    fetch('/add/results', request).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err)}
    )
      console.log("EnterResults", this.state)
      this.setState({allResults: ''});
  }

  render() {

    let listEntries = (item, index) => (
      <ListGroupItem header={`${item.Athlete}`}>{`${item.Event}, ${item.Performance}, ${item.Team}`}</ListGroupItem>
    )

    return (
    <div>
      <Navbar />
      <form onSubmit={this.handleAddResult} style={{width: '30%', display: 'block', margin: 'auto'}}>
        <h2 style={{width: '60%', display: 'block', margin: 'auto'}}>Enter Event Results</h2>
        <FormGroup controlId="formBasicText" style={{width: '60%', display: 'block', margin: 'auto'}}>
          <ButtonGroup>
          <DropdownButton
            noCaret
            title={this.state.title}
            pullRight id="events-dropdown"
            onSelect={this.handleAddEvent}
            style={{width: '265%', margin: 'auto'}}>
            <MenuItem header>Track</MenuItem>
              <MenuItem eventKey="1">100m</MenuItem>
              <MenuItem eventKey="2">100m Hurdles</MenuItem>
              <MenuItem eventKey="3">110m Hurdles</MenuItem>
              <MenuItem eventKey="4">200m</MenuItem>
              <MenuItem eventKey="5">400m</MenuItem>
              <MenuItem eventKey="6">400m Hurdles</MenuItem>
              <MenuItem eventKey="7">800m</MenuItem>
              <MenuItem eventKey="8">1500m</MenuItem>
              <MenuItem eventKey="9">3000m Steeplechase</MenuItem>
              <MenuItem eventKey="10">5000m</MenuItem>
              <MenuItem eventKey="11">1000m</MenuItem>
              <MenuItem eventKey="12">4x100m</MenuItem>
              <MenuItem eventKey="13">4x400m</MenuItem>
            <MenuItem divider />
            <MenuItem header>Field</MenuItem>
              <MenuItem eventKey="14">High Jump</MenuItem>
              <MenuItem eventKey="15">Pole Vault</MenuItem>
              <MenuItem eventKey="16">Long Jump</MenuItem>
              <MenuItem eventKey="17">Triple Jump</MenuItem>
              <MenuItem eventKey="18">Shot Put</MenuItem>
              <MenuItem eventKey="19">Discus</MenuItem>
              <MenuItem eventKey="20">Hammer</MenuItem>
              <MenuItem eventKey="21">Javelin</MenuItem>
          </DropdownButton>
        </ButtonGroup>

          <Form
            type="text"
            placeholder="Athlete"
            value={this.state.Athlete}
            onChange={this.handleChange}
          />
          <Form
            type="text"
            placeholder="Performance"
            value={this.state.Performance}
            onChange={this.handleChange}
          />
          <Form
            type="text"
            placeholder="Team"
            value={this.state.Team}
            onChange={this.handleChange}
          />
          <Button type="submit" onSubmit={this.handleAddResult} style={{width: '70%', display: 'block', margin: 'auto'}}>
            Add Result
          </Button>
        </FormGroup>
      </form>
      <FormGroup onSubmit={this.handleSubmit} style={{display: 'block', margin: 'auto'}}>
        <Button bsStyle="primary" onClick={this.handleSubmit} style={{width: '15%',display: 'block', margin: 'auto'}}>
          Submit All Results
        </Button>
      </FormGroup>
      <ListGroup style={{width: '30%', display: 'block', margin: 'auto'}}>
        {this.state.allResults.map(listEntries)}
      </ListGroup>
    </div>
    );
  }
}