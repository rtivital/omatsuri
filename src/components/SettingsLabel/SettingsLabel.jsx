import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import classes from './SettingsLabel.styles.less';

export default function SettingsLabel({ className, children }) {
  const [theme] = useTheme();
  return <h2 className={cx(classes.label, classes[theme], className)}>{children}</h2>;
}

SettingsLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
