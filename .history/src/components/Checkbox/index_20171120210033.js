import React, { Component } from 'react';
import './style.css';

class Checkbox extends Component {
  constructor() {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleOnClick = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    return <div className={'checkbox'} onClick={this.handleOnClick} />;
  }
}

export default Checkbox;
