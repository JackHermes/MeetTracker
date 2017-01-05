import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import Navbar from './Navbar.jsx';
import ResultsTable from './ResultsTable.jsx';

const Home = () => (
  <Navbar />
);

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/results' component={ResultsTable} />
  </Router>
), document.getElementById('app'));