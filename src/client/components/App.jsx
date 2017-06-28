import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import About from './About.jsx';
import Coaches from './Coaches.jsx';
import CurrentScore from './CurrentScore.jsx';
import EnterResults from './EnterResults.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Results from './Results.jsx';

ReactDOM.render ((
  <Router history={browserHistory}>
    <Route path='/MeetTracker/' component={Home} />
    <Route path='/MeetTracker/about' component={About} />
    <Route path='/MeetTracker/results' component={Results} />
    <Route path='/MeetTracker/add/eventResults' component={EnterResults} />
    <Route path='/MeetTracker/coaches' component={Coaches} />
    <Route path='/MeetTracker/score' component={CurrentScore} />
  </Router>
), document.getElementById('app'));
