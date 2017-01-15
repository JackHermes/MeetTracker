import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import BootstrapTable from './BootstrapTable.jsx';
import EnterResults from './EnterResults.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import ResultsTable from './ResultsTable.jsx';
import Teams from './Teams.jsx';

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    {/* <Route path='/bootleg' component={BootstrapTable} /> */}
    <Route path='/results' component={ResultsTable} />
    <Route path='/enterResults' component={EnterResults} />
    <Route path='/teams' component={Teams} />
  </Router>
), document.getElementById('app'));