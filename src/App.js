import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import Label from './components/Label';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Babylon TEST</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Label extendStyle={'colorLabel'}>
          Test 1: <Checkbox />
        </Label>
        <Label>
          Test 2: <Checkbox checked />
        </Label>
        <Label>
          Test 3: <Checkbox checked />
        </Label>

        <Checkbox />
        <Label>Label test</Label>
      </div>
    );
  }
}

export default App;
