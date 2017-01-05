import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import BootstrapTable from './BootstrapTable.jsx';
import Form from './Form.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import ResultsTable from './ResultsTable.jsx';

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    {/* <Route path='/bootleg' component={BootstrapTable} /> */}
    <Route path='/results' component={ResultsTable} />
    <Route path='/input' component={Form} />
  </Router>
), document.getElementById('app'));