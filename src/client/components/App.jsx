import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import BootstrapTable from './BootstrapTable.jsx';
import EnterResults from './EnterResults.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import ResultsTable from './ResultsTable.jsx';
import Coaches from './Coaches.jsx';

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    {/* <Route path='/bootleg' component={BootstrapTable} /> */}
    <Route path='/results' component={ResultsTable} />
    <Route path='/enterResults' component={EnterResults} />
    <Route path='/coaches' component={Coaches} />
  </Router>
), document.getElementById('app'));