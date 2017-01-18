import React from 'react';
import {Button, ButtonGroup, ControlLabel, FormControl, FormGroup, HelpBlock, MenuItem, SplitButton} from 'react-bootstrap';

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
      allResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddResult = this.handleAddResult.bind(this);
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
    this.setState({Event: '', Athlete: '', Performance: '', Team: ''});
    this.setState({allResults: allResults});
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
    // .then((response) => {
      console.log("EnterResults", this.state)
      // clear form fields
      this.setState({allResults: ''});
    // })
  }

  render() {
    return (
    <div>
      <Navbar />
      <form onSubmit={this.handleAddResult}>
        <FormGroup
          controlId="formBasicText"
          style={{width: '30%', paddingLeft: '5%'}}>
          <ControlLabel>Enter Event Results</ControlLabel>
          <ButtonGroup>

          <SplitButton title="Track" pullRight id="track-events-dropdown" onSelect={function(eventKey, event){console.log("Click", eventKey, event.target);}}>
            <MenuItem eventKey="1">100m</MenuItem>
            <MenuItem eventKey="1">100m Hurdles</MenuItem>
            <MenuItem eventKey="2">110m Hurdles</MenuItem>
            <MenuItem eventKey="2">200m</MenuItem>
            <MenuItem eventKey="2">400m</MenuItem>
            <MenuItem eventKey="2">400m Hurdles</MenuItem>
            <MenuItem eventKey="2">800m</MenuItem>
            <MenuItem eventKey="2">1500m</MenuItem>
            <MenuItem eventKey="2">3000m Steeplechase</MenuItem>
            <MenuItem eventKey="2">5000m</MenuItem>
            <MenuItem eventKey="2">1000m</MenuItem>
            <MenuItem eventKey="2">4x100m</MenuItem>
            <MenuItem eventKey="2">4x400m</MenuItem>
          </SplitButton>

          <SplitButton title="Field" pullRight id="field-events-dropdown" onSelect={function(eventKey, event){console.log("Click", eventKey, event.target);}}>
            <MenuItem eventKey="3">High Jump</MenuItem>
            <MenuItem eventKey="3">Pole Vault</MenuItem>
            <MenuItem eventKey="3">Long Jump</MenuItem>
            <MenuItem eventKey="3">Triple Jump</MenuItem>
            <MenuItem eventKey="3">Shot Put</MenuItem>
            <MenuItem eventKey="3">Discus</MenuItem>
            <MenuItem eventKey="3">Hammer</MenuItem>
            <MenuItem eventKey="3">Javelin</MenuItem>
          </SplitButton>
        </ButtonGroup>

          <Form
            type="text"
            placeholder="Event"
            value={this.state.Event}
            onChange={this.handleChange}
          />
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
          <Button type="submit" onSubmit={this.handleAddResult}>Add Result</Button>
        </FormGroup>
      </form>
      <FormGroup onSubmit={this.handleSubmit}>
        <Button bsStyle="primary" onClick={this.handleSubmit}>Submit All Results</Button>
      </FormGroup>
    </div>
    );
  }
}