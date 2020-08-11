import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Input.styles.less';

export default function Input({ className, invalid = false, ...others }) {
  return (
    <input className={cx(classes.input, { [classes.invalid]: invalid }, className)} {...others} />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
};
