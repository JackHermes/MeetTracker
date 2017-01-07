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
    // this.setState = this.setState.bind(this);
  }

[
  {
    athlete: "Data Soong",
    points: 10,
    resultsid: 1,
    school: "TFA",
    time: 11.02
  }
]

  handlePOST(event) {
    var request = new Request('/100m', {
      method: 'POST',
      body: "TEST"
    });
    console.log("Click!");
    fetch(request).then(function(response) {
      console.log(response);
    }).catch(function(err) {
      console.log(err);
    })
  }
  handleGET(event) {
    console.log("Click.");
    fetch('/100m').then(function(response) {
      return response.json();
    }).then(function(raceResults){
      console.log(raceResults);
      this.setState({rows: raceResults}); // 'this' currently undefined...
    }).catch(function(err) {
      console.log(err);
    })
    // this.setState({event: '', athlete: '', time: '', school: ''})
    // alert('An event was submitted: ' + this.state.value);
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