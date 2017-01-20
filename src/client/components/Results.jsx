import React from 'react';
import {DropdownButton, MenuItem, ProgressBar, Table} from 'react-bootstrap';

import Navbar from './Navbar.jsx';

export default class BootstrapTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      rows: [''],
      sort: 'Place'
    };
    this.handleGET = this.handleGET.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.handleGET();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.handleGET();
  // }

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

  handleSort(eventKey, event) {
    const sortOptions = [
      'None', 'Place', 'Event', 'Teams', 'Points'
    ]

    this.setState({sort: sortOptions[eventKey]})
    console.log(sortOptions[eventKey]);
  }

  render() {
    const results = this.state.rows;
    // const teams = Object.keys(results);

    let entries = (item, index) => (
        <tr key={index}> {/*row [index] cells*/}
          <td>{item.place}</td>
          <td>{item.athlete}</td>
          <td>{item.event}</td>
          <td>{item.performance}</td>
          <td>{item.name}</td>
          <td>{item.points}</td>
        </tr>
    )

    let sortingHat = (a,b) => {
      let orderBy = this.state.sort;
      if(orderBy === 'Place') {
        return a.place - b.place;
      } else if (orderBy === 'Event') {
        if (a.event < b.event) {
          return -1;
        }
        if (a.event > b.event) {
          return 1;
        }
        return 0;
      } else if (orderBy  === 'Team') {
        if (a.team < b.team) {
          return -1;
        }
        if (a.team > b.team) {
          return 1;
        }
        return 0;
      } else if (orderBy === 'Points') {
        return b.points - a.points;
      }
    }

    return (
      <div>
        <Navbar />
        <h1 style={{width: '15%', display: 'block', margin: 'auto'}}>Event Results</h1>
        <Table responsive striped condensed hover style={{border: 'solid #D3D3D3', borderRadius: 5, width: '40%', display: 'inlineBlock', margin: 'auto'}}>
          {/* <DropdownButton
            noCaret
            title={`Sort by: ${this.state.sort}`}
            onSelect={this.handleSort}
            style={{width: '100%', margin: 'auto'}}>
            <MenuItem header>Sort by: </MenuItem>
            <MenuItem eventKey="1">Place</MenuItem>
            <MenuItem eventKey="2">Event</MenuItem>
            <MenuItem eventKey="3">Team</MenuItem>
            <MenuItem eventKey="4">Points</MenuItem>
          </DropdownButton> */}
          <thead>
            <tr> {/*column headings*/}
              <th>Place</th>
              <th>Athlete</th>
              <th>Event</th>
              <th>Performance</th>
              <th>School</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody> {/*row entries*/}
            {results.sort(sortingHat).map(entries)}
          </tbody>
        </Table>
      </div>
    )
  }
}
