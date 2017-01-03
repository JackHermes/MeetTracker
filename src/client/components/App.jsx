import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import Navbar from './Navbar.jsx';


ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path='/' component={Navbar} />
  </Router>
), document.getElementById('app'));