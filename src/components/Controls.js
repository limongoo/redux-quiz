import React, { Component } from 'react';

export default class Controls extends Component {

  constructor(props) {
    super(props);

    this.state = {
      greeting: '',
      name: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ 
      greeting: '',
      name: ''
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { greeting, name } = this.state;

    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="greeting"> Greeting: 
          <input required id="greeting" name="greeting" value={greeting} onChange={this.handleChange} placeholder="ex: Hello"/>
          </label>

          <label htmlFor="name"> Name:
          <input required id="name" name="name" value={name} onChange={this.handleChange} placeholder="ex: Name"/>
          </label>
        
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}