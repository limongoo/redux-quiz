import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { displayText } from './actions';

class Display extends Component {


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
        <h3>{greeting}</h3>
        <h3>{name}</h3>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    greeting: state.greeting,
    name: state.name
  }),
  null
)(Display);