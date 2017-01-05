import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
// import {Table} from 'react-bootstrap';
import Navbar from './Navbar.jsx';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

render() {
  const rows = [
    [1, 'Data Soong', '11.02', 'HRR', 10],
    [2, 'William T. Riker', '11.25', 'WU', 8],
    [3, 'Jeordi LaForge', '11.27', 'TDK', 6],
    [4, 'Deeana Troi', '11.30', 'CWU', 5],
    [5, 'Jean-Luc Picard', '12.3', 'MCU', 4]
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
      <h2>Current Score</h2>
      <Table
        rowHeight={50}
        rowsCount={rows.length}
        width={400}
        height={300}
        headerHeight={50}>
        <Column
          header={<Cell>School</Cell>}
          cell={<TextCell data={rows} col={3}/>}
          width={200}
        />
        <Column
          header={<Cell>Points</Cell>}
          cell={<TextCell data={rows} col={4}/>}
          width={200}
        />
      </Table>
    </div>
  );
  };
};