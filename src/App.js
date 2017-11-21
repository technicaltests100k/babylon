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
        <Label content={'Label test 1'}>
          <Checkbox />
        </Label>
        <Label content={'Label test 2'}>
          <Checkbox />
        </Label>
        <Label content={'Label already checked'}>
          <Checkbox checked />
        </Label>
        <Label
          extendStyle={'colorLabel'}
          content={'I am an alone red Label :('}
        />
        <p>This is an alone Checkbox :(, but you can still click me! :)</p>
        <Checkbox />
      </div>
    );
  }
}

export default App;
