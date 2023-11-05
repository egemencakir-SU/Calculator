import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    input: '',
    total: 0,
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleOperation = (operation) => {
    const { input, total } = this.state;
    let newTotal = total;

    switch (operation) {
      case 'add':
        newTotal += parseFloat(input);
        break;
      case 'subtract':
        newTotal -= parseFloat(input);
        break;
      case 'multiply':
        newTotal *= parseFloat(input);
        break;
      case 'divide':
        newTotal /= parseFloat(input);
        break;
      default:
        break;
    }

    this.setState({ total: newTotal, input: '' });
  };

  resetInput = () => {
    this.setState({ input: '' });
  };

  resetResult = () => {
    this.setState({ total: 0, input: '' });
  };

  render() {
    const { input, total } = this.state;

    return (
      <div className="App">
        <h1>Simplest Working Calculator</h1>
        <input
          type="text"
          value={input}
          onChange={this.handleInputChange}
          placeholder="Enter a number"
        />
        <div>
          <button onClick={() => this.handleOperation('add')}>Add</button>
          <button onClick={() => this.handleOperation('subtract')}>Subtract</button>
          <button onClick={() => this.handleOperation('multiply')}>Multiply</button>
          <button onClick={() => this.handleOperation('divide')}>Divide</button>
          <button onClick={this.resetInput}>Reset Input</button>
          <button onClick={this.resetResult}>Reset Result</button>
        </div>
        <p>Total: {total}</p>
      </div>
    );
  }
}

export default App;
