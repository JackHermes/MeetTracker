import React from 'react';
import {Image} from 'react-bootstrap';

import CurrentScore from './CurrentScore.jsx';
import Navbar from './Navbar.jsx';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

render() {
  const tableStyle = () => {
    return {
      paddingLeft: "5%"
    }
  }
  const TextCell = ({rowIndex, data, col}) => (
    <Cell>
      {data[rowIndex][col]}
    </Cell>
  );
  return (
    <div>
      <Navbar />
      <Image src="http://olympus.wag.ca/uploads/olympus/olympian_deity_icon_7.png?t=1429291255" style={{width: '10%', display: 'block', margin: 'auto'}}/>
      <h1 style={{width: '15%', margin: 'auto', display: 'block'}}><b>Meet Tracker</b></h1>
      <br />
      <br />
      <h3 style={{width: '18%', margin: 'auto', display: 'block'}}>A Tool for Track and Field</h3>
    </div>
  );
  };
};
