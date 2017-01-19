import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

export default class Teams extends React.Component {
  constructor(props){
    super(props);

    this.state = {};

    this.fetchLocation = this.fetchLocation.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchLocation() {

    fetch('/location', (response) => {
      // this.setState(response);
      console.log('response: ', response);
      return response;
    }).then((latAndLng) => {
      console.log('latlng: ', latAndLng);
      this.setState(latAndLng);
    }).catch((err) => {if(err) console.log(err);})
  }

  fetchWeather() {
    let data, request;
    console.log('state', this.state);
    data = JSON.stringify(this.state);
    request = {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: data
    };
    fetch('/weather', request).then((weatherData) => {
      console.log('weatherdata', weatherData);
    }).catch((err) => {if(err) console.log(err);})
  }



  render() {
    return (
      <div>
        <Button onClick={this.fetchLocation}>Location</Button>
        <Button onClick={this.fetchWeather}>Weather</Button>
      </div>
    )
  }
}