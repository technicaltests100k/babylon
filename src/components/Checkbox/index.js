import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import icon from '../../icons.svg';

class Checkbox extends Component {
  /**
  *	Props implementation.
  */
  static propTypes = {
    extendStyle: PropTypes.string,
    checked: PropTypes.bool
  };

  /**
  * Implements defaultProps().
  */
  static defaultProps = {
    checked: false,
    extendStyle: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.checked
    };
  }

  handleOnClick = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    const { extendStyle } = this.props;
    const style = this.state.isChecked ? 'checked' : '';
    return (
      <div
        className={`checkbox ${style} ${extendStyle}`}
        onClick={this.handleOnClick}
      >
        <svg className={'checkboxIcon'}>
          <use xlinkHref={`${icon}#icon-checkmark`} />
        </svg>
      </div>
    );
  }
}

export default Checkbox;
