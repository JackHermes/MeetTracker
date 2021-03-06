import React from 'react';

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
    fetch('/MeetTracker/score').then((response) => {
      return response.json();
    }).then((currentScore) => {
      console.log(currentScore);
      this.setState(currentScore);
    }).catch((err) => {if(err) console.log(err);});
  }

  render() {
    return (
        <TeamScoreTable scores={this.state} />
    );
  };
};
