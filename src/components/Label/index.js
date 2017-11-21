import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
  *	Label React Type component.
  */
export default class Label extends Component {
  /**
  *	Props implementation.
  */
  static propTypes = {
    extendStyle: PropTypes.string,
    htmlFor: PropTypes.string,
    form: PropTypes.string
  };

  /**
  * Render
  * @return {ReactElement} markup
  */
  render() {
    const { htmlFor, form, extendStyle } = this.props;
    return (
      <label className={`label ${extendStyle}`} htmlFor={htmlFor} form={form}>
        {this.props.children}
      </label>
    );
  }
}
