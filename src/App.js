import React, { Component } from 'react';
import TestGridPane from './TestGridPane';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>FrozenGrid Test</h2>
        <TestGridPane />
      </div>
    );
  }
}

export default App;
