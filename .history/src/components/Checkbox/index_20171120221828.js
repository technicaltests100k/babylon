import React, { Component } from 'react';
import './style.css';
import icon from '../../icons.svg';

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
      <div className={`checkbox ${style}`} onClick={this.handleOnClick}>
        <svg className={'icon'}>
          <use xlinkHref={`${icon}#icon-checkmark`} />
        </svg>
      </div>
    );
  }
}

export default Checkbox;
