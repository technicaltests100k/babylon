import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
  *	Label React Type component.
  */
export class Label extends Component {
  /**
  *	Props implementation.
  */
  static propTypes = {
    formFor: PropTypes.string,
    form: PropTypes.string
  };
  /**
  * Implements defaultProps().
  */
  static defaultProps = {};
  /**
  *	Label contructor.
  * @param {object} props to constructor.
  *	@constructor
  */
  constructor(props) {
    super(props);
  }
  /**
  * Render
  * @return {ReactElement} markup
  */
  render() {
    const { formFor } = this.props;
    return <label for={formFor}>{this.props.children}</label>;
  }
}

export default Label;
