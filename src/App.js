import React, { Component } from 'react';
import PhoneForm from './PhoneForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <div className="App">
          전화번호부
        </div>
        <div>
          <PhoneForm
            onCreate={this.handleCreate}
          />
        </div>
      </div>
    );
  }
}

export default App;