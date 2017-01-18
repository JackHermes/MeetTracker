import React from 'react';
import {Button} from 'react-bootstrap';

import Home from './Home.jsx';
import Navbar from './Navbar.jsx';

export default class CurrentScore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.retrieveScore = this.retrieveScore.bind(this);
  };

  retrieveScore() {
    console.log("retrieveScore");
    fetch('/score').then((response) => {
      return response.json();
    }).then((currentScore) => {
      console.log(currentScore);
      this.setState(currentScore);
    }).catch((err) => {if(err) console.log(err);});
  }

  render() {
    return (
      <div>
        <Button onClick={this.retrieveScore} bsStyle='default'>Current Score</Button>
        <Home scores={this.state} />
      </div>
    );
  };
};