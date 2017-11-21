import React, { Component } from 'react';
import './style.css';
// import icon from '../../icons.svg';

class Checkbox extends Component {
  constructor() {
    super();
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
    const style = this.state.isChecked ? 'checked' : '';
    return (
      <span className={`checkbox ${style}`} onClick={this.handleOnClick} />
    );
  }
}

export default Checkbox;
