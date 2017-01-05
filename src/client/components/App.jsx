import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import Form from './Form.jsx';
import Navbar from './Navbar.jsx';
import ResultsTable from './ResultsTable.jsx';

const Home = () => (
  <Navbar />
);

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/results' component={ResultsTable} />
    <Route path='/input' component={Form} />
  </Router>
), document.getElementById('app'));