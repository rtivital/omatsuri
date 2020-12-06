import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import classes from './Button.styles.less';

export default function Button({
  className = null,
  component: Element = 'button',
  type = 'button',
  theme = 'primary',
  elementRef = null,
  children = null,
  ...others
}) {
  const [appTheme] = useTheme();

  return (
    <Element
      data-button
      className={cx(classes.button, classes[theme], classes[appTheme], className)}
      type={type}
      ref={elementRef}
      {...others}
    >
      {children}
    </Element>
  );
}

Button.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  theme: PropTypes.oneOf(['primary', 'success', 'secondary', 'blue', 'red']),
  elementRef: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  maxWidth: PropTypes.number,
  style: PropTypes.object,
};
