import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import directions from '../directions';
import classes from './DirectionPicker.styles.less';

export default function DirectionPicker({ className, value, onChange }) {
  return <div className={cx(classes.wrapper, className)}>{value}</div>;
}

DirectionPicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOf(directions).isRequired,
};
