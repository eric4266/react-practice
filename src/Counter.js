import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div className="Value">
        <div>값 : {this.state.number}</div>
        <button className="Button" onClick={this.handleIncrease}>+</button>
        <button className="Button" onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;