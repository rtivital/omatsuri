import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import classes from './Input.styles.less';

export default function Input({
  className,
  invalid = false,
  component: Element = 'input',
  ...others
}) {
  const [theme] = useTheme();
  return (
    <Element
      className={cx(classes.input, classes[theme], { [classes.invalid]: invalid }, className)}
      {...others}
    />
  );
}

Input.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  className: PropTypes.string,
  invalid: PropTypes.bool,
};
