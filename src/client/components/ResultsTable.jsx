import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import {ButtonGroup, DropdownButton, MenuItem, Button} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: []
    };
    this.handleGET = this.handleGET.bind(this);
    this.handlePOST = this.handlePOST.bind(this);
  }

  handlePOST(event) {
    var request = new Request('/100m', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hey: 'you',
        yo: 'me'
      })
    });
    console.log("Click!");
    fetch(request).then((response) => {
      console.log(response); // not sure why 'POST for 100m received.' not part of response
    }).catch((err) => {
      console.log(err);
    })
  }
  handleGET(event) {
    var that = this;
    fetch('/100m').then((response) => {
      return response.json();
    }).then((raceResults) => {
      that.setState({rows: raceResults});
    }).catch((err) => {
      console.error(err);
    })
    // event.preventDefault();
  }

  render() {
  const buttonGroupInstance = (
    <ButtonGroup>
      <DropdownButton bsStyle="success" title="Dropdown">
        <MenuItem key="1">Dropdown link</MenuItem>
        <MenuItem key="2">Dropdown link</MenuItem>
      </DropdownButton>
      <Button bsStyle="info">Middle</Button>
      <Button bsStyle="info">Right</Button>
    </ButtonGroup>
  );

    const rows = this.state.rows;

    const TextCell = ({rowIndex, data, col}) => (
      <Cell>
        {data[rowIndex][col]}
      </Cell>
    );

    return (
      <div>
        <Navbar />
        <Button bsStyle="success" onClick={this.handleGET}>GET</Button>
        <Button bsStyle="primary" onClick={this.handlePOST}>POST</Button>
        <h2>100m Dash</h2>
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={1000}
          height={300}
          headerHeight={50}
        >
          <Column
            header={<Cell>Place</Cell>}
            cell={<TextCell data={rows} col={'resultsid'}/>}
            width={200}
          />
          <Column
            header={<Cell>Athlete</Cell>}
            cell={<TextCell data={rows} col={'athlete'}/>}
            width={200}
          />
          {/* <MyColumn rowIndex={3}/> */}
          <Column
            header={<Cell>Time</Cell>}
            cell={<TextCell data={rows} col={'time'}/>}
            width={200}
          />
          <Column
            header={<Cell>School</Cell>}
            cell={<TextCell data={rows} col={'school'}/>}
            width={200}
          />
          <Column
            header={<Cell>Points</Cell>}
            cell={<TextCell data={rows} col={'points'}/>}
            width={200}
          />
        </Table>
      </div>
    );
  }
}
// module.exports = ResultsTable;