import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import icon from '../../icons.svg';

export default class Checkbox extends PureComponent {
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

  /**
   * The state of isChecked can be define by a the checked prop. If not provided, it uses the default.
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.checked
    };
  }

  /**
   * It toggles the checkbox's state when onClick is fired.
   */
  handleOnClick = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    const { extendStyle } = this.props;
    return (
      <div className={`checkbox ${extendStyle}`} onClick={this.handleOnClick}>
        {this.state.isChecked ? (
          <svg className={'checkboxIcon'}>
            <use xlinkHref={`${icon}#icon-checkmark`} />
          </svg>
        ) : null}
      </div>
    );
  }
}
