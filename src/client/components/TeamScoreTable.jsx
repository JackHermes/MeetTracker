import React from 'react';
import {ProgressBar, Table} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default class BootstrapTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const results = this.props.scores;
    const teams = Object.keys(results);

    let entries = (item, index) => (
        <tr key={index}> {/*row [index] cells*/}
          <td>{index + 1}</td>
          <td>{item}</td>
          <td>{results[item]}</td>
        </tr>
    )

    return (
      <div>
        <Table responsive striped condensed hover>
          <thead>
            <tr> {/*column headings*/}
              <th>#</th>
              <th>School</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(entries)}
          </tbody>
        </Table>
      </div>
    )
  }
}