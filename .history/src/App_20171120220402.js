import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import Label from './components/Label';
import icon from './icons.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Label>
          Test 1: <Checkbox />
        </Label>
        <Label>
          Test 2: <Checkbox />
        </Label>
        <Label>
          Test 3: <Checkbox />
        </Label>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <svg viewBox={'0 0 32 32'}>
          <use xlinkHref={`${icon}#icon-checkmark`} />
        </svg>
      </div>
    );
  }
}

export default App;
