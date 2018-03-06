import React, { Component } from 'react';
import './App.css';
import Controls from './Controls';
import Display from './Display';

export default class App extends Component {

  render() {
    return (
      <div>
        <div>Redux Quiz</div>

        <Controls/>

        <Display/>
      </div>
    );
  }
}