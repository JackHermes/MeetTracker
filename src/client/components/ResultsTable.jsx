import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import {ButtonGroup, DropdownButton, MenuItem, Button} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      rows: ['']
    };
    this.handleGET = this.handleGET.bind(this);
    this.handlePOST = this.handlePOST.bind(this);
    this.truncate = this.truncate.bind(this);
  }
  handleGET(event) {
    var that = this;
    fetch('/results').then((response) => {
      return response.json();
    }).then((raceResults) => {
      console.log(raceResults)
      that.setState({title: "Javelin"});
      that.setState({rows: raceResults});
    }).catch((err) => {
      console.error(err);
    })
    // event.preventDefault();
  }

  handlePOST(event) {
    let request = new Request('/100m', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        athlete: 'Worf (IR)',
        time: 12.00,
        school: 'TPM',
        points: 3
      })
    });
    console.log("Click!");
    fetch(request).then((response) => {
      console.log(response); // not sure why 'POST for 100m received.' not part of response when I res.send it
    }).catch((err) => {
      console.log(err);
    })
  }
  seed(event) {
    let request = new Request('/seed', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    fetch(request);
  }

  truncate(event) {
    let request = new Request('/100m', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        delete: true
      })
    });
    fetch(request).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.error(err);
    });
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
        {data[col][rowIndex]}
      </Cell>
    );

    return (
      <div>
        <Navbar />
        <Button bsStyle="default" onClick={this.handleGET}>Results</Button>
        {/* <Button bsStyle="primary" onClick={this.handlePOST}>POST</Button> */}
        {/* <Button bsStyle="warning"
          onClick={this.truncate}>Remove Events</Button>
        <Button bsStyle="info"
          onClick={this.seed}>Seed Data</Button> */}
        <h2>{this.state.title}</h2>
        <Table
          rowHeight={50}
          rowsCount={rows[0].length}
          width={1000}
          height={1000}
          headerHeight={50}
        >
          <Column
            header={<Cell>Place</Cell>}
            cell={<TextCell  data={rows} col={'0'}/>}
            width={200}
          />
          <Column
            header={<Cell>Athlete</Cell>}
            cell={<TextCell data={rows} col={'1'}/>}
            width={200}
          />
          {/* <MyColumn rowIndex={3}/> */}
          <Column
            header={<Cell>Performance</Cell>}
            cell={<TextCell data={rows} col={'2'}/>}
            width={200}
          />
          <Column
            header={<Cell>School</Cell>}
            cell={<TextCell data={rows} col={'3'}/>}
            width={200}
          />
          <Column
            header={<Cell>Points</Cell>}
            cell={<TextCell data={rows} col={'4'}/>}
            width={200}
          />
        </Table>
      </div>
    );
  }
}
// module.exports = ResultsTable;