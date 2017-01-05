import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

import Navbar from './Navbar.jsx';
// Table data as a list of array.

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

// const resultsCell = () => (
//   ({rowIndex}) => (
//     <Cell>{rows[rowIndex][2]}</Cell>
// )
// );

// Render your table
  render() {
    const rows = [
      [1, 'Anon', '11.22', 'WSU', 10],
      [2, 'Jordan Scholten', '11.25', 'WU', 8],
      [3, 'Anon', '11.27', 'UW', 6],
      [4, 'Kyle Fremd', '11.30', 'CWU', 5],
      [5, 'Anon', '12.3', 'SASS', 4]
      // and more
    ];
    const MyColumn = (
      <Column
        cell={({rowIndex, width, height}) => (
          <Cell /*
            width={width}
            height={height}
            className="my-class"*/>
            Cell number: {rowIndex}
           </Cell>
        )}
        width={300}
      />
    );
    const TextCell = ({rowIndex, data, col}) => (
      <Cell>
        {data[rowIndex][col]}
      </Cell>
    );

    return (
      <div>
        <Navbar />
        <h2>100m Dash</h2>
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={1000}
          height={300}
          headerHeight={50}>
          <Column
            header={<Cell>Place</Cell>}
            cell={<TextCell data={rows} col={0}/>}
            width={200}
          />
          <Column
            header={<Cell>Athlete</Cell>}
            cell={<TextCell data={rows} col={1}/>}
            width={200}
          />
          {/* <MyColumn rowIndex={3}/> */}
          <Column
            header={<Cell>Time</Cell>}
            cell={<TextCell data={rows} col={2}/>}
            width={200}
          />
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
  }
}
// module.exports = ResultsTable;