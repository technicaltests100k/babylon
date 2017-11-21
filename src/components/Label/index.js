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
    form: PropTypes.string,
    content: PropTypes.string.isRequired,
    children: PropTypes.element
  };

  /**
  * Render
  * @return {ReactElement} markup
  */
  render() {
    const { htmlFor, form, extendStyle, content, children } = this.props;
    return (
      <label className={`label ${extendStyle}`} htmlFor={htmlFor} form={form}>
        {content}
        {children}
      </label>
    );
  }
}
