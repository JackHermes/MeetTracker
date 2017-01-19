import React from 'react';
import {Button} from 'react-bootstrap';

import TeamScoreTable from './TeamScoreTable.jsx';
import Navbar from './Navbar.jsx';

export default class CurrentScore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.retrieveScore = this.retrieveScore.bind(this);
  };

  componentDidMount() {
    this.retrieveScore();
  }

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
        <h2>Current Score</h2>
        <TeamScoreTable scores={this.state} />
      </div>
    );
  };
};
