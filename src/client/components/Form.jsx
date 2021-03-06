import React from 'react';
import { FormControl } from 'react-bootstrap';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };
  //
  // handleChange(event) {
  //   console.log("Form",event.target)
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('An event was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
    <div>
          <FormControl
            type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
          {/* <FormControl
            type="text"
            value={this.state.value}
            placeholder="Athlete"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Time"
            onChange={this.handleChange}
          /> */}
    </div>
    );
  }
}