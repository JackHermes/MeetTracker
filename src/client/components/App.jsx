import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import Navbar from './Navbar.jsx';
import ResultsTable from './ResultsTable.jsx';

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Navbar} />
  </Router>
), document.getElementById('app'));