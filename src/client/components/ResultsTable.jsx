import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

import Navbar from './Navbar.jsx';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [
        [1, 'Data Soong', '11.02', 'TFA', 10],
        [2, 'William T. Riker', '11.25', 'RotS', 8],
        [3, 'Jeordi LaForge', '11.27', 'ESB', 6],
        [4, 'Deeana Troi', '11.30', 'RotJ', 5],
        [5, 'Jean-Luc Picard', '12.3', 'ANH', 4]
      ]
    };
  }

  render() {
    const rows = this.state.rows;

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