import React, { Component } from 'react';
import './style.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleOnClick = () => {
    console.log('state');
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    const style = this.isChecked ? 'checked' : '';
    return <div className={`checkbox ${style}`} onClick={this.handleOnClick} />;
  }
}

export default Checkbox;
