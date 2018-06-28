import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          Number
        </div>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;