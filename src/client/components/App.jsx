import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import About from './About.jsx';
import Coaches from './Coaches.jsx';
import CurrentScore from './CurrentScore.jsx';
import EnterResults from './EnterResults.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Results from './Results.jsx';

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/results' component={Results} />
    <Route path='/add/eventResults' component={EnterResults} />
    <Route path='/coaches' component={Coaches} />
    <Route path='/score' component={CurrentScore} />
  </Router>
), document.getElementById('app'));
