import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Input.styles.less';

export default function Input({
  className,
  invalid = false,
  component: Element = 'input',
  ...others
}) {
  return (
    <Element className={cx(classes.input, { [classes.invalid]: invalid }, className)} {...others} />
  );
}

Input.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  className: PropTypes.string,
  invalid: PropTypes.bool,
};
