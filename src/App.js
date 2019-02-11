import React, { Component } from 'react';
import { Board } from './board';
import { Checkbox } from './checkbox';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>React Exercises</h1>
        <Board />
        <Checkbox />
      </div >
    );
  }
}

export default App;
