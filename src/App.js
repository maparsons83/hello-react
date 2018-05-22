import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      value: props.value,
    }
  }
  render() {
   return <div style={{color: this.state.color}}>{this.state.value}</div>
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Hello, <Text color="green" value="Kenzie" /></h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1><Text color="blue" value="Matt" /></h1>
        </header>
      </div>
    );
  }
}

export default App;
