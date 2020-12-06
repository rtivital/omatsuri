import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import classes from './Background.styles.less';

export default function Background({ className, component: Element = 'div', ...others }) {
  const [theme] = useTheme();
  return <Element className={cx(classes.background, classes[theme], className)} {...others} />;
}

Background.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
};
