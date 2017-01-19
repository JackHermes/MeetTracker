import React from 'react';

import CurrentScore from './CurrentScore.jsx';
import Navbar from './Navbar.jsx';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

render() {
  const rows = [
    [5, 'Jean-Luc Picard', '12.3', 'Erebor', 4],
    [1, 'Data Soong', '11.02', 'Greenwood', 10],
    [4, 'Deeana Troi', '11.30', 'Minas Tirith', 5],
    [3, 'Jeordi LaForge', '11.27', 'Rivendell', 6],
    [5, 'Jean-Luc Picard', '12.3', 'Shire', 9],
    [2, 'William T. Riker', '11.25', 'Valinor', 8]

  ];
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
      <CurrentScore />
    </div>
  );
  };
};
