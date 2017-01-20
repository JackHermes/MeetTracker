import React from 'react';
import {ProgressBar, Table} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default class BootstrapTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      rows: ['']
    };
    this.handleGET = this.handleGET.bind(this);
    // this.handlePOST = this.handlePOST.bind(this);
  }

  componentDidMount() {
    this.handleGET();
  }

  handleGET(event) {
    var that = this;
    fetch('/results').then((response) => {
      return response.json();
    }).then((raceResults) => {
      console.log(raceResults)
      that.setState({title: "Javelin"});
      that.setState({rows: raceResults});
    }).catch((err) => {console.error(err);})
    // event.preventDefault();
  }

  render() {
    const results = this.state.rows;
    // const teams = Object.keys(results);

    let entries = (item, index) => (
        <tr key={index}> {/*row [index] cells*/}
          <td>{item.place}</td>
          <td>{item.athlete}</td>
          <td>{item.performance}</td>
          <td>{item.name}</td>
          <td>{item.points}</td>
        </tr>
    )

    return (
      <div>
        <Navbar />
        <h1 style={{width: '15%', display: 'block', margin: 'auto'}}>Event Results</h1>
        <Table responsive striped condensed hover style={{border: 'solid #D3D3D3', borderRadius: 5, width: '40%', display: 'inlineBlock', margin: 'auto'}}>
          <thead>
            <tr> {/*column headings*/}
              <th>Place</th>
              <th>Athlete</th>
              <th>Performance</th>
              <th>School</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody> {/*row entries*/}
            {results.map(entries)}
          </tbody>
        </Table>
      </div>
    )
  }
}
