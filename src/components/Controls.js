import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGreeting, changeName } from './actions';

class Controls extends Component {

 

  handleGreetingChange = ({ target }) => {
    this.props.changeGreeting(target.value);
  };

  handleNameChange = ({ target }) => {
    this.props.changeName(target.value);
  };

  render() {

    const { greeting, name } = this.props;

    return (
      <div>
        
        <label htmlFor="greeting"> Greeting: 
        <input required id="greeting" name="greeting" value={greeting} onChange={this.handleGreetingChange} placeholder="ex: Hello"/>
        </label>

        <label htmlFor="name"> Name:
        <input required id="name" name="name" value={name} onChange={this.handleNameChange} placeholder="ex: Name"/>
        </label>
        
        
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: state.greeting,
    name: state.name
  }),
  { changeGreeting, changeName }
)(Controls);