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
      <Image src="http://olympus.wag.ca/uploads/olympus/olympian_deity_icon_7.png?t=1429291255" style={{width: '5%', display: 'block', margin: 'auto'}}/>
    </div>
  );
  };
};
