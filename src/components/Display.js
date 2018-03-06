import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayText } from './actions';

class Display extends Component {

  render() {
    const { displayText } = this.props;

    return (
      <div>
        <h3>{displayText}</h3>
      </div>
    );
  }
}

export default connect(
  state => ({ display: state.display }),
  { displayText }
)(Display);