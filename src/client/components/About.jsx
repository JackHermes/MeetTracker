import React from 'react';
import {Clearfix, Col, Grid, Image, Row, Tooltip} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default () => (
  <div>
    <Navbar />
    <h1 style={{marginLeft: "25%"}}><b>Built with these:</b></h1>
    {/* <Tooltip placement="top" className="in" id="tooltip-top" style={{marginLeft: "33%"}}>Built with these:</Tooltip> */}
    <Image src="../tech-stack" style={{display: 'block', margin: 'auto'}}/>
    <h1 style={{marginLeft: '2%', display: 'inlinelock'}}><b>Contribute here:</b></h1>
    <a href="https://github.com/JackHermes/MeetTracker">
      <Image src="http://docs.whitesourcesoftware.com/download/attachments/17989744/github_logo.png?version=1&modificationDate=1463491374000" />
    </a>
    <a href="https://github.com/JackHermes"><Image src="../profile" circle style={{float: 'right', marginRight: '2%'}}/></a>
    <h3 style={{float: 'right'}}><b>Made by him:</b></h3>
  </div>
);